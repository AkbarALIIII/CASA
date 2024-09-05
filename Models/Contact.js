// models/Contact.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_no: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;
