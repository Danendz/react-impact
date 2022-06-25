import React from "react";
import Constelattions from "./Constellations/Constellations";
import cl from "./ConstellationsPage.module.css";
const ConstelattionsPage = ({ characterData, bgColor, title }) => {
  return (
    <div style={{display: 'none'}}>
      <h2
        className="title"
        style={{ backgroundColor: bgColor.buttonsBgColor }}
      >
        {title}
      </h2>
      <div className={cl.const}>
        <Constelattions
          bgColor={bgColor.buttonsBgColor}
          consts={characterData["constellations"]}
        />
      </div>
    </div>
  );
};
export default ConstelattionsPage;
