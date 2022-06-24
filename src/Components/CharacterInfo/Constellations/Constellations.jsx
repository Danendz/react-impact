import React, { useState } from "react";
import Constellation from "./Constellation/Constellation";
import ConstellationBody from "./ConstellationBody/ConstellationBody";
import cl from "./Constellations.module.css";
const Constelattions = ({ consts, bgColor }) => {
  const [currentConst, setCurrentConst] = useState(1);

  if (!consts) {
    return <div></div>;
  }

  return (
    <div className={cl.container}>
      <div className={cl.consts}>
        {consts.map((_, index) => (
          <Constellation
            key={index}
            setCurrentConst={setCurrentConst}
            bgColor={bgColor}
            id={index + 1}
          />
        ))}
      </div>
      <ConstellationBody
        bgColor={bgColor}
        constellation={consts[currentConst - 1]}
      />
    </div>
  );
};
export default Constelattions;
