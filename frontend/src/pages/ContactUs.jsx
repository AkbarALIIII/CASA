import React, { useEffect } from 'react';
import './CSS/ContactUs.css';
import { ContactForm } from '../components/ContactForm.jsx';
import Logo from '/images/Final logo.png'; // Update this path to the correct image location

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact-container">
        <div className="logo-container">
          <img src={Logo} alt="CASA Design Studio Logo" className="logo" />
        </div>
        <div className="form-container">
          <ContactForm />
        </div>
      </div>
      <div className='call-main'>
        <div className='call'>
          <h1>Your Dream Design Awaits</h1><h2>Book a Free Consultation!</h2>
          <a href='tel:+919029740206'><button className='call-btn'>Call us Today</button></a>
        </div>
        <div className='map-area'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.1221516354535!2d72.37956427486735!3d24.026757278111653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf374b9022b7b%3A0x533eef290ec31e17!2sCASA%20DESIGN%20STUDIO!5e0!3m2!1sen!2sin!4v1724042903955!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
