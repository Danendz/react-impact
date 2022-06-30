import React from "react";
import Character from "../Character/Character";
import Container from "../UI/Container/Container";
import cl from "./CharactersContainer.module.css";

const CharactersContainer = ({
  isLoading,
  characters,
  openModal,
  className,
  title,
}) => {
  if (!characters.length) {
    return (
      <h1 className={cl.characterNotFound} style={{ marginTop: 40 }}>
        Извините таких персонажей нет!
      </h1>
    );
  }

  return (
    <Container style={{flexDirection: 'column'}}>
      <Container style={{padding: 10, margin: 0}}>
        <h1>{title}</h1>
      </Container>
      <Container className={className}>
        {characters.map(({ name, icon, data }, index) => (
          <Character
            key={name}
            openModal={openModal}
            isLoading={isLoading}
            name={name}
            icon={icon}
          />
        ))}
      </Container>
    </Container>
  );
};

export default CharactersContainer;
