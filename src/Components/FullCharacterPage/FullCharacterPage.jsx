import React, { useEffect, useState } from "react";
import cl from "./FullCharacterPage.module.css";
import CharacterImage from "./Components/CharacterImage/CharacterImage";
import ContentContainer from "./Components/ContentContainer/ContentContainer";
import basicInfo from "./content/basicInfo";
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

  if(!characterData){
    return(
      <div>loading</div>
    )
  }

  
  return (
    <>
      <div className={cl.characterPage}>
        <CharacterImage
          visionImg={visionImg}
          bgColor={bgColor}
          characterData={characterData}
        />
        <ContentContainer
          title={'Basic information'}
          content={basicInfo}
          bgColor={bgColor}
          characterData={characterData}
        />
        <ContentContainer
        title={'Constellations'}
          content={characterData['constellations']}
          isApiMap={true}
          bgColor={bgColor}
        />
      </div>
    </>
  );
};

export default FullCharacterPage;
