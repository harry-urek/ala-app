/**
 * Fast Email Templates for Alka Law Associates
 * Simplified templates for faster email sending when performance is critical
 */

const createFastFirmEmail = (fullName, email, company, message) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 20px; }
        .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin: 15px 0; font-size: 16px; }
        .label { font-weight: bold; color: #1a1a2e; }
        .message { background: white; padding: 15px; border-left: 3px solid #d4af37; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact Inquiry</h2>
        <p>Alka Law Associates</p>
    </div>
    <div class="content">
        <div class="field"><span class="label">Name:</span> ${fullName}</div>
        <div class="field"><span class="label">Email:</span> ${email}</div>
        <div class="field"><span class="label">Company:</span> ${company || 'Not provided'}</div>
        <div class="field"><span class="label">Date:</span> ${new Date().toLocaleString()}</div>
        <div class="message">
            <div class="label">Message:</div>
            <div>${message.replace(/\n/g, '<br>')}</div>
        </div>
    </div>
</body>
</html>`;

const createFastClientEmail = (fullName, email, company) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 20px; }
        .header { background: #1a1a2e; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .highlight { background: #d4af37; color: white; padding: 15px; text-align: center; margin: 20px 0; }
        .summary { background: white; padding: 15px; margin: 15px 0; }
        .field { margin: 10px 0; font-size: 16px; }
        .label { font-weight: bold; color: #1a1a2e; }
    </style>
</head>
<body>
    <div class="header">
        <h2>Thank You for Your Inquiry</h2>
        <p>Alka Law Associates</p>
    </div>
    <div class="content">
        <p>Dear <strong>${fullName}</strong>,</p>
        <p>Thank you for contacting <strong>Alka Law Associates</strong>. We have received your inquiry and will respond within 24 hours.</p>
        
        <div class="highlight">
            <strong>We will reach out to you soon!</strong>
        </div>
        
        <div class="summary">
            <div class="field"><span class="label">Name:</span> ${fullName}</div>
            <div class="field"><span class="label">Email:</span> ${email}</div>
            <div class="field"><span class="label">Company:</span> ${company || 'Not provided'}</div>
            <div class="field"><span class="label">Date:</span> ${new Date().toLocaleDateString()}</div>
        </div>
        
        <p>Best regards,<br><strong>The Alka Law Associates Team</strong></p>
    </div>
</body>
</html>`;

module.exports = {
    createFastFirmEmail,
    createFastClientEmail
};
