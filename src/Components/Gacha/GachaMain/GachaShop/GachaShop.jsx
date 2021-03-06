import React, { useState } from "react";
import GachaModal from "../../../UI/GachaModal/GachaModal";
import GachaShopContent from "./GachaShopContent/GachaShopContent";
import cl from "./GachaShop.module.css";

const GachaShop = ({ isGaching, crystals, setCrystals }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <GachaModal
        customClassModal={"menuModal"}
        customClassContent={"menuContent"}
        modal={modal}
        setModal={setModal}
      >
        <GachaShopContent
          modal={modal}
          setModal={setModal}
          crystals={crystals}
          setCrystals={setCrystals}
        />
      </GachaModal>
      <div
        style={isGaching ? { display: "none" } : { display: "block" }}
        className={cl.gachaShop}
      >
        <button onClick={() => setModal(true)}>Shop</button>
      </div>
    </>
  );
};

export default GachaShop;
