const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const verifySid = process.env.TWILIO_VERIFY_SERVICE_SID;

exports.sendOtp = async (req, res) => {
  const { phoneNumber } = req.body;
  console.log(req.body);
  try {
    const verification = await client.verify.v2.services(verifySid)
      .verifications.create({ to: phoneNumber, channel: 'sms' });

    res.status(200).json({ status: verification.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.verifyOtp = async (req, res) => {
  const { phoneNumber, code } = req.body;
  try {
    const verificationCheck = await client.verify.v2.services(verifySid)
      .verificationChecks.create({ to: phoneNumber, code });

    res.status(200).json({ status: verificationCheck.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
