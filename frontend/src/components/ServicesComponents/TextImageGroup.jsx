import React from "react";
import { TextContentBox } from "./TextContentBox";
export const TextImageGroup=({content,Even,img_url})=>{
    return(
        <div className={`service-box ${Even?"even":"odd"}`}>
        <div className="text-group">
            {content.map((val,index)=>{
                return <TextContentBox key={index} title={val.title} description={val.description}></TextContentBox>;
            })}
        </div>
        <div className="text-content-img">
            <img src={img_url} alt="error" />
        </div>
        </div>
    );
}