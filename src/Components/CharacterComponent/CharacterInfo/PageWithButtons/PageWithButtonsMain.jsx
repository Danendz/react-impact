import React from "react";
import Constelattions from "./PageWithButtonsContainer/PageWithButtonsContainer";
import cl from "./PageWithButtonsMain.module.css";
const PageWithButtonsMain = ({ data, bgColor, title }) => {
  return (
    <div style={{ display: "none" }}>
      <h2 className="title" style={{ backgroundColor: bgColor.buttonsBgColor }}>
        {title}
      </h2>
      <div className={cl.const}>
        <Constelattions
          bgColor={bgColor.buttonsBgColor}
          data={data}
        />
      </div>
    </div>
  );
};
export default PageWithButtonsMain;
