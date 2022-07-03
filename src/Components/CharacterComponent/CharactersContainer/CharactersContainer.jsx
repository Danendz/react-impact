import React from "react";
import Character from "../Character/Character";
import Loader from "../../UI/Loader/Loader";
import cl from "./CharactersContainer.module.css";
const CharactersContainer = ({ isLoadingData, characters, openModal }) => {

  if (isLoadingData) {
    return <Loader />;
  }

  if (!characters.length) {
    return (
      <h1 className={cl.characterNotFound} style={{ padding: 10 }}>
        Извините таких персонажей нет!
      </h1>
    );
  }

  return (
    <>
      {characters.map(({ name, data, icon }, index) => (
        <Character
          key={name}
          openModal={openModal}
          name={name}
          icon={icon}
          rarity={data.rarity}
        />
      ))}
    </>
  );
};

export default CharactersContainer;
