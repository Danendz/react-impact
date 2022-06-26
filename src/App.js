import React, { useEffect, useMemo, useState } from "react";
import CharactersContainer from "./Components/CharactersContainer/CharactersContainer";
import CharacterService from "./Components/API/CharacterService";
import Modal from "./Components/UI/Modal/Modal";
import CharacterInfo from "./Components/CharacterInfo/CharacterInfo";
import CharacterSearch from "./Components/CharacterSearch/CharacterSearch";
import "./style/App.css";

const getVisionImgs = async (currentVision) => {
  const visions = {
    Cryo: "https://muakasan.github.io/genshin-portraits/assets/cryo.png",
    Geo: "https://muakasan.github.io/genshin-portraits/assets/geo.png",
    Anemo: "https://muakasan.github.io/genshin-portraits/assets/anemo.png",
    Electro: "https://muakasan.github.io/genshin-portraits/assets/electro.png",
    Pyro: "https://muakasan.github.io/genshin-portraits/assets/pyro.png",
    Hydro: "https://muakasan.github.io/genshin-portraits/assets/hydro.png",
  };
  return visions[currentVision];
};

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterData, setCharacterData] = useState([]);
  const [modal, setModal] = useState(false);
  const [isCharactersLoading, setIsCharactersLoading] = useState(false);
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

  async function modalOpen(name) {
    setModal(true);
    const findChar = characters.find((char) => char.name === name);
    setCharacterData(findChar.data);
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
      <button onClick={() => console.log(characters)}>get characters</button>
      <h1 style={{ textAlign: "center" }}>Genshin impact characters</h1>
      <CharacterSearch query={query} setQuery={setQuery} />
      <Modal modal={modal} setModal={setModal}>
        <CharacterInfo
          getVisionImgs={getVisionImgs}
          characterData={characterData}
          modal={modal}
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
