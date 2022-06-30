import React, { useState } from "react";
import Modal from "../UI/Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";

import CharactersContainer from "../CharactersContainer/CharactersContainer";
import Loader from "../UI/Loader/Loader";

const CharacterWidget = ({ characters, isLoading, className }) => {
  const [modal, setModal] = useState(false);
  const [characterData, setCharacterData] = useState([]);
  async function modalOpen(name) {
    setModal(true);
    const findChar = characters.find((char) => char.name === name);
    setCharacterData(findChar.data);
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Modal modal={modal} setModal={setModal}>
        <CharacterInfo characterData={characterData} modal={modal} />
      </Modal>

      <CharactersContainer
        title={"Characters"}
        className={className}
        isLoading={isLoading}
        openModal={modalOpen}
        characters={characters}
      />
    </>
  );
};

export default CharacterWidget;
