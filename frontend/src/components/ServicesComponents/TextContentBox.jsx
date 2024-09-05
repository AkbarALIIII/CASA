import React from "react"
export const TextContentBox = ({title,description}) => {
    {console.log(title , description)}
    return (
        <div className="text-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}