# W. Giertsen Energy Solutions Website

This is the website for W. Giertsen Energy Solutions, a company providing solar energy solutions in Kenya.

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` (if it doesn't exist already)
4. Configure environment variables (see below)
5. Run the development server: `npm run dev`

## Environment Variables

The application uses several environment variables for various features. Make sure to set these up before running the application.

### Email Sending with Resend

The application uses [Resend](https://resend.com) to send emails. To configure email sending:

1. Create an account on [Resend](https://resend.com)
2. Go to the API Keys section in your dashboard and create a new API key
3. Add your API key to the `.env` file:
   ```
   RESEND_API_KEY=re_your_api_key_here
   ```

**Important**: The default API key in the `.env` file is a placeholder and will not work. You must replace it with your own API key.

### Testing Limitations

When using Resend's free tier for testing, you can only send emails to your own verified email address. 

Currently, the application is configured to send all emails to `chengowensy@gmail.com` for testing.

To test the application with your own email:
1. Update the `.env` file with your Resend API key
2. Open `src/app/api/send-email/route.ts` and change both occurrences of `chengowensy@gmail.com` to your own email address

### Domain Setup for Production

For production use, you must:

1. Register your domain with Resend
2. Follow their verification process
3. Update the `from` email addresses in `src/app/api/send-email/route.ts`
4. Remove the recipient email restriction in the same file (allowing emails to be sent to any address)

### Other Environment Variables

- `NEXT_PUBLIC_GOOGLE_API_KEY`: Required for Google Maps and other Google services
- `ADMIN_EMAIL`: Email address for admin notifications
- `GOOGLE_CALENDAR_ENABLED`: Set to 'true' to enable Google Calendar integration
- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REDIRECT_URI`, `GOOGLE_REFRESH_TOKEN`: Required for Google Calendar integration

## Troubleshooting

### "API key is invalid" Error

If you see this error when submitting the contact form, it means the Resend API key is not configured correctly. Make sure to:

1. Check that you've added a valid API key to the `.env` file
2. Restart the development server after updating the `.env` file
3. Check that the API key is in the correct format (should start with `re_`)

### "You can only send testing emails to your own email address" Error

This error occurs when using Resend's free tier without a verified domain. To fix:

1. Make sure the email set in the API route matches your Resend account email
2. Or verify a domain with Resend for unlimited sending

### Other Email Issues

- Check that you're using a valid "from" email address
- For production, make sure your domain is verified with Resend
- For testing, use `onboarding@resend.dev` as the "from" address

## License

All rights reserved, W. Giertsen Energy Solutions. 