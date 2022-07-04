import React from "react";
import cl from './GachaTempModal.module.css'
const GachaModal = ({setModal, modal, children}) => {

    const modalClasses = [cl.modal]
    if(modal){
      modalClasses.push(cl.active)
    }
    return (
      <div onClick={() => setModal(false)} className={modalClasses.join(' ')}>
        <div onClick={(e)=> e.stopPropagation()} className={cl.modal_content}>{children}</div>
      </div>
    );
}
export default GachaModal;