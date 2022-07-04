import React from "react";
import GachaPrimogems from "./GachaPrimogems/GachaPrimogems";
import cl from './GachaWishCounter.module.css'
import GachaWishes from "./GachaWishes/GachaWishes";


const GachaWishCounter = ({isGaching}) => {
    return(
        <div style={isGaching ? {display: 'none'} : {display: 'flex'}} className={cl.wishCounterContainer}>
           <GachaPrimogems isGaching={isGaching}/>
           <GachaWishes isGaching={isGaching}/>
        </div>
    )
}

export default GachaWishCounter;