const { google } = require('googleapis');

/**
 * OAuth2 Helper for managing Gmail authentication tokens
 * This utility helps with automatic token refresh and management
 */
class OAuth2Helper {
    constructor() {
        this.oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            'https://developers.google.com/oauthplayground' // redirect URI
        );

        // Set credentials if refresh token is available
        if (process.env.REFRESH_TOKEN) {
            this.oauth2Client.setCredentials({
                refresh_token: process.env.REFRESH_TOKEN,
                access_token: process.env.ACCESS_TOKEN,
            });
        }
    }

    /**
     * Get a valid access token, refreshing if necessary
     * @returns {Promise<string>} Valid access token
     */
    async getValidAccessToken() {
        try {
            // Get access token (will refresh automatically if expired)
            const { token } = await this.oauth2Client.getAccessToken();
            return token;
        } catch (error) {
            console.error('Error getting access token:', error);
            throw new Error('Failed to obtain valid access token');
        }
    }

    /**
     * Get OAuth2 credentials for nodemailer
     * @returns {Promise<Object>} OAuth2 configuration object
     */
    async getNodemailerAuth() {
        try {
            const accessToken = await this.getValidAccessToken();
            
            return {
                type: 'OAuth2',
                user: process.env.GMAIL_USER,
                clientId: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken,
            };
        } catch (error) {
            console.error('Error getting nodemailer auth:', error);
            throw error;
        }
    }

    /**
     * Verify OAuth2 setup and credentials
     * @returns {Promise<boolean>} True if setup is valid
     */
    async verifySetup() {
        try {
            const requiredEnvVars = [
                'GMAIL_USER',
                'GOOGLE_CLIENT_ID',
                'GOOGLE_CLIENT_SECRET',
                'REFRESH_TOKEN'
            ];

            // Check if all required environment variables are set
            for (const envVar of requiredEnvVars) {
                if (!process.env[envVar]) {
                    console.error(`Missing environment variable: ${envVar}`);
                    return false;
                }
            }

            // Try to get a valid access token
            await this.getValidAccessToken();
            console.log('OAuth2 setup verification successful');
            return true;

        } catch (error) {
            console.error('OAuth2 setup verification failed:', error);
            return false;
        }
    }
}

module.exports = OAuth2Helper;
