import React, { useEffect, useMemo, useState } from "react";
import CharactersContainer from "../CharactersContainer/CharactersContainer";
import CharacterService from "../API/CharacterService";
import Modal from "../UI/Modal/Modal";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import CharacterSearch from "../CharacterSearch/CharacterSearch";
import NotFoundPage from './NotFoundPage';
import { useFetching } from "../../hooks/useFetching";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [characterData, setCharacterData] = useState([]);
    const [modal, setModal] = useState(false);
    const [query, setQuery] = useState("");

    const [fetchCharacters, isLoading, error] = useFetching(async()=>{
      const charactersInfo = await CharacterService.getCharacters();
      setCharacters(charactersInfo);
    })

  
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
    
    
    if(error){
      return <NotFoundPage />
    }

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
        isLoading={isLoading}
        openModal={modalOpen}
        characters={searchPost}
      />
    </>
  );
};
export default Characters;
