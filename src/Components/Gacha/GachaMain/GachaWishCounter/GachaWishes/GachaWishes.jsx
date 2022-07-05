import React, { useEffect, useState } from "react";
import eventWish from "../../images/eventWish.webp";
import standardWish from "../../images/standardWish.webp";
import GachaCore from "../../../GachaCore/GachaCore.ts";
import cl from "./GachaWishes.module.css";
import { Wishes } from "../../../GachaCore/GachaСurrencies";
const GachaWishes = ({ isGaching, changeBanner }) => {
  const [wishes, setWishes] = useState(0);
  const [wishIcon, setWishIcon] = useState(eventWish);
  useEffect(() => {
    setWishes(Wishes.get());
  }, [isGaching]);

  useEffect(() => {
    switch (GachaCore.getBannerType()) {
      case "event":
        setWishIcon(eventWish);
        break;
      case "standard":
        setWishIcon(standardWish);
        break;
      default:
        setWishIcon("error");
        break;
    }
  }, [changeBanner]);

  return (
    <div className={cl.wishes}>
      <img
        style={{ marginRight: "10px" }}
        className={cl.wishIcon}
        alt="wish"
        src={wishIcon}
      />
      <span>{wishes}</span>
    </div>
  );
};

export default GachaWishes;
