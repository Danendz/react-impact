import React, { useEffect, useState } from "react";
import GachaBanners from "./GachaBanners/GachaBanners";
import GachaWishBtns from "./GachaWishBtns/GachaWishBtns";
import cl from "./GachaBannersContent.module.css";

import eventCharacter from "./GachaBanners/GachaBannerImages/eventCharacterBanner.png";
import eventCharacterWeapon from "./GachaBanners/GachaBannerImages/eventCharacterWeapon.png";
import standartBanner from "./GachaBanners/GachaBannerImages/standartBanner.png";
import { getItems } from "./getItems/getItems";
import { useDownloadMedia } from "../../../../../hooks/useDownloadMedia";
import GachaLoading from "../../../GachaLoading/GachaLoading";
import { Primogems, Wishes } from "../../../GachaCore/GachaСurrencies";
import GachaTempModal from '../../../../UI/GachaModal/GachaTempModal'

const GachaBannersContent = ({
  setWishItems,
  setVideoType,
  setIsGaching,
  isGaching,
  characters,
  weapons,
  setChangeBanner
}) => {
  const images = [eventCharacter, eventCharacterWeapon, standartBanner];
  const [fetchBannerImages, isLoading, bannerImages] = useDownloadMedia(images);
  const [notEnoughCurrencies, setNotEnoughCurrencies] = useState(false);

  useEffect(() => {
    fetchBannerImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (notEnoughCurrencies) {
      setTimeout(() => {
        setNotEnoughCurrencies(false);
      }, 2000);
    }
  }, [notEnoughCurrencies]);

  const itemsGetter = (amountItems) => {
    const totalWishes = Wishes.get();
    const totalPrimogems = Primogems.get();
    if (totalWishes < amountItems) {
      const cost = totalPrimogems - (amountItems - totalWishes) * 160;
      if (cost < 0) {
        return setNotEnoughCurrencies(true);
      }
    }
    const [wishItems, videoType] = getItems(amountItems, characters, weapons);
    setWishItems(wishItems);
    setVideoType(videoType);
    setIsGaching(true);
  };

  if (isLoading) {
    return <GachaLoading />;
  }
  return (
    <div
      style={isGaching ? { display: "none" } : { display: "flex" }}
      className={cl.content}
    >
      <GachaTempModal modal={notEnoughCurrencies}>
        <p>У вас недостаточно молитв!</p>
      </GachaTempModal>
      <div className={cl.banners}>
        <GachaBanners setChangeBanner={setChangeBanner} images={bannerImages} />
        <GachaWishBtns isGaching={isGaching} getItems={itemsGetter} />
      </div>
    </div>
  );
};

export default GachaBannersContent;
