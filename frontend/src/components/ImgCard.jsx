import React from "react";
export const ImgCard=(props)=>{
    const {i}=props;
    const {index}=props;
    const {openZoomBox}=props;
    return(
        <div className="img">
            <img src={i.img_url} alt="img not found" className="photo" onClick={()=>openZoomBox(index)}></img>
        </div>
    );
};
