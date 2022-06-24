import React from "react";
import cl from './ConstellationBody.module.css';
const ConstellationBody = ({constellation, bgColor}) =>{
    if (!constellation){
        return(
            <div></div>
        )
    }
    return(
        <div className={cl.const}>
            <div  style={{backgroundColor: bgColor}} className={cl.content}>
            <h2>{constellation['name']}</h2>
                <p>{constellation['description']}</p>
            </div>
        </div>
    )
}

export default ConstellationBody;