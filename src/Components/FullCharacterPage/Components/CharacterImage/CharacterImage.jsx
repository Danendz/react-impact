import React, { useEffect } from "react";
import { useImageLoad } from "../../../../hooks/useImageLoad";
import Loader from "../../../UI/Loader/Loader";
import cl from "./CharacterImage.module.css";
const CharacterImage = ({ bgColor, characterData, visionImg }) => {

  const [loadImage, isLoaded] = useImageLoad((characterData['gacha-splash']))

  useEffect(() => {
    loadImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              <img className="visionIcon" alt="Vision" src={visionImg}></img>
              <h2 className={cl.name}>{characterData.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterImage;
