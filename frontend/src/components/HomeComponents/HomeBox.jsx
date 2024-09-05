import React from "react";
import "./CSS/HomeBox.css";
import { Link } from "react-router-dom";
export const HomeBox=()=>{
    return(
        <div className="box">
        <div className="box-content">
            <div className="box-text">
                <h1> Casa Design Studio<br></br>Where Your Dream Spaces Begin</h1>
                <p> Elevate your spaces with our exceptional interior design, architecture,<br></br>and construction services, available throughout India.<br></br><br></br>Connect with us today to start transforming your vision into reality!    </p>
                <Link to="/contact"><button>Contact</button></Link>
            </div>
            <div className="box-card">
                <img src="/images/Home/background.png" alt=""/>
            </div>
        </div>
    </div>
    );
}