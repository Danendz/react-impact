import React from "react";
import cl from "./ShopBundleItem.module.css";
import genesis from "../../../../images/crystal.webp";
const ShopBundleItem = ({ bonus, value, cost, setCrystals, crystals }) => {
  return (
    <div onClick={()=> setCrystals(crystals + (value + bonus))} className={cl.item}>
      <div className={cl.bonus}>
        <img src={genesis} alt="genesis crystal" />
        <p className={cl.bonusTitle}>Bonus!</p>
        <p className={cl.bonusValue}>+{bonus}</p>
      </div>
      <div className={cl.genesisBig}>
        <img src={genesis} alt="genesis crystal" />
      </div>
      <div className={cl.genesisValueContainer}>
        <p className={cl.genesisValue}>
          <span>{value}</span> Genesis Crystals
        </p>
      </div>
      <p className={cl.price}>$ {cost}</p>
    </div>
  );
};

export default ShopBundleItem;
