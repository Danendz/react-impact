import React, { useEffect, useState } from "react";
import cl from "./FullCharacterPage.module.css";
import Loader from "../UI/Loader/Loader";
import VisionHelper from "../Helpers/VisionHelper";

const FullCharacterPage = ({ characterData }) => {
  const [visionImg, setVisionImg] = useState("");
  const [bgColor, setBgColor] = useState({
    nameColor: "black",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const getVisionIcon = async () => {
      setVisionImg(
        characterData["vision"]
          ? await VisionHelper.getVisionImgs(characterData["vision"])
          : "#"
      );
    };
    getVisionIcon();
    const getVisionColor = async () => {
      const nameBgColor = await VisionHelper.getColorWithAlpha(
        characterData["vision"],
        0.7
      );
      setBgColor({ nameColor: nameBgColor });
    };
    getVisionColor();
  }, [characterData]);

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
      <div className={cl.characterPage}>
        <div className={cl.loaderContainer}>
          <Loader
            style={isLoaded ? { display: "none" } : { display: "flex" }}
          />
        </div>
        <div
          className={cl.image}
          style={
            isLoaded
              ? {
                  display: "block",
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

export default FullCharacterPage;
