import React from "react";
import Character from "../Character/Character";
import Loader from "../../UI/Loader/Loader";
import cl from "./CharactersContainer.module.css";

const CharactersContainer = ({ isLoading, characters, openModal }) => {

  if(isLoading){
    return <Loader />
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
      {characters.map(({ name, icon, data }, index) => (

          <Character
            key={name}
            openModal={openModal}
            isLoading={isLoading}
            name={name}
            icon={icon}
            rarity={data.rarity}
            vision={data.vision}
          />

      ))}
    </>
  );
};

export default CharactersContainer;
