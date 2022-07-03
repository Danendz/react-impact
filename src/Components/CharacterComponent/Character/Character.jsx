import React, { useEffect, useRef } from "react";
import cl from "./Character.module.css";

const Character = ({ name, icon, openModal, rarity }) => {
  /* const [visionIcon, setVisionIcon] = useState(""); */
  const img = useRef();
  useEffect(() => {
    const tempImg = img;
    function handleError() {
      const tempSrc = tempImg.current.src;
      tempImg.current.src = tempSrc + "-big";
    }
    tempImg.current.addEventListener("error", handleError);
  }, [icon]);


  return (
    <>
      <div onClick={() => openModal(name)} className={cl.character}>
        {/* <img className={cl.visionIcon} src={visionIcon} alt='vision' /> */}
        <img
          style={
            rarity === 5
              ? { backgroundColor: "#f39c12" }
              : { backgroundColor: "#9b59b6" }
          }
          ref={img}
          alt="character icon"
          className={cl.character_icon}
          src={icon}
        />

        <span className={cl.character_name}>{name}</span>
      </div>
    </>
  );
};

export default Character;
