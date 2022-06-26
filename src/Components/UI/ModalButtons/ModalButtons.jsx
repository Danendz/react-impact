import React from "react";
import cl from "./ModalButtons.module.css";
const Constellation = ({ id, bgColor, setCurrentBody }) => {

  return (
    <div className={cl.const}>
      <button onClick={() => setCurrentBody(id)} style={{ backgroundColor: bgColor }}>{id}</button>
      <div className={cl.body} style={{ backgroundColor: bgColor }}></div>
    </div>
  );
};
export default Constellation;
