import React, { useState, useEffect } from "react";
import CharacterWidget from "../CharacterWidget/CharacterWidget";
import { useFetching } from "../../hooks/useFetching";
import CharacterService from "../API/CharacterService";
import NotFoundPage from "./NotFoundPage";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [fetchCharacters, isLoading, error] = useFetching(async () => {
    const charactersData = await CharacterService.getCharacters();
    setCharacters(charactersData.slice(0, 10));
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if(error){
    return (
      <NotFoundPage />
    )
  }
  return (
    <>
      <div style={{width: '95%'}}>
        <CharacterWidget
          className={'home'}
          characters={characters}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default Home;
