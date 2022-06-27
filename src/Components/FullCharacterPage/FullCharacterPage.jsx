import React, { useEffect, useState } from "react";
import cl from "./FullCharacterPage.module.css";
import VisionHelper from "../Helpers/VisionHelper";

const FullCharacterPage = ({ characterData }) => {
  const [visionImg, setVisionImg] = useState("");
  const [bgColor, setBgColor] = useState({
    nameColor: "black",
  });
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

  return (
    <>
    {/* <button onClick={() => console.log(characterData)}>getCharacter</button> */}
      <div className={cl.characterPage}>
        <div
          className={cl.image}
          style={{ backgroundImage: `url(${characterData["gacha-splash"]})` }}
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
