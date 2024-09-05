import React from 'react';
import './CSS/HomeContent.css';
import { Link } from 'react-router-dom';
export const HomeContent=()=>{
    return(
    <div className="content">
        <h1>Luxury Interior Design<br></br>Services</h1>
        <p> Elevate your surroundings with our expert interior design and architectural services, delivering sophisticated and bespoke solutions across India. Transform your space into a luxurious haven that reflects your unique style and vision.
        </p>
        <Link to="/services"><button className='l-btn'>Explore</button></Link>
        <div className="home-card">
            <div className="card-1">
                <h5>Contemporary Design Excellence</h5>
                <p> Combining modern style with everyday usefulness.</p>
            </div>
            <div className="card-1">
                <h5>Sophisticated Interiors</h5>
                <p>Enhancing your home with a touch of class and refinement.</p>
            </div>
            <div className="card-1">
                <h5>Refined Space Planning</h5>
                <p>Making the most of every inch with smart design solutions.</p>
            </div>
        </div>
    </div>
    );
};