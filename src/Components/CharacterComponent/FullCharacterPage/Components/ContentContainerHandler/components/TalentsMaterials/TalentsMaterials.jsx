import React from "react";
import ContentContainer from "../../../ContentContainer/ContentContainer";
import cl from "./TalentMaterials.module.css";
const TalentMaterials = ({ talentMaterials, title, bgColor }) => {
  return (
    <ContentContainer title={title} bgColor={bgColor} >
      {talentMaterials.map(({ name, iconUrl }) => (
        <p key={name} style={{ backgroundColor: bgColor.nameColor }} className={cl.talent}>
          {name}
          <img
            alt="talents"
            src={iconUrl}
            className="visionIcon"
            style={{ width: "35px", height: "35px" , marginLeft: 5}}
          />
        </p>
      ))}
    </ContentContainer>
  );
};

export default TalentMaterials;
