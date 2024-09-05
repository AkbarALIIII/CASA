import React, { useState ,useEffect} from "react";
import SD from "../api/slider.json";
import "./CSS/SliderCard.css"
export const SliderCard=()=>{
    const [currentslide,setCurrenSlide]=useState(0);
    const statechange=(d)=>{
        let newSlide=currentslide+d;
        if(newSlide >= SD.length) newSlide=0;
        if(newSlide < 0) newSlide=SD.length-1;
        setCurrenSlide(newSlide);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            statechange(1); // Move to the next slide
        }, 5000);

        return () =>{
            clearInterval(interval);
        }
    }, [currentslide]);

    useEffect(() => {
        const imgElement = document.querySelector(".slide-img");

        // Reset animation
        imgElement.classList.remove("fade-in");

        // Force reflow to restart the animation
        void imgElement.offsetWidth;

        // Re-add the fade-in class
        imgElement.classList.add("fade-in");

    }, [currentslide]);
    
    return(
    <div className="main-slider animate-target">
            <div className="sub-slider">
                <span className="main-prev" onClick={()=>statechange(1)}>&#10094;</span>
                <div className="slide fade-in">
                    <img src={SD[currentslide].img_url} alt="not found" className="slide-img fade-in" />
                </div>
                <span className="main-next" onClick={()=>statechange(-1)}>&#10095;</span>
            </div>
    </div>
    );
};