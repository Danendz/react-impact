import React from "react";
import Character from "../Character/Character";
import Loader from "../UI/Loader/Loader";
import cl from "./CharactersContainer.module.css";

const CharactersContainer = ({ isLoading, characters, openModal }) => {
  if (isLoading) {
    return <Loader style={{ marginTop: 40 }} />;
  }
  if (!characters.length) {
    return (
      <h1 className={cl.characterNotFound} style={{ marginTop: 40 }}>
        Извините таких персонажей нет!
      </h1>
    );
  }

  return (
    <div className={cl.charactersContainer}>
      {characters.map(({ name, icon, data }, index) => (
        <Character key={name} openModal={openModal} isLoading={isLoading} name={name} icon={icon} />
      ))}
    </div>
  );
};

export default CharactersContainer;
