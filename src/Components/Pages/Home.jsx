import React, { useState, useEffect } from "react";
import CharacterWidget from "../CharacterWidget/CharacterWidget";
import { useFetching } from "../../hooks/useFetching";
import CharacterService from "../API/CharacterService";
import NotFoundPage from "./NotFoundPage";
import FarmingTalentsTodayWidget from "../FarmingTalentsTodayWidget/FarmingTalentsTodayWidget";
import getFilteredTalents from "../Helpers/getFilteredTalents";
import Loader from "../UI/Loader/Loader";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [talentBooks, setTalentBooks] = useState([]);

  const [fetchCharacters, isLoading, error] = useFetching(async () => {
    const charactersData = await CharacterService.getCharacters();
    const talentBooksData = await CharacterService.getTalentBooks();
    const filteredBooks =
      getFilteredTalents.filteredTalentBooksToday(talentBooksData);
    setCharacters(charactersData.slice(0, 10));
    setTalentBooks(filteredBooks);
  });

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <NotFoundPage />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div style={{ width: "95%" }}>
        <CharacterWidget
          className={"characterWidget"}
          characters={characters}
        />
        <FarmingTalentsTodayWidget
          title={"Books to farm today"}
          className={"home"}
          farmTalents={talentBooks}
        />
      </div>
    </>
  );
};

export default Home;
