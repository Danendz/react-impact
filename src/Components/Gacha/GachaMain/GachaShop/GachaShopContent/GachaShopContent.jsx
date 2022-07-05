import React from "react";
import cl from "./GachaShopContent.module.css";
import ShopBundles from "./ShopBundles/ShopBundles";
import crystal from "../../images/crystal.webp";
const GachaShopContent = ({ crystals, setCrystals, modal, setModal }) => {
  return (
    <>
      <div className={cl.shopContent}>
        <p>Shop content</p>
      </div>

      <div className={cl.close}>
        <button onClick={()=> setModal(false)}>X</button>
      </div>

      <div className={cl.info}>
        <img alt="crystal" src={crystal} />
        <span>{crystals}</span>
      </div>
      <div className={cl.shop}>
        <ShopBundles crystals={crystals} setCrystals={setCrystals} />
      </div>
    </>
  );
};

export default GachaShopContent;
