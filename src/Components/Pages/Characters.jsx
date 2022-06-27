import React, { useEffect, useMemo, useState } from "react";
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import CharacterService from "../API/CharacterService";
import Modal from "../UI/Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import CharacterSearch from "../CharacterSearch/CharacterSearch";


const Characters = () => {
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
    <>
      {/* <button onClick={() => console.log(characters)}>get characters</button> */}
      <h1 style={{ textAlign: "center" }}>Characters</h1>
      <CharacterSearch query={query} setQuery={setQuery} />
      <Modal modal={modal} setModal={setModal}>
        <CharacterInfo
          characterData={characterData}
          modal={modal}
        />
      </Modal>
      <CharactersContainer
        isLoading={isCharactersLoading}
        openModal={modalOpen}
        characters={searchPost}
      />
    </>
  );
};
export default Characters;
