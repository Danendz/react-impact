import React, { useEffect, useMemo, useState } from "react";
import CharacterService from "../API/CharacterService";
import CharacterSearch from "../CharacterSearch/CharacterSearch";
import NotFoundPage from "./NotFoundPage";
import { useFetching } from "../../hooks/useFetching";
import CharacterWidget from "../CharacterWidget/CharacterWidget";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");

  const [fetchCharacters, isLoading, error] = useFetching(async () => {
    const charactersInfo = await CharacterService.getCharacters();
    setCharacters(charactersInfo);
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredChars = useMemo(() => {
    if (query) {
      return characters.filter((char) =>
        char.name.toLowerCase().includes(query.toLowerCase().trim())
      );
    }
    return characters;
  }, [query, characters]);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <>
      {/* <button onClick={() => console.log(characters)}>get characters</button> */}
      <h1 style={{ textAlign: "center" }}>Characters</h1>
      <CharacterSearch query={query} setQuery={setQuery} />
      <CharacterWidget characters={filteredChars} isLoading={isLoading} />
    </>
  );
};
export default Characters;
