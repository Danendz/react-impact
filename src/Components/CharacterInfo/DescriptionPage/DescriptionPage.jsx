import React from "react";
import cl from "./DescriptionPage.module.css";
const DescriptionPage = ({ title, bgColor, description }) => {
  return (
    <div> 
  
      <div style={{backgroundColor: bgColor.nameColor}} className={cl.descriptionContainer}>
        <p>{description}</p>
      </div>
      <h2 style={{ backgroundColor: bgColor.buttonsBgColor }} className="title">
        {title}
      </h2>
    </div>
  );
};

export default DescriptionPage;
