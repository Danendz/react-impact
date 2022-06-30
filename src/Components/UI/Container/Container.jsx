import React from "react";
import cl from './Container.module.css'
const Container = ({children, style, className}) => {
    return(
        <div style={style} className={[cl.container, cl[className]].join(' ')}>
            {children}
        </div>
    )
}

export default Container;