import React, { useEffect, useState } from "react";
import {
  GenesisCrystals,
  Primogems,
} from "../../../../GachaCore/GachaСurrencies.ts";
import cl from "./Exchange.module.css";
import crystalIcon from "../../../images/crystal.webp";
import primogem from '../../../images/wish_Primogem.png'
const Exchange = ({ setPrimogems, setModal, modal }) => {
  const [exchangeValue, setExchangeValue] = useState(0);

  useEffect(() => {
    setExchangeValue(0);
  }, [modal]);

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

  const confirmValue = () => {
    setPrimogems(Primogems.get() + exchangeValue);
    Primogems.add(exchangeValue)
    GenesisCrystals.remove(exchangeValue);
    setModal(false);
  };

  return (
    <div className={cl.btnsContainer}>
      <h1>Redeem Primogems</h1>
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
      <div className={cl.consume}>
        <h3>Consume: </h3>
        <img alt="crystal icon" src={crystalIcon} />
        <span>{exchangeValue}</span>
      </div>
      <div className={cl.resultBtns}>
        <button onClick={() => setModal(false)} className={cl.confirmBtn}>
          Cancel
        </button>
        <button onClick={() => confirmValue()} className={cl.confirmBtn}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Exchange;
