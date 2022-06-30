import { useMemo } from "react";

export const useSortedCharacters = (characters, sort) => {
  const sortedCharacters = useMemo(() => {
    if (sort) {
      if (sort === "vision") {
        return [...characters].sort((a,b) => {
            if (a.data[sort] < b.data[sort]){
                return - 1;
            }
            if(a.data[sort] < b.data[sort]){
                return 1
            }
            return 0
        });
      }
      return [...characters].sort((a, b) => b.data[sort] - a.data[sort]);
    }
    return characters;
  }, [sort, characters]);
  return sortedCharacters;
};

export const useCharacters = (characters, sort, query) => {
  const sortedCharacters = useSortedCharacters(characters, sort);

  const sortedAndSearchedCharacters = useMemo(() => {
    if (query) {
      return sortedCharacters.filter((char) =>
        char.name.toLowerCase().includes(query.toLowerCase().trim())
      );
    }
    return sortedCharacters;
  }, [query, sortedCharacters]);

  return sortedAndSearchedCharacters;
};
