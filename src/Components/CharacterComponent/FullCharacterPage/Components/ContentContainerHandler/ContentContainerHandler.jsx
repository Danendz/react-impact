import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import ItemContainer from "./components/Item/ItemContainer/ItemContainer";
import basicInfo from "../../content/basicInfo";
import cl from "./ContentContainerHandler.module.css";
import Loader from "../../../../UI/Loader/Loader";
import mainCharacterData from "../../content/mainCharacterData";
import TalentMaterials from "./components/TalentsMaterials/TalentsMaterials";

const ContentContainerHandler = ({ visionImg, bgColor, characterData, characterMaterials, characterBooks }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    if (characterData) {
      setIsLoaded(true);
    }
  }, [characterData]);

  if (!isLoaded) {
    return <Loader />;
  }
  return (
    <>
      <ContentContainer title={"Basic information"} bgColor={bgColor}>
        {basicInfo.map(({ name, description }) => (
          <p
            className={cl.item}
            key={name}
            style={{ backgroundColor: bgColor.nameColor }}
          >
            {name}: {characterData[description]}{" "}
            {name === "Vision" ? (
              <img
                alt="vision"
                className="visionIcon"
                style={{ width: "25px", height: "25px" }}
                src={visionImg}
              ></img>
            ) : (
              ""
            )}
          </p>
        ))}
      </ContentContainer>

      {mainCharacterData.map(({ title, data }) => (
        <ItemContainer
          key={title}
          bgColor={bgColor}
          title={title}
          data={data}
          characterData={characterData}
        />
      ))}

      
        <TalentMaterials talentMaterials={characterMaterials} bgColor={bgColor} title={'Talents Materials'} />
        <TalentMaterials talentMaterials={characterBooks} bgColor={bgColor} title={'Talents Books'} />

        
    </>
  );
};
export default ContentContainerHandler;
