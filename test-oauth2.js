/**
 * OAuth2 Test Script
 * Run this script to test your OAuth2 setup before using the contact form
 * Usage: node test-oauth2.js
 */

require('dotenv').config({ path: '.env.local' });
const OAuth2Helper = require('./src/utils/oauth2Helper');
const nodemailer = require('nodemailer');

async function testOAuth2Setup() {
    console.log('🧪 Testing OAuth2 Setup...\n');

    try {
        // Initialize OAuth2 helper
        const oauth2Helper = new OAuth2Helper();

        // Test 1: Verify environment variables
        console.log('1️⃣ Checking environment variables...');
        const requiredVars = ['GMAIL_USER', 'GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'REFRESH_TOKEN'];
        let allVarsPresent = true;

        for (const varName of requiredVars) {
            if (process.env[varName]) {
                console.log(`   ✅ ${varName}: Set`);
            } else {
                console.log(`   ❌ ${varName}: Missing`);
                allVarsPresent = false;
            }
        }

        if (!allVarsPresent) {
            throw new Error('Missing required environment variables');
        }

        // Test 2: Verify OAuth2 setup
        console.log('\n2️⃣ Verifying OAuth2 credentials...');
        const isValid = await oauth2Helper.verifySetup();
        if (isValid) {
            console.log('   ✅ OAuth2 credentials are valid');
        } else {
            throw new Error('OAuth2 credentials verification failed');
        }

        // Test 3: Get access token
        console.log('\n3️⃣ Getting access token...');
        const accessToken = await oauth2Helper.getValidAccessToken();
        console.log(`   ✅ Access token obtained: ${accessToken.substring(0, 20)}...`);

        // Test 4: Create Transport
        console.log('\n4️⃣ Creating nodemailer Transport...');
        const auth = await oauth2Helper.getNodemailerAuth();
        const Transport = nodemailer.createTransport({
            service: 'gmail',
            auth: auth
        });

        // Test 5: Verify Transport
        console.log('\n5️⃣ Verifying Transport connection...');
        await Transport.verify();
        console.log('   ✅ Transport verified successfully');

        // Test 6: Send test email (optional - uncomment to test actual sending)
        /*
        console.log('\n6️⃣ Sending test email...');
        const testMailOptions = {
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // Send to yourself for testing
            subject: 'OAuth2 Test Email - Alka Law Associates',
            html: `
                <h2>🎉 OAuth2 Test Successful!</h2>
                <p>This email confirms that your OAuth2 setup is working correctly.</p>
                <p><strong>Test completed at:</strong> ${new Date().toLocaleString()}</p>
                <p>Your contact form is ready to use!</p>
            `
        };

        const info = await Transport.sendMail(testMailOptions);
        console.log(`   ✅ Test email sent successfully: ${info.messageId}`);
        */

        console.log('\n🎉 All tests passed! Your OAuth2 setup is ready.');
        console.log('\n📧 You can now use the contact form to send emails.');
        console.log('\n💡 Tip: Uncomment the test email section in this script if you want to test actual email sending.');

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        console.error('\n🔍 Troubleshooting tips:');
        console.error('   1. Check your .env.local file has all required variables');
        console.error('   2. Verify OAuth2 credentials in Google Cloud Console');
        console.error('   3. Refresh your access token in OAuth2 Playground');
        console.error('   4. Make sure Gmail API is enabled');
        console.error('   5. Check that you\'re added as a test user');
        
        process.exit(1);
    }
}

// Run the test
testOAuth2Setup();
