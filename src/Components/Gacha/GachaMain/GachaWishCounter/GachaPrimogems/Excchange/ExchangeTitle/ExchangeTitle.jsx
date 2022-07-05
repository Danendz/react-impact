import React from "react";

import crystalIcon from "../../../../images/crystal.webp";
import primogem from '../../../../images/wish_Primogem.png'
import cl from './ExchangeTitle.module.css'


const ExchangeTitle = () => {
  return (
    <>
      <h1 className={cl.title}>Redeem Primogems</h1>
      <div className={cl.reedem}>
        <div>
          <img alt="crystal icon" src={crystalIcon} />
          <h2>Genesis Crystal x1</h2>
        </div>
        <div>
          <img alt="primogem icon" src={primogem} />
          <h2>Primogem x1</h2>
        </div>
      </div>
    </>
  );
};

export default ExchangeTitle;
