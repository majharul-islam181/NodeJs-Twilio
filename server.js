const express = require('express');
const dotenv = require('dotenv');
const otpRoutes = require('./routes/otpRoute');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/api', otpRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
