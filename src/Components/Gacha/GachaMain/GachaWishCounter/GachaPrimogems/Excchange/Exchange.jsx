import React, { useEffect, useState } from "react";
import {
  GenesisCrystals,
  Primogems,
} from "../../../../GachaCore/GachaСurrencies.ts";
import cl from "./Exchange.module.css";
import crystalIcon from "../../../images/crystal.webp";
import ExchangeTitle from "./ExchangeTitle/ExchangeTitle";
import ExchangeButtons from "./ExchangeButtons/ExchangeButtons";
import ModalConfirmBtns from "../../../../../UI/ModalConfirmBtns/ModalConfirmBtns";

const Exchange = ({ setPrimogems, setModal, modal }) => {

  const [exchangeValue, setExchangeValue] = useState(0);

  useEffect(() => {
    setExchangeValue(0);
  }, [modal]);

  
  const confirmValue = () => {
    setPrimogems(Primogems.get() + exchangeValue);
    Primogems.add(exchangeValue)
    GenesisCrystals.remove(exchangeValue);
    setModal(false);
  };

  return (
    <div className={cl.btnsContainer}>
     <ExchangeTitle />
      <ExchangeButtons exchangeValue={exchangeValue} setExchangeValue={setExchangeValue}/>
      <div className={cl.consume}>
        <h3>Consume: </h3>
        <img alt="crystal icon" src={crystalIcon} />
        <span>{exchangeValue}</span>
      </div>
      <ModalConfirmBtns setModal={setModal} confirm={confirmValue} />
    </div>
  );
};

export default Exchange;
