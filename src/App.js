import React, { useEffect, useMemo, useState } from "react";
import CharactersContainer from "./Components/CharactersContainer/CharactersContainer";
import CharacterService from "./Components/API/CharacterService";
import Modal from "./Components/UI/Modal/Modal";
import CharacterInfo from "./Components/CharacterInfo/CharacterInfo";
import CharacterSearch from "./Components/CharacterSearch/CharacterSearch";
import "./style/App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [modal, setModal] = useState(false);
  const [isCharacterDataLoading, setIsCharacterDataLoading] = useState(false);
  const [isCharactersLoading, setIsCharactersLoading] = useState(false)
  const [query, setQuery] = useState("");

  async function fetchCharacters() {
    setIsCharactersLoading(true);
    const charactersInfo = await CharacterService.getCharacters();
    setCharacters(charactersInfo);
    setIsCharactersLoading(false);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacterData(name) {
    const characterData = await CharacterService.getCharacterData(name);
    setCharacterData(characterData);
  }

  async function modalOpen(name){
    setIsCharacterDataLoading(true);
    setModal(true);
    await fetchCharacterData(name)
    setIsCharacterDataLoading(false);
  }

  const searchPost = useMemo(() => {
    if (query) {
      return characters.filter((char) =>
        char.name.toLowerCase().includes(query.toLowerCase().trim())
      );
    }
    return characters;
  }, [query, characters]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Genshin impact characters</h1>
      <CharacterSearch query={query} setQuery={setQuery} />
      <Modal modal={modal} setModal={setModal}>
        <CharacterInfo
          isLoading={isCharacterDataLoading}
          
          characterData={characterData}
        />
      </Modal>
      <CharactersContainer
        isLoading={isCharactersLoading}
        openModal={modalOpen}
        characters={searchPost}
      />
    </div>
  );
}

export default App;
