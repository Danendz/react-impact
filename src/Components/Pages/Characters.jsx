import React, { useEffect, useState } from "react";
import CharacterService from "../API/CharacterService";
import NotFoundPage from "./NotFoundPage";
import { useFetching } from "../../hooks/useFetching";
import CharacterWidget from "../CharacterComponent/CharacterWidget/CharacterWidget";
import { useCharacters } from "../../hooks/useCharacters";
import CharactersFilter from "../CharacterComponent/CharactersFilter/CharactersFilter";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState({
    query: "",
    sort: "name",
  });
  const [fetchCharacters, isLoading, error] = useFetching(async () => {
    const charactersInfo = await CharacterService.getCharacters();
    setCharacters(charactersInfo);
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredChars = useCharacters(characters, filter.sort, filter.query);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      {/* <button onClick={() => console.log(characters)}>get characters</button> */}
      <h1 style={{ textAlign: "center" }}>Characters</h1>
      <CharactersFilter
        characters={filteredChars}
        filter={filter}
        setFilter={setFilter}
      />
      <CharacterWidget characters={filteredChars} isLoading={isLoading} />
    </div>
  );
};
export default Characters;
