import React from "react";
import cl from "./Constellation.module.css";
const Constellation = ({ id, bgColor, setCurrentConst }) => {

  return (
    <div className={cl.const}>
      <button onClick={() => setCurrentConst(id)} style={{ backgroundColor: bgColor }}>{id}</button>
      <div className={cl.body} style={{ backgroundColor: bgColor }}></div>
    </div>
  );
};
export default Constellation;
