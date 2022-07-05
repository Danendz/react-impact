import React, {useState} from "react";
import GachaModal from "../../../UI/GachaModal/GachaModal";
import GachaShopContent from "./GachaShopContent/GachaShopContent";
import cl from "./GachaShop.module.css";

const GachaShop = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <GachaModal modal={modal} setModal={setModal}>
        <GachaShopContent />
      </GachaModal>
      <div className={cl.gachaShop}>
        <button onClick={()=> setModal(true)}>Shop</button>
      </div>
    </>
  );
};

export default GachaShop;
