import React, { useState } from "react";
import Modal from "../../UI/Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

import CharactersContainer from "../CharactersContainer/CharactersContainer";
import Widget from "../../Widget/Widget";

const CharacterWidget = ({ characters, isLoading, className }) => {
  const [modal, setModal] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  async function modalOpen(name) {
    setModal(true);
    const findChar = characters.find((char) => char.name === name);
    setCharacterData(findChar.data);
  }

  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <CharacterInfo characterData={characterData} modal={modal} />
      </Modal>
      <Widget className={className} title={"Characters"}>
          <CharactersContainer
            isLoading={isLoading}
            openModal={modalOpen}
            characters={characters}
          />
      </Widget>
    </>
  );
};

export default CharacterWidget;
