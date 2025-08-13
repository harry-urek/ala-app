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
            
            // Get OAuth2 authentication configuration
            const auth = await oauth2Helper.getNodemailerAuth();

            // Create nodemailer Transport with OAuth2 for Gmail
            const Transport = nodemailer.createTransport({
                service: 'gmail',
                auth: auth,
                pool: true,
                maxConnections: 5,
                maxMessages: 100,
            });

            // Luxury firm email template with ALA branding
            const firmEmailTemplate = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Newsreader', Georgia, serif;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: #333;
                            line-height: 1.8;
                        }
                        .email-container {
                            max-width: 650px;
                            margin: 40px auto;
                            background: #ffffff;
                            border-radius: 16px;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                            overflow: hidden;
                        }
                        .header {
                            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                            padding: 50px 40px;
                            text-align: center;
                            color: white;
                            position: relative;
                        }
                        .logo {
                            background: white;
                            color: #1e3c72;
                            width: 80px;
                            height: 80px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 auto 25px;
                            font-family: 'DM Serif Text', serif;
                            font-size: 32px;
                            font-weight: bold;
                            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                        }
                        .firm-name {
                            font-family: 'DM Serif Text', serif;
                            font-size: 28px;
                            font-weight: 400;
                            margin: 0 0 8px 0;
                            letter-spacing: 1px;
                        }
                        .header-subtitle {
                            font-family: 'EB Garamond', serif;
                            font-size: 18px;
                            opacity: 0.9;
                            margin: 0;
                            font-style: italic;
                        }
                        .content {
                            padding: 45px 40px;
                            background: #fafbfc;
                        }
                        .inquiry-title {
                            font-family: 'DM Serif Text', serif;
                            font-size: 26px;
                            color: #1e3c72;
                            margin: 0 0 35px 0;
                            text-align: center;
                            border-bottom: 2px solid #e8edf3;
                            padding-bottom: 20px;
                        }
                        .field-row {
                            margin: 25px 0;
                            padding: 20px;
                            background: white;
                            border-radius: 12px;
                            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
                            border-left: 4px solid #667eea;
                        }
                        .field-label {
                            font-family: 'EB Garamond', serif;
                            font-size: 16px;
                            color: #666;
                            text-transform: uppercase;
                            letter-spacing: 1px;
                            margin-bottom: 8px;
                            font-weight: 600;
                        }
                        .field-value {
                            font-family: 'Newsreader', serif;
                            font-size: 18px;
                            color: #333;
                            font-weight: 500;
                        }
                        .message-box {
                            background: white;
                            padding: 30px;
                            border-radius: 12px;
                            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                            border-left: 6px solid #2a5298;
                            margin: 30px 0;
                        }
                        .message-label {
                            font-family: 'DM Serif Text', serif;
                            font-size: 20px;
                            color: #1e3c72;
                            margin-bottom: 15px;
                        }
                        .message-content {
                            font-family: 'Newsreader', serif;
                            font-size: 16px;
                            line-height: 1.8;
                            color: #444;
                        }
                        .footer {
                            text-align: center;
                            padding: 25px;
                            background: #f8f9fa;
                            color: #666;
                            font-family: 'EB Garamond', serif;
                            font-size: 14px;
                            border-top: 1px solid #e8edf3;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <div class="logo">ALA</div>
                            <h1 class="firm-name">Alka Law Associates</h1>
                            <p class="header-subtitle">Excellence in Legal Services</p>
                        </div>
                        <div class="content">
                            <h2 class="inquiry-title">New Client Inquiry Received</h2>
                            
                            <div class="field-row">
                                <div class="field-label">Client Name</div>
                                <div class="field-value">${fullName}</div>
                            </div>
                            
                            <div class="field-row">
                                <div class="field-label">Email Address</div>
                                <div class="field-value">${email}</div>
                            </div>
                            
                            <div class="field-row">
                                <div class="field-label">Company</div>
                                <div class="field-value">${company || 'Not provided'}</div>
                            </div>
                            
                            <div class="field-row">
                                <div class="field-label">Inquiry Date</div>
                                <div class="field-value">${new Date().toLocaleString()}</div>
                            </div>
                            
                            <div class="message-box">
                                <div class="message-label">Client Message</div>
                                <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                        </div>
                        <div class="footer">
                            This inquiry was submitted through the Alka Law Associates website contact form.
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Luxury client confirmation email template
            const clientEmailTemplate = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..800;1,400..800&display=swap" rel="stylesheet">
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Newsreader', Georgia, serif;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: #333;
                            line-height: 1.8;
                        }
                        .email-container {
                            max-width: 650px;
                            margin: 40px auto;
                            background: #ffffff;
                            border-radius: 16px;
                            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
                            overflow: hidden;
                        }
                        .header {
                            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                            padding: 50px 40px;
                            text-align: center;
                            color: white;
                            position: relative;
                        }
                        .logo {
                            background: white;
                            color: #1e3c72;
                            width: 80px;
                            height: 80px;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin: 0 auto 25px;
                            font-family: 'DM Serif Text', serif;
                            font-size: 32px;
                            font-weight: bold;
                            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                        }
                        .firm-name {
                            font-family: 'DM Serif Text', serif;
                            font-size: 28px;
                            font-weight: 400;
                            margin: 0 0 8px 0;
                            letter-spacing: 1px;
                        }
                        .header-subtitle {
                            font-family: 'EB Garamond', serif;
                            font-size: 18px;
                            opacity: 0.9;
                            margin: 0;
                            font-style: italic;
                        }
                        .content {
                            padding: 45px 40px;
                            background: #fafbfc;
                        }
                        .thank-you-title {
                            font-family: 'DM Serif Text', serif;
                            font-size: 32px;
                            color: #1e3c72;
                            margin: 0 0 20px 0;
                            text-align: center;
                        }
                        .greeting {
                            font-family: 'Newsreader', serif;
                            font-size: 20px;
                            color: #333;
                            margin-bottom: 30px;
                            text-align: center;
                        }
                        .message-content {
                            font-family: 'EB Garamond', serif;
                            font-size: 18px;
                            line-height: 1.8;
                            color: #444;
                            text-align: center;
                            margin: 30px 0;
                            padding: 0 20px;
                        }
                        .highlight-box {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 35px 30px;
                            border-radius: 15px;
                            text-align: center;
                            margin: 40px 0;
                            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
                        }
                        .highlight-text {
                            font-family: 'DM Serif Text', serif;
                            font-size: 22px;
                            margin: 0 0 10px 0;
                            font-weight: 400;
                        }
                        .highlight-subtitle {
                            font-family: 'EB Garamond', serif;
                            font-size: 16px;
                            opacity: 0.95;
                            margin: 0;
                            font-style: italic;
                        }
                        .contact-info {
                            background: white;
                            padding: 30px;
                            border-radius: 12px;
                            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
                            border-left: 6px solid #667eea;
                            margin: 35px 0;
                            text-align: center;
                        }
                        .contact-title {
                            font-family: 'DM Serif Text', serif;
                            font-size: 20px;
                            color: #1e3c72;
                            margin-bottom: 15px;
                        }
                        .contact-details {
                            font-family: 'Newsreader', serif;
                            font-size: 16px;
                            color: #555;
                            line-height: 1.6;
                        }
                        .signature {
                            text-align: center;
                            margin: 35px 0 0 0;
                            padding: 25px 0;
                            border-top: 1px solid #e8edf3;
                        }
                        .signature-line {
                            font-family: 'EB Garamond', serif;
                            font-size: 18px;
                            color: #666;
                            margin: 5px 0;
                        }
                        .signature-name {
                            font-family: 'DM Serif Text', serif;
                            font-size: 20px;
                            color: #1e3c72;
                            font-weight: 400;
                        }
                        .footer {
                            text-align: center;
                            padding: 25px;
                            background: #f8f9fa;
                            color: #666;
                            font-family: 'EB Garamond', serif;
                            font-size: 14px;
                            border-top: 1px solid #e8edf3;
                        }
                    </style>
                </head>
                <body>
                    <div class="email-container">
                        <div class="header">
                            <div class="logo">ALA</div>
                            <h1 class="firm-name">Alka Law Associates</h1>
                            <p class="header-subtitle">Excellence in Legal Services</p>
                        </div>
                        <div class="content">
                            <h1 class="thank-you-title">Thank You!</h1>
                            <p class="greeting">Dear ${fullName},</p>
                            
                            <p class="message-content">
                                We sincerely appreciate you reaching out to Alka Law Associates. Your inquiry is important to us, and we want to assure you that it has been received and will be given our full attention.
                            </p>
                            
                            <div class="highlight-box">
                                <div class="highlight-text">We'll be in touch soon</div>
                                <div class="highlight-subtitle">Our team will respond within 24 hours</div>
                            </div>
                            
                            <div class="contact-info">
                                <div class="contact-title">Need Immediate Assistance?</div>
                                <div class="contact-details">
                                    Feel free to contact us directly<br>
                                    Email: alkalawassociates@outlook.com
                                </div>
                            </div>
                            
                            <div class="signature">
                                <div class="signature-line">With warm regards,</div>
                                <div class="signature-name">The Alka Law Associates Team</div>
                            </div>
                        </div>
                        <div class="footer">
                            This is an automated confirmation. Please do not reply to this email directly.
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Send both emails in parallel for better performance
            const emailPromises = [
                Transport.sendMail({
                    from: process.env.GMAIL_USER,
                    to: process.env.FIRM_EMAIL || 'alkalawassociates@outlook.com',
                    subject: `New Contact Form Submission from ${fullName}`,
                    html: firmEmailTemplate
                }),
                Transport.sendMail({
                    from: process.env.GMAIL_USER,
                    to: email,
                    subject: 'Thank you for contacting Alka Law Associates - We will reach out soon',
                    html: clientEmailTemplate
                })
            ];

            // Wait for both emails to be sent
            await Promise.all(emailPromises);

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
