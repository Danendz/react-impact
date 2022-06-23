import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, modal, setModal }) => {
  const modalClasses = [cl.modal]
  if(modal){
    modalClasses.push(cl.active)
  }
  return (
    <div onClick={() => setModal(false)} className={modalClasses.join(' ')}>
      <div onClick={(e)=> e.stopPropagation()} className={cl.modal_content}>{children}</div>
    </div>
  );
};

export default Modal;
