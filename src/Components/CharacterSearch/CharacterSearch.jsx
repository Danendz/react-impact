import React from "react";
import cl from './CharacterSearch.module.css';


const CharacterSearch = (props) => {
    return(
        <div className={cl.characterSearch}>
            <input {...props} className={cl.input} type="text" placeholder="Введите имя персонажа" />
        </div>
    )
}

export default CharacterSearch;