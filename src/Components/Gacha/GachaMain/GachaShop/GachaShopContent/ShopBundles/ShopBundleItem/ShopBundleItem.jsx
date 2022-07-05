import React from "react";
import cl from './ShopBundleItem.module.css'
import genesis from '../../../../images/crystal.webp'
const ShopBundleItem = () => {
    return(
        <div className={cl.item}>
            <div className={cl.bonus}>
                <img src={genesis} alt='genesis crystal' />
                <p className={cl.bonusTitle}>Bonus!</p>
                <p className={cl.bonusValue}>+60</p>
            </div>
            <div className={cl.genesisBig}>
                <img src={genesis} alt="genesis crystal"/>
            </div>
            <div className={cl.genesisValueContainer}>
                <p className={cl.genesisValue}><span>121223</span> Genesis Crystals</p>
            </div>
            <p className={cl.price}>$ 0.99</p>
        </div>
    )
}

export default ShopBundleItem