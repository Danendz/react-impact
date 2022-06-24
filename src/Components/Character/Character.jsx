import React from "react";
import cl from './Character.module.css';
const Character = ({name, icon, openModal}) => {
  return (
    <div onClick={()=> openModal(name)} className={cl.character}>
      <img alt="character icon" className={cl.character_icon} src={icon} />
      <span className={cl.character_name}>{name}</span>
    </div>
  );
};

export default Character;
