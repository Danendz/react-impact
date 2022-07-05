import React from "react";
import cl from './GachaTempModal.module.css'
const GachaTempModal = ({modal, children}) => {
    const modalClasses = [cl.modal]
    if(modal){
      modalClasses.push(cl.active)
    }
    return (
      <div  className={modalClasses.join(' ')}>
        <div ></div>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.44)'}} className={cl.modal_content}>{children}</div>
      </div>
    );
}
export default GachaTempModal;