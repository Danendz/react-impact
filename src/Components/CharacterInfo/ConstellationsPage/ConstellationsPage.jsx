import React from "react";
import Constelattions from "./Constellations/Constellations";
import cl from "./ConstellationsPage.module.css";
const ConstelattionsPage = ({ characterData, bgColor }) => {
  return (
    <>
      <h2
        className="title"
        style={{ backgroundColor: bgColor.buttonsBgColor }}
      >
        Constellations
      </h2>
      <div className={cl.const}>
        <Constelattions
          bgColor={bgColor.buttonsBgColor}
          consts={characterData["constellations"]}
        />
      </div>
    </>
  );
};
export default ConstelattionsPage;
