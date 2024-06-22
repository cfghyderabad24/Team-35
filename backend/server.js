require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const app = express();
const sendgrid = require('@sendgrid/mail');

const twilio = require('twilio');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3001', // Adjust the your frontend URL for CORS Policy
  credentials: true 
}));
app.use(cookieParser()); // for jwt
const mailgun = require('mailgun-js');
const uri = process.env.MONGO_URI;

//mongo connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
// Twilio credentials and phone number
const accountSid = 'AC98801fedc4eab84aa8841f2250065f3e'; // Replace with your Account SID
const authToken = ''; // Replace with your Auth Token
const twilioPhoneNumber = '+12097484090'; // Replace with your Twilio number

const users = [
  { phone: '7979037628' }, // Add more user objects as needed
];
const client = new twilio(accountSid, authToken);
app.post('/send-sms', async (req, res) => {
  try {
    const sendMessages = users.map(async (user) => {
      const message = 'Your msg';
      return client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: `+91${user.phone}`,
      });
    });

    const results = await Promise.all(sendMessages);

    results.forEach((result, index) => {
      console.log(`SMS sent to ${users[index].phone}: ${result.sid}`);
    });

    res.status(200).send('All messages sent successfully');
  } catch (error) {
    console.error('Failed to send SMS:', error);
    res.status(500).send('Failed to send some messages');
  }
});



const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.OUTLOOK_USER, // Your Outlook email address
    pass: process.env.OUTLOOK_PASS, // Your Outlook email password
  },
});

// Route to send email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: process.env.OUTLOOK_USER, // Sender address
    to: to, // Recipient address
    subject: subject, // Subject line
    text: text, // Plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
