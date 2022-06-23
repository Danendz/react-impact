import React, { useEffect, useState } from "react";
import CharactersContainer from "./Components/CharactersContainer/CharactersContainer";
import CharacterService from "./Components/API/CharacterService";
import Modal from "./Components/UI/Modal/Modal";
import CharacterInfo from "./Components/CharacterInfo/CharacterInfo";
import "./style/App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState({})
  const [modal, setModal] = useState(false);
  const [isCharacterDataLoading, setIsCharacterDataLoading] = useState(false);
  
  async function fetchCharacters() {
    const charactersInfo = await CharacterService.getCharacters();
    setCharacters(charactersInfo);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacterData(name){
    setIsCharacterDataLoading(true);
    setModal(true)
    const characterData = await CharacterService.getCharacterData(name);
    setCharacterData(characterData);
    setIsCharacterDataLoading(false)
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Genshin impact characters</h1>
      <Modal modal={modal} setModal={setModal}> 
        <CharacterInfo isLoading={isCharacterDataLoading} characterData={characterData} />
      </Modal>
      <CharactersContainer getCharacterData={fetchCharacterData} characters={characters} />
    </div>
  );
}

export default App;
