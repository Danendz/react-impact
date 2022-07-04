import React, { useEffect, useState } from "react";
import GachaModal from "../../../../UI/GachaModal/GachaModal";
import { Primogems } from "../../../GachaCore/GachaСurrencies.ts";
import primogem from "../../images/wish_Primogem.png";
import Exchange from "./Excchange/Exchange";
import cl from "./GachaPrimogems.module.css";

const GachaPrimogems = ({ isGaching }) => {
  const [primogems, setPrimogems] = useState(0);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setPrimogems(Primogems.get());
  }, [isGaching]);

/*   useEffect(()=> {
    setModal(false)
  }, [primogems])
 */
  return (
    <>
      <GachaModal setModal={setModal} modal={modal}>
        <Exchange modal={modal} setModal={setModal} setPrimogems={setPrimogems} />
      </GachaModal>
      <div className={cl.primogems} onClick={() => setModal(true)}>
        <img className={cl.primogemIcon} alt="wish" src={primogem} />
        <span>{primogems}</span>
      </div>
    </>
  );
};
export default GachaPrimogems;
