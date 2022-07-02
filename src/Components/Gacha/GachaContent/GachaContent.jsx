import React, { useState, useEffect, useRef } from "react";
import cl from "./GachaContent.module.css";
import eventCharacter from "../../../images/eventCharacterBanner.png";
import eventCharacterWeapon from "../../../images/eventCharacterWeapon.png";
import standartBanner from "../../../images/standartBanner.png";
import GachaButtons from ".././GachaButtons/GachaButtons";
import { useImageLoad } from "../../../hooks/useImageLoad";
import Loader from "../../UI/Loader/Loader";
import GachaCore from "../GachaCore/GachaCore.ts";

import { useFetching } from "../../../hooks/useFetching";
import CharacterService from "../../API/CharacterService";
import Container from "../../UI/Container/Container";

const GachaContent = ({
  setIsGaching,
  isGaching,
  setVideoType,
  isWishAnimationEnded,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const images = [eventCharacter, eventCharacterWeapon, standartBanner];
  const bannerRef = useRef();
  const [banner, setBanner] = useState(0);
  const [fetchBannersImages, isLoaded] = useImageLoad(...images);
  const [visibleWishContent, setVisibleWishContent] = useState(false);
  const [wishItems, setWishItems] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const bannerTypes = ["event", "standart", "standart"];

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
    GachaCore.setBannerType(bannerTypes[banner]);
    bannerRef.current.style.transition = ".2s";
    bannerRef.current.style.opacity = 0;
    setTimeout(() => {
      bannerRef.current.src = images[banner];
      setIsAnimating(true);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [banner]);

  useEffect(() => {
    if (isAnimating) {
      bannerRef.current.style.transition = ".3s";
      bannerRef.current.style.opacity = 1;
      setIsAnimating(false);
    }
  }, [isAnimating]);

  useEffect(() => {
    fetchBannersImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getOneItem = () => {
    const result = GachaCore.getOneItem();
    const itemRarity = result[0];
    const itemName = result[1];
    const videoType = "wish" + itemRarity + "Star1";
    const chars = characters.find((char) => char.name === itemName);
    const weapon = weapons.find((weap) => weap.name === itemName);
    const resultItem = [chars, weapon].filter((item) => item !== undefined);
    setWishItems([...resultItem]);

    setVideoType(videoType);
    setIsGaching(true);
  };

  const getTenItems = () => {
    const result = GachaCore.getTenItems();
    const itemsRarity = result.map((item) => item[0]);
    const itemsNames = result.map((item) => item[1]);
    const maxRarity = Math.max(...itemsRarity);
    const videoType = "wish" + maxRarity + "Star10";

    const chars = itemsNames.map((name) =>
      characters.find((char) => char.name === name)
    );
    const weapon = itemsNames.map((name) =>
      weapons.find((char) => char.name === name)
    );

    const charsResult = chars.filter((char) => char !== undefined);
    const weaponResult = weapon.filter((weap) => weap !== undefined);

    setWishItems([...charsResult, ...weaponResult]);
    setVideoType(videoType);
    setIsGaching(true);
  };

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

  const getBackgroundColor = (rarity) => {
    switch (rarity) {
      case 3:
        return "#3498db";
      case 4:
        return "#9b59b6";
      case 5:
        return "#f1c40f";
      default:
        return "#2ecc71";
    }
  };

  return (
    <>
      <div
        style={
          visibleWishContent
            ? { display: "flex", color: "black" }
            : { display: "none" }
        }
        className={cl.wishContent}
      >
        <Container className={"wishContent"}>
          {wishItems.map(({ icon, data }, index) => (
            <div
              style={{ backgroundColor: getBackgroundColor(data.rarity) }}
              className={cl.item}
              key={index}
            >
              <img className={cl.wishImg} src={icon} alt="wishIcon" />
              <p>{data.name}</p>
            </div>
          ))}
        </Container>
        <button className={cl.backBtn} onClick={() => setIsGaching(false)}>
          Назад
        </button>
      </div>
      <div
        style={isGaching ? { display: "none" } : { display: "flex" }}
        className={cl.content}
      >
        <Loader style={isLoaded ? { display: "none" } : { display: "flex" }} />
        <div
          style={!isLoaded ? { display: "none" } : { display: "flex" }}
          className={cl.banners}
        >
          <div className={cl.bannersBtns}>
            {images.map((src, index) => (
              <GachaButtons
                key={src}
                banner={banner}
                src={src}
                id={index}
                setBanner={setBanner}
              />
            ))}
          </div>
          <img className={cl.bannerImage} ref={bannerRef} src="" alt="banner" />
          <div className={cl.wishBtns}>
            <button
              disabled={isLoading || isGaching ? true : false}
              onClick={() => getOneItem()}
            >
              Использовать 1
            </button>
            <button
              disabled={isLoading || isGaching ? true : false}
              onClick={() => getTenItems()}
            >
              Использовать 10
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default GachaContent;
