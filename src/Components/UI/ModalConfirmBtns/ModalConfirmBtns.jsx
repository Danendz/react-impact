import React from "react";
import cl from './ModalConfirmBtns.module.css'
const ModalConfirmBtns = ({ setModal, confirm }) => {
  return (
    <div className={cl.resultBtns}>
      <button onClick={() => setModal(false)} className={cl.confirmBtn}>
        Cancel
      </button>
      <button onClick={() => confirm()} className={cl.confirmBtn}>
        Confirm
      </button>
    </div>
  );
};

export default ModalConfirmBtns;