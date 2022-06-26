import React, { useEffect, useRef, useState } from "react";
import cl from "./CharacterInfo.module.css";
import "./style/info.css";
import ConstelattionsPage from "./ConstellationsPage/ConstellationsPage";

const CharacterInfo = ({ characterData, getVisionImgs }) => {
  const [bgColor, setBgColor] = useState({
    contentColor: "black",
    nameColor: "black",
    boxShadowColor: "black",
    buttonsBgColor: "black",
  });
  const [vision, setVision] = useState("");
  const [id, setId] = useState({
    lastId: 0,
    currentId: 0,
  });

  const pagesContainer = useRef();

  const getColorWithAlpha = async (color, alpha) => {
    return `rgba(${color}, ${alpha})`;
  };

  useEffect(() => {
    if (pagesContainer) {
      const pagesArr = pagesContainer.current.children;
      pagesArr[id.lastId].style.display = "none";
      pagesArr[id.currentId].style.display = "block";
    }
  }, [id]);

  useEffect(() => {
    setId({ currentId: 0, lastId: 0 });
  }, [characterData]);

  const nextPage = () => {
    if (id.currentId + 1 <= pagesContainer.current.children.length - 1) {
      setId({ lastId: id.currentId, currentId: id.currentId + 1 });
    }
  };

  const prevPage = () => {
    if (id.currentId - 1 >= 0) {
      setId({ lastId: id.currentId, currentId: id.currentId - 1 });
    }
  };

  useEffect(() => {
    async function getVisionBgColor() {
      const colors = {
        Cryo: "52, 152, 219",
        Geo: "243, 157, 18",
        Anemo: "46, 204, 112",
        Electro: "156, 89, 182",
        Pyro: "231, 77, 60",
        Hydro: "41, 127, 185",
      };
      const currentVisionColor = colors[characterData["vision"]];

      const nameBgColor = await getColorWithAlpha(currentVisionColor, 0.6);
      const contentBgColor = await getColorWithAlpha(currentVisionColor, 0.1);
      const boxShadowBgColor = await getColorWithAlpha(currentVisionColor, 0.5);
      const buttonsBgColor = await getColorWithAlpha(currentVisionColor, 0.7);

      setBgColor(
        characterData["vision"]
          ? {
              contentColor: contentBgColor,
              nameColor: nameBgColor,
              boxShadowColor: boxShadowBgColor,
              buttonsBgColor: buttonsBgColor,
            }
          : {}
      );
    }
    getVisionBgColor();
  }, [characterData]);

  useEffect(() => {
    const getVisionIcon = async () => {
      setVision(
        characterData["vision"]
          ? await getVisionImgs(characterData["vision"])
          : "#"
      );
    };
    getVisionIcon();
  }, [characterData, getVisionImgs]);

  return (
    <div
      style={{
        backgroundImage: `url(${characterData["card"]})`,
      }}
      className={cl.info}
    >
      <div
        style={{
          backgroundColor: bgColor.contentColor,
          boxShadow: "0px 0px 59px 53px " + bgColor.boxShadowColor + " inset",
        }}
        className={cl.content}
      >
        <p style={{ backgroundColor: bgColor.nameColor }} className={cl.name}>
          <img className={cl.img} src={vision} alt="vision pic" />
          {characterData["name"]}
        </p>

        <div ref={pagesContainer}>
          <ConstelattionsPage
            title={"Constellations"}
            characterData={characterData}
            bgColor={bgColor}
          />
          <ConstelattionsPage
            title={"second"}
            characterData={characterData}
            bgColor={bgColor}
          />
          <button
            style={{ backgroundColor: bgColor.buttonsBgColor }}
            className={cl.btnLeft}
            onClick={() => prevPage()}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: bgColor.buttonsBgColor }}
            className={cl.btnRight}
            onClick={() => nextPage()}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
