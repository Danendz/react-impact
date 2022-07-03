import React, { useState, useEffect } from "react";

import { useFetching } from "../../../../hooks/useFetching";
import CharacterService from "../../../API/CharacterService";
import GachaWishContent from "./GachaWishContent/GachaWishContent";
import GachaBannersContent from "./GachaBannersContent/GachaBannersContent";
import GachaLoading from "../../GachaLoading/GachaLoading";

const GachaContent = ({
  setIsGaching,
  isGaching,
  setVideoType,
  isWishAnimationEnded,
}) => {
  const [visibleWishContent, setVisibleWishContent] = useState(false);
  const [wishItems, setWishItems] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [weapons, setWeapons] = useState([]);

  const [fetchData, isLoading] = useFetching(async () => {
    const charactersData = await CharacterService.getCharacters();
    const weaponsData = await CharacterService.getWeapons();
    setWeapons(weaponsData);
    setCharacters(charactersData);
  });

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isWishAnimationEnded) {
      setVisibleWishContent(true);
    }
  }, [isWishAnimationEnded]);

  useEffect(() => {
    if (!isGaching) {
      setVisibleWishContent(false);
    }
  }, [isGaching]);

  if (isLoading) {
    return <GachaLoading />;
  }

  return (
    <>
      <GachaWishContent
        visibleWishContent={visibleWishContent}
        wishItems={wishItems}
        setIsGaching={setIsGaching}
      />
      <GachaBannersContent
        characters={characters}
        weapons={weapons}
        isGaching={isGaching}
        setWishItems={setWishItems}
        setVideoType={setVideoType}
        setIsGaching={setIsGaching}
      />
    </>
  );
};
export default GachaContent;
