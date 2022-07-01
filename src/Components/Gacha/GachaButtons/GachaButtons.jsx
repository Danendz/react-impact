import React from "react";
import cl from "./GachaButtons.module.css";
const GachaButtons = ({ banner, id, setBanner, src }) => {
  return (
    <button
      className={cl.buttons}
      style={
        banner === id ? { transform: "scale(1.1)" } : { transform: "scale(1)" }
      }
      onClick={() => setBanner(id)}
    >
      <img src={src} alt="banner" />
    </button>
  );
};

export default GachaButtons;
