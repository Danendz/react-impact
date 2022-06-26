import React from "react";
import cl from "./PageWithButtonsBody.module.css";
const PageWithButtonsBody = ({ data, bgColor }) => {
  if (!data) {
    return <div></div>;
  }
  return (
    <div className={cl.const}>
      <div style={{ backgroundColor: bgColor }} className={cl.content}>
        <h2>{data["name"]}</h2>
        <p>{data["description"]}</p>
      </div>
    </div>
  );
};

export default PageWithButtonsBody;
