# Email Setup Instructions - OAuth2 Method

## Gmail OAuth2 Configuration for Contact Form

This application uses Gmail through Nodemailer with OAuth2 authentication for secure email sending. Follow these detailed steps to set it up:

## Step 1: Create Google Cloud Project and Enable Gmail API

### 1.1 Google Cloud Console Setup
1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Library"
4. Search for "Gmail API" and enable it for your project

### 1.2 Create OAuth2 Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. If prompted, configure the "OAuth consent screen" first:
   - Choose "External" user type
   - Fill in the required details (App name, User support email, etc.)
   - Add your Gmail address as a test user
4. For application type, select "Web application"
5. Add a name for your OAuth 2.0 client
6. Under "Authorized redirect URIs", add: `https://developers.google.com/oauthplayground`
7. Click "Create" and copy your Client ID and Client Secret

## Step 2: Generate Refresh Token using OAuth2 Playground

### 2.1 Important Notes Before Starting
- Add yourself as a test user in the OAuth consent screen
- Use the redirect URL: `https://developers.google.com/oauthplayground`

### 2.2 OAuth2 Playground Setup
1. Go to [Google OAuth2 Playground](https://developers.google.com/oauthplayground)
2. Click the gear icon (⚙️) in the upper right corner
3. Check "Use your own OAuth credentials"
4. Enter your OAuth Client ID and Client Secret from Step 1

### 2.3 Authorize APIs
1. In the "Select the Scope" section, enter: `https://mail.google.com/`
2. Click "Authorize APIs"
3. Sign in with your Gmail account and grant permissions

### 2.4 Exchange Authorization Code for Tokens
1. Click "Exchange authorization code for tokens"
2. You'll receive both an Access Token and a Refresh Token
3. Copy both tokens (you'll need them for the environment variables)

## Step 3: Configure Environment Variables

Update the `.env.local` file with your actual values:

```env
# Replace with your actual Gmail address
GMAIL_USER=your-actual-gmail@gmail.com

# Google OAuth2 Credentials (from Google Cloud Console)
GOOGLE_CLIENT_ID=123456789-abcdefgh.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-client-secret-here
GOOGLE_REFRESH_TOKEN=1//04-your-refresh-token-here
GOOGLE_ACCESS_TOKEN=ya29.your-access-token-here

# Firm email where contact submissions will be sent
FIRM_EMAIL=alkalawassociates@outlook.com
```

## Step 4: Email Flow

When a client submits the contact form:

1. **Firm Email**: ALA Law Associates receives an email with:
   - Client's full name
   - Client's email
   - Client's company (if provided)
   - Client's message
   - Submission timestamp
   - Professional HTML formatting

2. **Client Confirmation**: The client receives a confirmation email with:
   - Thank you message
   - Confirmation that the firm will reach out soon
   - Summary of their submission
   - Professional branding

## Step 5: Testing the Setup

1. Ensure all environment variables are correctly set in `.env.local`
2. Start the development server: `npm run dev`
3. Submit a test contact form on your website
4. Check both the firm email and client email for successful delivery

## Step 6: Security Best Practices

- Keep your `.env.local` file secure and never commit it to version control
- The refresh token is long-lived but may need to be regenerated occasionally
- Access tokens expire frequently but are automatically refreshed by nodemailer
- Monitor your Google Cloud Console for any suspicious activity

## Step 7: Troubleshooting

### Common Issues and Solutions

1. **"Invalid login" or "Authentication failed"**
   - Verify all OAuth2 credentials are correct
   - Check if access token has expired (refresh it in OAuth2 Playground)
   - Ensure Gmail API is enabled in Google Cloud Console

2. **"Access blocked: This app's request is invalid"**
   - Make sure you're added as a test user in the OAuth consent screen
   - Verify the redirect URI matches exactly: `https://developers.google.com/oauthplayground`

3. **Emails not being sent**
   - Check the console logs for detailed error messages
   - Verify all environment variables are properly set
   - Test OAuth2 credentials in the playground

4. **Refresh Token Issues**
   - If refresh token stops working, generate a new one using OAuth2 Playground
   - Make sure the scope `https://mail.google.com/` is included

### Debug Steps
1. Check console logs for specific error messages
2. Verify environment variables are loaded correctly
3. Test OAuth2 credentials separately in the playground
4. Ensure Gmail API quotas are not exceeded

## Step 8: Production Deployment

When deploying to production:
1. Set all environment variables in your hosting platform
2. Consider implementing rate limiting for the contact form
3. Monitor email sending quotas and API usage
4. Keep your OAuth2 credentials secure and rotate them periodically

This OAuth2 setup provides enhanced security compared to app passwords and is the recommended approach for production applications.
