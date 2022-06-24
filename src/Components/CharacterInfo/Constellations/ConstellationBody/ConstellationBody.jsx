import React from "react";
import cl from './ConstellationBody.module.css';
const ConstellationBody = ({constellation, bgColor}) =>{
    if (!constellation){
        return(
            <div></div>
        )
    }
    const cutDescription = () => {
        const descriptionStr = constellation['description']
        return descriptionStr.slice(0, 170) + "..."
    }
    return(
        <div className={cl.const}>
            <div  style={{backgroundColor: bgColor}} className={cl.content}>
            <h2>{constellation['name']}</h2>
            {constellation['description'].length <= 120 
            ? <p>{constellation['description']}</p>
            : <p>{cutDescription()}</p>
            }
            </div>
        </div>
    )
}

export default ConstellationBody;