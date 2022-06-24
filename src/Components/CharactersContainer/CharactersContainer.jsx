import React from "react";
import Character from "../Character/Character";
import cl from "./CharactersContainer.module.css";

const CharactersContainer = ({ characters, getCharacterData }) => {
  return (
    <div className={cl.charactersContainer}>
      {characters.map(({ name, icon }) => (
          <Character
           key={name}
            getCharacterData={getCharacterData}
            name={name}
            icon={icon}
          />
      ))}
    </div>
  );
};

export default CharactersContainer;
