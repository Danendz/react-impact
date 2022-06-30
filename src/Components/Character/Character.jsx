import React, { useEffect, useRef } from "react";
import cl from "./Character.module.css";
const Character = ({ name, icon, openModal, isLoading }) => {
  const img = useRef();
  useEffect(() => {
    if (!isLoading) {
      const tempImg = img;

      function handleError() {
        const tempSrc = tempImg.current.src;
        tempImg.current.src = tempSrc + "-big";
      }
      tempImg.current.addEventListener("error", handleError);
    }
  }, [isLoading, icon]);

  return (
    <div onClick={() => openModal(name)} className={cl.character}>
      <img
        ref={img}
        alt="character icon"
        className={cl.character_icon}
        src={icon}
      />

      <span className={cl.character_name}>{name}</span>
    </div>
  );
};

export default Character;
