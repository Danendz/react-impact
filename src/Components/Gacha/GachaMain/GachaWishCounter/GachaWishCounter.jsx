import React, { useState } from "react";
import cl from './GachaWishCounter.module.css'
import eventWish from './images/eventWish.webp'
import primogem from './images/wish_Primogem.png'
import PrimogemsCounter from '../../GachaCore/GachaPrimogems.ts'

const GachaWishCounter = ({isGaching}) => {
    const [primogems, setPrimogems]  = useState(1600)

    const addPrimogems = () => {
        PrimogemsCounter.addPrimogems(1600)
        setPrimogems(PrimogemsCounter.getPrimogems())
    }

    return(
        <div style={isGaching ? {display: 'none'} : {display: 'flex'}} className={cl.wishCounterContainer}>
            <div className={cl.primogems} onClick={() => addPrimogems()}>
                <img className={cl.wishIcon} alt='wish' src={primogem} />
                <span>{primogems}</span>
            </div>
            <div className={cl.wishes}>
                <img style={{marginRight: '10px'}} className={cl.wishIcon} alt='wish' src={eventWish} />
                <span>2</span>
            </div>
        </div>
    )
}

export default GachaWishCounter;