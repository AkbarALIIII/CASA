const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer'); // Import nodemailer

const app = express();
const PORT = process.env.PORT || 5000;
const Contact = require('./Models/Contact'); // Import the model

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/CASA_DESIGN_STUDIO';

mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the email service you prefer

  auth: {
    user: 'musamjiakbar225@gmail.com',
    pass: 'imnr kvvq jnto zvqt' // Your email password
  }
});


// Route to save contact data to MongoDB
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone_no, message } = req.body;
  let savedContact;
  try {
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone_no,
      message
    });
    savedContact = await newContact.save();  // Wait for the contact to be saved

    console.log("Contact saved, sending email...");

    const emailContent = `Name: ${savedContact.firstName} ${savedContact.lastName}\nEmail: ${savedContact.email}\nPhone: ${savedContact.phone_no}\nMessage: ${savedContact.message}\n`;

    const mailOptions = {
      from:`$savedContact.email`,
      to: 'musamjiakbar225@gmail.com , casadesignstudio1@gmail.com',
      subject: 'CONTACTS DATA FROM THE CASA DESIGN WEBSITE',
      text: emailContent
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to send email' });
      }
      console.log('Email sent:', info.response);
      res.json({ status: 'success', message: 'Contact saved and email sent successfully!' });
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ status: 'error', message: 'An error occurred' });
  }
});

app.get("/",(req, res)=>{
  app.use(express.static(path.resolve(__dirname,"frontend","dist")));
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
}); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
