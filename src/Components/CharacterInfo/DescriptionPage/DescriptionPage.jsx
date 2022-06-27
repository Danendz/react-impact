import React from "react";
import cl from "./DescriptionPage.module.css";
const DescriptionPage = ({ title, bgColor, description, children }) => {
  return (
    <div style={{display: 'none'}}> 
  
      <div style={{backgroundColor: bgColor.nameColor}} className={cl.descriptionContainer}>
        <p>{description ? description : 'Извините, но описание куда то ушло!'}</p>
        {children}
      </div>
      <h2 style={{ backgroundColor: bgColor.buttonsBgColor }} className="title">
        {title}
      </h2>
      
      
    </div>
  );
};

export default DescriptionPage;
