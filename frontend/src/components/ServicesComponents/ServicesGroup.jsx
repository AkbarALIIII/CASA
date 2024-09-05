import React from "react";
import { TextImageGroup } from "./TextImageGroup";
export const ServicesGroup=({data,className})=>{
    return(
        <div className={`Services ${className}`}>
            {data.map((content,index)=>{
                return(<TextImageGroup key={index} content={content.contents} img_url={content.img_url} Even={index%2===0}></TextImageGroup>);
            })}
            
        </div>
    );
}