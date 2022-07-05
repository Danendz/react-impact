import React from "react";
import { GenesisCrystals } from "../../../../../GachaCore/GachaСurrencies.ts";
import cl from './ExchangeButtons.module.css'
const ExchangeButtons = ({ exchangeValue, setExchangeValue }) => {
  const decrementValue = (value) => {
    if (exchangeValue - value > 0) {
      setExchangeValue(exchangeValue - value);
    } else {
      setExchangeValue(exchangeValue - exchangeValue);
    }
  };

  const incrementValue = (value) => {
    const crystals = GenesisCrystals.get();
    if (exchangeValue + value <= crystals) {
      setExchangeValue(exchangeValue + value);
    } else if (exchangeValue + (crystals - exchangeValue) <= crystals) {
      setExchangeValue(exchangeValue + (crystals - exchangeValue));
    }
  };

  return (
    <>
      <div className={cl.exchangeBtns}>
        <button onClick={() => decrementValue(1)}>-</button>
        <span>{exchangeValue}</span>
        <button onClick={() => incrementValue(1)}>+</button>
      </div>
      <div className={cl.addMore}>
        <button onClick={() => setExchangeValue(0)}>Min</button>
        <button onClick={() => decrementValue(100)}>- 100</button>
        <button onClick={() => incrementValue(100)}>+ 100</button>
        <button onClick={() => setExchangeValue(GenesisCrystals.get())}>
          Max
        </button>
      </div>
    </>
  );
};

export default ExchangeButtons;
