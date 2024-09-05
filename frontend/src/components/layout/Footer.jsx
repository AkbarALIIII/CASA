// src/components/Footer.jsx
import React, { useState } from 'react';
import './CSS/Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const [email, setEmail] = useState("");
    const navigation = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigation('/contact', { state: { email } });
    }
    return (
        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <footer className='footer'>
                <div className="left">
                    <h1>CASA DESIGN STUDIO</h1>
                    <p>B/110, Orchid Complex,Pirojpura rd, Chhapi,<br></br> Palanpur 385210</p>
                    <div className='timings'>
                        <h4>Hours</h4>
                        <p>10 : 00 am to 08 : 00 pm</p>
                        <h4>Days</h4>
                        <p>Mon-Sat: 10am-8pm</p>
                    </div>

                    <p className='copy'>&copy; 2024, All rights reserved</p>
                </div>
                <div className="right">
                    <div className="social-media">
                        <h2>Follow Us</h2>
                        <div className='social-media-logo'>
                        <a href="https://wa.me/9029740206?text=Hello%20there!%20I%20would%20like%20to%20chat%20with%20you." target='_blank'>
                            <i className="bi bi-whatsapp"></i>
                        </a>
                            <a href='https://www.instagram.com/casa__design__studio/?igsh=Ymd4OXR3ZTVpbTMz' target='_blank'>
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href='mailto:akbarali819911@gmail.com'><i className="bi bi-envelope"></i></a>
                        </div>
                    </div>
                    <div className="mail-info">
                        <p>Join our mailing list to receive exclusive updates on our design and construction services   </p>
                        <form className='mail-form' onSubmit={handleSubmit}>
                            <input type="email" placeholder='Enter your email address here' value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='input' required />
                            <input type="submit" value="Stay Connected" className='btn' />
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
