import React from "react";
import Character from "../Character/Character";
import cl from './CharactersContainer.module.css';


const CharactersContainer = ({ characters, getCharacterData}) => {
  return (
    <div className={cl.charactersContainer}>
      {characters.map(( {name, icon}, index) => (
        <Character getCharacterData={getCharacterData} name={name} icon={icon} key={index + 1}/>
      ))}
    </div>
  );
};

export default CharactersContainer;
