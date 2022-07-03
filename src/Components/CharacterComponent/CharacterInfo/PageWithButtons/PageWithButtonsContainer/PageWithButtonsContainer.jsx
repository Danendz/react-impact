import React, { useEffect, useState } from "react";
import ModalButtons from "../../../../UI/ModalButtons/ModalButtons";
import ConstellationBody from "./PageWithButtonsBody/PageWithButtonsBody";
import '../../style/info.css';

const PageWithButtonsContainer = ({ data, bgColor }) => {
  const [currentBody, setCurrentBody] = useState(1);

  useEffect(()=>{
    setCurrentBody(1)
  },[data])

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="btns-container">
      <div className="btns-content">
        {data.map((_, index) => (
          <ModalButtons
            key={index}
            setCurrentBody={setCurrentBody}
            bgColor={bgColor}
            id={index + 1}
          />
        ))}
      </div>
      
      <ConstellationBody
        bgColor={bgColor}
        data={data[currentBody - 1]}
      />
    </div>
  );
};
export default PageWithButtonsContainer;
