import React from "react";
import "./CSS/HomeBoxServices.css";
export const HomeBoxServices=()=>{
    return(
        <div className="box-services">
        <div className="sevices-text">
            <h1>Interior Designing Services</h1>
            <p>We blend innovative design, expert architecture, and precise construction to bring your vision to life,<br></br> ensuring every project is delivered with excellence and integrity.</p>
        </div>
        <div className="services-cards">
            <div className="card">
                <div className="card-image">
                    <img src="/images/1.jpg" alt=""/>
                </div>
                {/* <h2>Drawings solutions</h2> */}
                <p>Expert architecture services for residential and commercial projects all over India.</p>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="/images/3.jpg" alt=""/>
                </div>
                {/* <h2>Execution services</h2> */}
                <p>High-quality construction services for homes and offices all over India.</p>
            </div>
            <div className="card">
                <div className="card-image">
                    <img src="/images/22.jpg" alt=""/>
                </div>
                {/* <h2>On site problem solving</h2> */}
                <p>Providing expert solutions for any on-site challenges, ensuring smooth progress and timely resolution for your projects</p>
            </div>
        </div>
    </div>
    );
}