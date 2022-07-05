import React from "react";
import cl from "./GachaShopContent.module.css";
import ShopBundles from "./ShopBundles/ShopBundles";
const GachaShopContent = () => {
  return (
    <>
      <div className={cl.shopContent}>
        <p>Shop content</p>
      </div>
      <div className={cl.shop}><ShopBundles /></div>
    </>
  );
};

export default GachaShopContent;
