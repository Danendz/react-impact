import React, { useEffect, useState } from "react";
import cl from "./FullCharacterPage.module.css";
import CharacterImage from "./Components/CharacterImage/CharacterImage";
import ContentContainerHandler from "./Components/ContentContainerHandler/ContentContainerHandler";
import VisionHelper from "../Helpers/VisionHelper";
import "./style/FullCharacterPage.css";

const FullCharacterPage = ({
  characterData,
  characterMaterials,
  talentBooks,
}) => {
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

  if (!characterData) {
    return <div>loading</div>;
  }
  return (
    <>
      <div className={cl.characterPage}>
        <CharacterImage
          visionImg={visionImg}
          bgColor={bgColor}
          characterData={characterData}
        />
        <ContentContainerHandler
          visionImg={visionImg}
          bgColor={bgColor}
          characterMaterials={characterMaterials}
          characterData={characterData}
          characterBooks={talentBooks}
        />
      </div>
    </>
  );
};

export default FullCharacterPage;
