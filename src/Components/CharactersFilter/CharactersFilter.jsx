import React from "react";
import CharacterSearch from "../CharacterSearch/CharacterSearch";
import MySelect from "../UI/MySelect/MySelect";
const CharactersFilter = ({ filter, setFilter, characters }) => {
  return (
    <>
      <CharacterSearch
        characters={characters}
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(value) => setFilter({ ...filter, sort: value })}
        defaultValue="Сортировка"
        options={[
          { value: "name", name: "По именам" },
          { value: "rarity", name: "По редкости" },
          { value: "vision", name: "По элементу" },
        ]}
      />
    </>
  );
};
export default CharactersFilter;
