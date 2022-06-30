import React from "react";
import cl from './TalentsItem.module.css'
const TalentsItem = ({name, icon}) => {
    return(
        <div className={cl.container}>
            <img src={icon} alt="talent icon" />
            <div className={cl.name}>
            <p>{name}</p>
            </div>
        </div>
    )
}

export default TalentsItem;