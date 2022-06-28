import React from "react";
import cl from "./ContentContainer.module.css";

const ContentContainer = ({
  bgColor,
  characterData,
  title,
  isApiMap,
  content,
}) => {
  if (isApiMap && content) {
    return (
      <>
        <div className={cl.contentContainer}>
          <h2 style={{ borderBottom: `2px solid ${bgColor.nameColor}` }}>
            {title}
          </h2>
          {content.map(({ name, description }) => (

            <p key={name} style={{ backgroundColor: bgColor.nameColor, textAlign: 'center' }}>
              <span style={{marginBottom: '15px'}}>{name}</span> <br /> <span >{description}</span>
            </p>
          ))}
        </div>
      </>
    );
  }

  if (content) {
    return (
      <>
        <div className={cl.contentContainer}>
          <h2 style={{ borderBottom: `2px solid ${bgColor.nameColor}` }}>
            {title}
          </h2>
          {content.map(({ name, description }) => (
            <p key={name} style={{ backgroundColor: bgColor.nameColor }}>
              {name}: {characterData[description]}
            </p>
          ))}
        </div>
      </>
    );
  }
};

export default ContentContainer;
