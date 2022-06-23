import React from "react";

const Constelattions = ({ consts }) => {
    if(!consts){
        return(
            <div></div>
        )
    }
  return (
    <div>
      {consts.map((constellation, index) => (
        <ul key={index + 1}>
            <li>
                Constellation number: {constellation['unlock']}
            </li>
            <li>
                Constellation name: {constellation['name']}
            </li>
        </ul>
        
      ))}
    </div>
  );
};
export default Constelattions;