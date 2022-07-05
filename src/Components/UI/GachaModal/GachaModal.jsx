import React from "react";
import cl from "./GachaTempModal.module.css";
const GachaModal = ({
  setModal,
  modal,
  children,
  customClassModal,
  customClassContent,
}) => {
  const modalClasses = [cl.modal];
  if (modal) {
    modalClasses.push(cl.active);
  }
  return (
    <div
      onClick={() => setModal(false)}
      className={`${modalClasses.join(" ")} ${cl[customClassModal]}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={[cl.modal_content, cl[customClassContent]].join(" ")}
      >
        {children}
      </div>
    </div>
  );
};
export default GachaModal;
