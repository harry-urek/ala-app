const nodemailer = require('nodemailer');
const OAuth2Helper = require('../../utils/oauth2Helper');

// Next.js API route for handling contact form submissions
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { fullName, email, company, message } = req.body;
            
            // Basic validation
            if (!fullName || !email || !message) {
                return res.status(400).json({
                    success: false,
                    message: 'Full name, email, and message are required.'
                });
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    success: false,
                    message: 'Please provide a valid email address.'
                });
            }

            // Initialize OAuth2 helper
            const oauth2Helper = new OAuth2Helper();
            
            // Verify OAuth2 setup
            const isSetupValid = await oauth2Helper.verifySetup();
            if (!isSetupValid) {
                throw new Error('OAuth2 setup is invalid or incomplete');
            }

            // Get OAuth2 authentication configuration
            const auth = await oauth2Helper.getNodemailerAuth();

            // Create nodemailer transporter with OAuth2 for Gmail
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: auth
            });

            // Email template for the firm
            const firmEmailTemplate = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }
                        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                        .field { margin: 15px 0; }
                        .field strong { color: #2c3e50; }
                        .message-box { background-color: white; padding: 15px; border-left: 4px solid #3498db; margin: 15px 0; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>New Contact Form Submission</h2>
                            <p>ALA Law Associates</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <strong>Name:</strong> ${fullName}
                            </div>
                            <div class="field">
                                <strong>Email:</strong> ${email}
                            </div>
                            <div class="field">
                                <strong>Company:</strong> ${company || 'Not provided'}
                            </div>
                            <div class="field">
                                <strong>Submission Date:</strong> ${new Date().toLocaleString()}
                            </div>
                            <div class="message-box">
                                <strong>Message:</strong><br>
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Email template for the client confirmation
            const clientEmailTemplate = `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; }
                        .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
                        .highlight { background-color: #3498db; color: white; padding: 10px; border-radius: 5px; margin: 15px 0; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>Thank You for Contacting Us</h2>
                            <p>ALA Law Associates</p>
                        </div>
                        <div class="content">
                            <p>Dear ${fullName},</p>
                            
                            <p>Thank you for reaching out to ALA Law Associates. We have received your message and appreciate you taking the time to contact us.</p>
                            
                            <div class="highlight">
                                <strong>We will reach out to you soon!</strong>
                            </div>
                            
                            <p>Our team will review your inquiry and get back to you within 24 hours during business days. If your matter is urgent, please don't hesitate to call our office directly.</p>
                            
                            <p>Here's a summary of what you sent us:</p>
                            <ul>
                                <li><strong>Name:</strong> ${fullName}</li>
                                <li><strong>Email:</strong> ${email}</li>
                                <li><strong>Company:</strong> ${company || 'Not provided'}</li>
                                <li><strong>Date:</strong> ${new Date().toLocaleDateString()}</li>
                            </ul>
                            
                            <p>Best regards,<br>
                            ALA Law Associates Team</p>
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Send email to the firm
            await transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: process.env.FIRM_EMAIL || 'alkalawassociates@outlook.com',
                subject: `New Contact Form Submission from ${fullName}`,
                html: firmEmailTemplate
            });

            // Send confirmation email to the client
            await transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: email,
                subject: 'Thank you for contacting ALA Law Associates - We will reach out soon',
                html: clientEmailTemplate
            });

            console.log('Contact form submission processed successfully:', {
                fullName,
                email,
                company: company || 'Not provided',
                timestamp: new Date().toISOString()
            });

            return res.status(200).json({
                success: true,
                message: 'Thank you for your message. We have sent you a confirmation email and will get back to you within 24 hours.'
            });

        } catch (error) {
            console.error('Contact form error:', error);
            
            // Check for specific OAuth2/authentication errors
            if (error.code === 'EAUTH' || error.response?.includes('Authentication')) {
                return res.status(500).json({
                    success: false,
                    message: 'Email authentication failed. Please contact support.'
                });
            }
            
            // Check for OAuth2 token expiration
            if (error.response?.includes('invalid_grant') || error.response?.includes('Token has been expired')) {
                console.error('OAuth2 token expired. Please refresh the access token.');
                return res.status(500).json({
                    success: false,
                    message: 'Email service temporarily unavailable. Please try again later or contact us directly.'
                });
            }
            
            // Check for Gmail API quota exceeded
            if (error.response?.includes('quota') || error.response?.includes('rate limit')) {
                return res.status(500).json({
                    success: false,
                    message: 'Email service temporarily busy. Please try again in a few minutes.'
                });
            }
            
            return res.status(500).json({
                success: false,
                message: 'An error occurred while processing your request. Please try again or contact us directly.'
            });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({
            success: false,
            message: `Method ${req.method} not allowed`
        });
    }
}
