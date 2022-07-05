import React from "react";
import ShopBundleItem from "./ShopBundleItem/ShopBundleItem";
import Bundles from "./Bundles";
const ShopBundles = ({setCrystals, crystals}) => {
    
  return (
    <>
    {Bundles.map(({bonus, value, cost}) => (
        <ShopBundleItem crystals={crystals} setCrystals={setCrystals} key={value} bonus={bonus} value={value} cost={cost} />
    ))}
    
    </>
  );
};

export default ShopBundles;
