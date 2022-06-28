import React, { useEffect, useState } from "react";
import Loader from "../../../UI/Loader/Loader";
import cl from "./CharacterImage.module.css";
const CharacterImage = ({ bgColor, characterData, visionImg }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    function onImageLoad() {
      setIsLoaded(true);
    }

    img.src = characterData["gacha-splash"];
    img.addEventListener("load", onImageLoad);
    return () => {
      img.removeEventListener("load", onImageLoad);
    };
  }, [characterData]);

  return (
    <>
      <div
        style={isLoaded ? { display: "none" } : { display: "flex" }}
        className={cl.loaderContainer}
      >
        <Loader style={isLoaded ? { display: "none" } : { display: "flex" }} />
      </div>
      <div className={cl.characterContainer}>
        <div
          className={cl.image}
          style={
            isLoaded
              ? {
                  display: "flex",
                  backgroundColor: bgColor.nameColor,
                  backgroundImage: `url(${characterData["gacha-splash"]})`,
                }
              : { display: "none" }
          }
        >
          <div className={cl.nameContainer}>
            <div
              className={cl.nameLine}
              style={{ backgroundColor: bgColor.nameColor }}
            >
              <img className={cl.visionIcon} alt="Vision" src={visionImg}></img>
              <h2 className={cl.name}>{characterData.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterImage;
