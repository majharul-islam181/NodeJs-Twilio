# Phone OTP Authentication using Twilio Verify

## Setup

1. Create Twilio account and get credentials.
2. Configure Verify Service and Geo-Permissions.
3. Clone backend and add `.env` file with credentials.
4. Run `npm install` and `node server.js`.
5. Update Flutter API base URL.
6. Use app to send and verify OTP.

## Trial Account Notes

- Only verified phone numbers can receive OTP SMS.
- Upgrade to paid account for unrestricted use.

## API Endpoints

- POST `/api/send-otp` - sends OTP to phone number
- POST `/api/verify-otp` - verifies OTP code

## Support

Contact [your support email or link] for help.



## .env [use your own tokens]
```
TWILIO_ACCOUNT_SID=AC5aaedbf807eb58af304b4a7ee017710e
TWILIO_AUTH_TOKEN=429d3bec233157f4f258d38c0f3c7927
TWILIO_VERIFY_SERVICE_SID=VAc85549ebe8e6ec70738b2e4447eff49f
PORT=5002
```
