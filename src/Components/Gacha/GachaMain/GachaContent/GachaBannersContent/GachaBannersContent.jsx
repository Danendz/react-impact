import React, { useEffect } from "react";
import GachaBanners from "./GachaBanners/GachaBanners";
import GachaWishBtns from "./GachaWishBtns/GachaWishBtns";
import cl from "./GachaBannersContent.module.css";

import eventCharacter from "./GachaBanners/GachaBannerImages/eventCharacterBanner.png";
import eventCharacterWeapon from "./GachaBanners/GachaBannerImages/eventCharacterWeapon.png";
import standartBanner from "./GachaBanners/GachaBannerImages/standartBanner.png";
import { getItems } from "./getItems/getItems";
import { useDownloadMedia } from "../../../../../hooks/useDownloadMedia";
import GachaLoading from "../../../GachaLoading/GachaLoading";

const GachaBannersContent = ({
  setWishItems,
  setVideoType,
  setIsGaching,
  isGaching,
  characters,
  weapons,
}) => {
  const images = [eventCharacter, eventCharacterWeapon, standartBanner];
  const [fetchBannerImages, isLoading, bannerImages] = useDownloadMedia(images);

  useEffect(() => {
    fetchBannerImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemsGetter = (amountItems) => {
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
      <div className={cl.banners}>
        <GachaBanners isLoading={isLoading} images={bannerImages} />
        <GachaWishBtns isGaching={isGaching} getItems={itemsGetter} />
      </div>
    </div>
  );
};

export default GachaBannersContent;
