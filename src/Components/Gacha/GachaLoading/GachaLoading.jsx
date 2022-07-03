import React from "react";
import Loader from "../../UI/Loader/Loader";
import cl from './GachaLoading.module.css'
const GachaLoading = () => {
    return(
        <div className={cl.loading}>
        <Loader />
      </div>
    )
}

export default GachaLoading;