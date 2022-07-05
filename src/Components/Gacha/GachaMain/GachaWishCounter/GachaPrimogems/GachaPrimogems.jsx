import React, { useEffect, useState } from "react";
import GachaModal from "../../../../UI/GachaModal/GachaModal";
import { Primogems } from "../../../GachaCore/GachaСurrencies.ts";
import primogem from "../../images/wish_Primogem.png";
import Exchange from "./Excchange/Exchange";
import cl from "./GachaPrimogems.module.css";

const GachaPrimogems = ({
  isGaching,
  primogems,
  setPrimogems,
  setCrystals,
  crystals,
}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setPrimogems(primogems);
  }, [primogems]);

  return (
    <>
      <GachaModal setModal={setModal} modal={modal}>
        <Exchange
          crystals={crystals}
          setCrystals={setCrystals}
          modal={modal}
          setModal={setModal}
          setPrimogems={setPrimogems}
          primogems={primogems}
        />
      </GachaModal>
      <div className={cl.primogems} onClick={() => setModal(true)}>
        <img className={cl.primogemIcon} alt="wish" src={primogem} />
        <span>{primogems}</span>
      </div>
    </>
  );
};
export default GachaPrimogems;
