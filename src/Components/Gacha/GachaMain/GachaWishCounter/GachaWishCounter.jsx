import React from "react";
import GachaPrimogems from "./GachaPrimogems/GachaPrimogems";
import cl from "./GachaWishCounter.module.css";
import GachaWishes from "./GachaWishes/GachaWishes";

const GachaWishCounter = ({
  isGaching,
  changeBanner,
  setPrimogems,
  primogems,
  wishes,
  setWishes,
  setCrystals,
  crystals
}) => {
  return (
    <div
      style={isGaching ? { display: "none" } : { display: "flex" }}
      className={cl.wishCounterContainer}
    >
      <GachaPrimogems
        setPrimogems={setPrimogems}
        primogems={primogems}
        isGaching={isGaching}
        setCrystals={setCrystals}
        crystals={crystals}
      />
      <GachaWishes
        setWishes={setWishes}
        wishes={wishes}
        changeBanner={changeBanner}
        isGaching={isGaching}
      />
    </div>
  );
};

export default GachaWishCounter;
