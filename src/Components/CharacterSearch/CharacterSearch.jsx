import React from "react";
import cl from './CharacterSearch.module.css';

const CharacterSearch = ({query, setQuery}) => {
    return(
        <div className={cl.characterSearch}>
            <input value={query} onChange={(e)=> setQuery(e.target.value)} className={cl.input} type="text" placeholder="Введите имя персонажа" />
        </div>
    )
}

export default CharacterSearch;