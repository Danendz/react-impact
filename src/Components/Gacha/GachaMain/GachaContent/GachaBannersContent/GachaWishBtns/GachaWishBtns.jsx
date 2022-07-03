import React from "react";
import cl from './GachaWishBtns.module.css'
const GachaWishBtns = ({getItems}) => {
  return (
    <div className={cl.wishBtns}>
      <button
       
        onClick={() => getItems(1)}
      >
        Использовать 1
      </button>
      <button
        
        onClick={() => getItems(10)}
      >
        Использовать 10
      </button>
    </div>
  );
};

export default GachaWishBtns;
