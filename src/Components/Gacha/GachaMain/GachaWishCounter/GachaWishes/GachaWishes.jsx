import React, { useEffect, useState } from "react";
import eventWish from "../../images/eventWish.webp";
import cl from "./GachaWishes.module.css";
import { Wishes } from "../../../GachaCore/GachaСurrencies";
const GachaWishes = ({isGaching}) => {
  const [wishes, setWishes] = useState(0)
  useEffect(()=>{
    setWishes(Wishes.get())
  }, [isGaching])

  return (
    <div className={cl.wishes}>
      <img
        style={{ marginRight: "10px" }}
        className={cl.wishIcon}
        alt="wish"
        src={eventWish}
      />
      <span>{wishes}</span>
    </div>
  );
};

export default GachaWishes;
