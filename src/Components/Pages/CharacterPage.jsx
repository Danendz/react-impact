import React, { useState, useEffect, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import getFilteredTalents from "../Helpers/getFilteredTalents";
import { useFetching } from "../../hooks/useFetching";
import CharacterService from "../API/CharacterService";
import FullCharacterPage from "../FullCharacterPage/FullCharacterPage";
import Loader from "../UI/Loader/Loader";

const CharacterPage = () => {
  const { name } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [talentMaterials, setTalentMaterials] = useState();
  const [talentBooks, setTalentBooks] = useState();

  const [fetchData, isLoading, error] = useFetching(async () => {
    const characterData = await CharacterService.getCharacterData(name);
    const talentMaterials = await CharacterService.getTalentMaterials();
    const talentBooks = await CharacterService.getTalentBooks();

    setCharacterData(characterData.data);
    setTalentMaterials(talentMaterials);
    setTalentBooks(talentBooks);
  });

  useEffect(() => {
    fetchData();
  }, [name]);

  const filteredTalentMaterials = useMemo(() => {
    return getFilteredTalents.filteredTalentMaterials(talentMaterials, name);
  }, [talentMaterials, name]);

  const filteredTalentBooks = useMemo(() => {
    return getFilteredTalents.filteredTalentBooks(talentBooks, name);
  }, [talentBooks, name]);

  if (error) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <FullCharacterPage
        talentBooks={filteredTalentBooks}
        characterMaterials={filteredTalentMaterials}
        characterData={characterData}
      />
    </>
  );
};

export default CharacterPage;
