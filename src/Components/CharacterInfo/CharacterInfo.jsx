import React, { useEffect, useRef, useState } from "react";
import cl from "./CharacterInfo.module.css";
import Loader from "../UI/Loader/Loader";
import "./style/info.css";
import ConstelattionsPage from "./ConstellationsPage/ConstellationsPage";

const CharacterInfo = ({ isLoading, characterData }) => {
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

  const getColorWithAlpha = (color, alpha) => {
    return `rgba(${color}, ${alpha})`;
  };

  useEffect(() => {
    if (pagesContainer) {
      console.log(id);
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
    function getVisionBgColor() {
      const colors = {
        Cryo: "52, 152, 219",
        Geo: "243, 157, 18",
        Anemo: "46, 204, 112",
        Electro: "156, 89, 182",
        Pyro: "231, 77, 60",
        Hydro: "41, 127, 185",
      };
      const currentVisionColor = colors[characterData["vision"]];

      const nameBgColor = getColorWithAlpha(currentVisionColor, 0.6);
      const contentBgColor = getColorWithAlpha(currentVisionColor, 0.1);
      const boxShadowBgColor = getColorWithAlpha(currentVisionColor, 0.2);
      const buttonsBgColor = getColorWithAlpha(currentVisionColor, 0.7);

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
    const getVisionImgs = () => {
      const visions = {
        Cryo: "https://muakasan.github.io/genshin-portraits/assets/cryo.png",
        Geo: "https://muakasan.github.io/genshin-portraits/assets/geo.png",
        Anemo: "https://muakasan.github.io/genshin-portraits/assets/anemo.png",
        Electro:
          "https://muakasan.github.io/genshin-portraits/assets/electro.png",
        Pyro: "https://muakasan.github.io/genshin-portraits/assets/pyro.png",
        Hydro: "https://muakasan.github.io/genshin-portraits/assets/hydro.png",
      };
      setVision(
        characterData["vision"] ? visions[characterData["vision"]] : "#"
      );
    };
    getVisionImgs();
  }, [characterData]);

  if (isLoading) {
    return (
      <div className={cl.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div
      style={{ backgroundImage: `url(${characterData["card"]})` }}
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
        <button onClick={() => prevPage()}>Prev</button>
        <button onClick={() => nextPage()}>next</button>
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
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
