import React, { useState } from "react";
import cl from "./CharacterInfo.module.css";
import Loader from "../UI/Loader/Loader";
import Modal from "../UI/Modal/Modal";
import Constelattions from "./Constellations/Constellations";

const CharacterInfo = ({ isLoading, characterData }) => {
  const [modal, setModal] = useState(false);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className={cl.info}>
      <img
        className={cl.info_card}
        alt="character card"
        src={characterData["card"]}
      />
      <div>
        <p>
          Name: <strong>{characterData["name"]}</strong>
        </p>
        <p>
          Vision: <strong>{characterData["vision"]}</strong>
        </p>
        <p>
          Weapon: <strong>{characterData["weapon"]}</strong>
        </p>
        <p>
          City: <strong>{characterData["nation"]}</strong>
        </p>
        <p>
          Constellation: <strong>{characterData["constellation"]}</strong>
        </p>
        <Modal modal={modal} setModal={setModal}>
          <Constelattions consts={characterData["constellations"]} />
        </Modal>
        <button onClick={() => setModal(true)}>Constellation</button>
      </div>
    </div>
  );
};

export default CharacterInfo;
