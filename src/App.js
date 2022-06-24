import React, { useEffect, useMemo, useState } from "react";
import CharactersContainer from "./Components/CharactersContainer/CharactersContainer";
import CharacterService from "./Components/API/CharacterService";
import Modal from "./Components/UI/Modal/Modal";
import CharacterInfo from "./Components/CharacterInfo/CharacterInfo";
import CharacterSearch from "./Components/CharacterSearch/CharacterSearch";
import "./style/App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [modal, setModal] = useState(false);
  const [isCharacterDataLoading, setIsCharacterDataLoading] = useState(false);
  const [query, setQuery] = useState("");

  async function fetchCharacters() {
    const charactersInfo = await CharacterService.getCharacters();
    setCharacters(charactersInfo);
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacterData(name) {
    setIsCharacterDataLoading(true);
    setModal(true);
    const characterData = await CharacterService.getCharacterData(name);
    setCharacterData(characterData);
    setIsCharacterDataLoading(false);
  }

  const searchPost = useMemo(() => {
    console.log('rerender')
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
      {searchPost.length ? (
        <CharactersContainer
          getCharacterData={fetchCharacterData}
          characters={searchPost}
        />
      ) : (
        <h1 style={{ marginTop: 40 }}>Извините таких персонажей нет!</h1>
      )}
    </div>
  );
}

export default App;
