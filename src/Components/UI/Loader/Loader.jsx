import React from 'react';
import cl from './Loader.module.css';

const Loader = (props) =>{
    return(
        <div {...props} className={cl.lds_ring}><div></div><div></div><div></div><div></div></div>
    )
}
export default Loader;