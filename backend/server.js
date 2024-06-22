require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');
const app = express();
const cron = require('node-cron');
const axios = require('axios');


const twilio = require('twilio');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000', // Adjust the your frontend URL for CORS Policy
  credentials: true 
}));
app.use(cookieParser()); // for jwt

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

const Review = require('./models/review1');

// Review posting endpoint
app.post('/reviews1', async (req, res) => {
  console.log(req);
  const { ngo, dov, review } = req.body;

  try {
    const newReview = new Review({
      ngo, dov, review 
    });

    const savedReview = await newReview.save();

    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).json({ message: 'Failed to post review' });
  }
});




app.post('/reviews2', async (req, res) => {
  const { ngo, dov, review } = req.body;

  try {
    const newReview = new Review({
      ngo, dov, review 
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).json({ message: 'Failed to post review' });
  }
});


/*

const API_ENDPOINT = 'https://localhost:5000/send-email'; 
  // Cron job to run every day at midnight (0 0 * * *)
  cron.schedule('0 0 * * *', async () => {
    try {
      // Calculate date 7 days ago
      const dateThreshold = new Date();
      dateThreshold.setDate(dateThreshold.getDate() - 7);

      // Find documents where the date field is within the last 7 days
      const query = { dateField: { $gte: dateThreshold } };
      const results = await collection.find(query).toArray();

      // Iterate over results and call mailing API
      results.forEach(async (doc) => {
        try {
          const response = await axios.post(API_ENDPOINT, {
            // Payload to your mailing API (e.g., email content)
            to: doc.email,
            subject: 'Reminder',
            body: `Hello ${doc.name}, this is a reminder.`,
          });
          console.log('Mail API response:', response.data);
        } catch (error) {
          console.error('Error sending mail:', error);
        }
      });
    } catch (error) {
      console.error('Error querying MongoDB:', error);
    }
  }, {
    scheduled: false // Start cron job manually below
  });

*/


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
