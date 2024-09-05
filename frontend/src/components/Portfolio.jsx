import { useEffect, useState } from "react";
import data from "../api/Image.json";
import {ImgCard} from "./ImgCard";
import "./CSS/Portfolio.css"

export const Portfolio=()=>{
    const [zoombox,setZoomBox]=useState(false);
    const [img,setImgIndex]=useState(0);

    const openZoomBox=(index)=>{
        setZoomBox(true);
        setImgIndex(index)
    }
    const closeZoomBox=()=>{
        setZoomBox(false);
    }

    const setCurrentImgIndex=(direction)=>{
        let newIndex=img+direction;
        if (newIndex >= data.length) newIndex=0;
        if (newIndex < 0) newIndex=data.length-1;
        setImgIndex(newIndex);
    }
    useEffect(()=>{
        if(zoombox){
            document.body.style.overflow='hidden';
        }
        else{
            document.body.style.overflow='auto';
        }
        return ()=>{document.body.style.overflow='auto';};
    },[zoombox]);

    const [show_hide,setShowHide]=useState(false);
    const showbtn=(val)=>{
        setShowHide(val);
    }
    useEffect(()=>{
        if(show_hide){
            document.getElementById('showmoreless').classList.add('expanded');
        }
        else{
            document.getElementById('showmoreless').classList.remove('expanded');
        }
    },[show_hide]);
    return(<>
        <div className="portfolio">
            <h1>Our Portfolio</h1>
            <p> Explore our curated gallery showcasing a diverse range of projects, from modern interiors to innovative architectural designs.Each image captures the essence of our commitment to creativity, quality, and detail</p>
            <div className="images" id="showmoreless">
                {data.map((i,index)=>{  
                    return <ImgCard key={index} i={i} index={index} openZoomBox={openZoomBox}/>;
                })}
            </div> 
            {show_hide ?(<button className="show-hide" onClick={()=>showbtn(false)}>Show Less</button>):
            (<button className="show-hide" onClick={()=>showbtn(true)}>Show More</button>)
            }  
        </div>
        {zoombox && (
        <div className="zoombox">
          <span className="close" onClick={closeZoomBox}>&times;</span>
          <img src={data[img].img_url} alt="img not found" className="zoombox-content" />
          <span className="prev" onClick={() => setCurrentImgIndex(-1)}>&#10094;</span>
          <span className="next" onClick={() => setCurrentImgIndex(1)}>&#10095;</span>
        </div>
        )}
        </>
        );
}