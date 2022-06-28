import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import CharacterService from "../API/CharacterService";
import FullCharacterPage from "../FullCharacterPage/FullCharacterPage";
import Loader from "../UI/Loader/Loader";

const CharacterPage = () => {
  const { name } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [talentsMaterials, setTalentsMaterials] = useState();
  const [talentsBooks, setTalentsBooks] = useState();

  const fetchCharacterData = useCallback(async () => {
    let data;
    try {
      data = await CharacterService.getCharacterData(name);
    } catch (e) {
      return setIsError(true);
    }
    setCharacterData(data.data);
  }, [name]);

  const fetchTalentsMarialsData = async () => {
    let dataMaterials;
    let dataBooks;
    try {
      dataMaterials = await CharacterService.getTalentsMaterials();
      dataBooks = await CharacterService.getTalentsBooks();
    } catch (e) {
      console.log(e);
    }
    setTalentsMaterials(dataMaterials);
    setTalentsBooks(dataBooks);
  };

  const getData = useCallback(async () => {
    setIsLoading(true);
    await fetchTalentsMarialsData();
    await fetchCharacterData();

    setIsLoading(false);
  }, [fetchCharacterData]);

  useEffect(() => {
    getData();
  }, [name, getData]);


  const filteredTalentsMaterials = useMemo(() => {
    if (talentsMaterials) {
      return talentsMaterials.payload.talentMaterials.filter(
        (element) =>
          element.characters.filter((char) => char.name.toLowerCase() === name)
            .length > 0
      );
    }
    return talentsMaterials;
  }, [talentsMaterials, name]);

  const filteredTalentsBooks = useMemo(() => {
    if (talentsBooks) {
      return talentsBooks.payload.talentBooks.filter(
        (element) =>
          element.characters.filter((char) => char.name.toLowerCase() === name)
            .length > 0
      );
    }
    return talentsBooks;
  }, [talentsBooks, name]);

  if (isError) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <FullCharacterPage
        talentBooks={filteredTalentsBooks}
        characterMaterials={filteredTalentsMaterials}
        characterData={characterData}
      />
    </>
  );
};

export default CharacterPage;
