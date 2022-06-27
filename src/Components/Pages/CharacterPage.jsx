import React, { useState, useEffect, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import CharacterService from "../API/CharacterService";
import FullCharacterPage from "../FullCharacterPage/FullCharacterPage";
import Loader from "../UI/Loader/Loader";
const CharacterPage = () => {
  const { name } = useParams();
  const [characterData, setCharacterData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchCharacterData = useCallback(async () => {
    setIsLoading(true);
    let data;
    try {
      data = await CharacterService.getCharacterData(name);
    } catch (e) {
      return setIsError(true);
    }

    setCharacterData(data.data);
    setIsLoading(false);
  }, [name]);

  useEffect(() => {
    fetchCharacterData();
  }, [name, fetchCharacterData]);

  if (isError) {
    return <Navigate to="/" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
        <FullCharacterPage characterData={characterData} />
    </>
  );
};

export default CharacterPage;
