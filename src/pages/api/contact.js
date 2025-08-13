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

            // Here you can integrate with your email service
            // For example: SendGrid, Nodemailer, etc.
            // This is a basic implementation that just logs the data
            
            console.log('Contact form submission:', {
                fullName,
                email,
                company: company || 'Not provided',
                message,
                timestamp: new Date().toISOString()
            });

            // TODO: Implement email sending logic here
            // Example with Nodemailer:
            /*
            const nodemailer = require('nodemailer');
            const transporter = nodemailer.createTransporter({
                // Your email configuration
            });
            
            await transporter.sendMail({
                from: process.env.SMTP_FROM,
                to: 'alkalawassociates@outlook.com',
                subject: `New Contact Form Submission from ${fullName}`,
                html: `
                    <h3>New Contact Form Submission</h3>
                    <p><strong>Name:</strong> ${fullName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `
            });
            */

            return res.status(200).json({
                success: true,
                message: 'Thank you for your message. We will get back to you within 24 hours.'
            });

        } catch (error) {
            console.error('Contact form error:', error);
            return res.status(500).json({
                success: false,
                message: 'An error occurred while processing your request. Please try again.'
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
