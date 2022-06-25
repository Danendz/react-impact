import React, { useEffect, useState } from "react";
import cl from "./CharacterInfo.module.css";
import Loader from "../UI/Loader/Loader";
import './style/info.css';
import ConstelattionsPage from "./ConstellationsPage/ConstellationsPage";

const CharacterInfo = ({ isLoading, characterData }) => {
  const [bgColor, setBgColor] = useState({
    contentColor: "black",
    nameColor: "black",
    boxShadowColor: "black",
    buttonsBgColor: "black",
  });
  const [vision, setVision] = useState("");

  const getColorWithAlpha = (color, alpha) => {
    return `rgba(${color}, ${alpha})`;
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
        <ConstelattionsPage
          characterData={characterData}
          bgColor={bgColor}
        />
      </div>
    </div>
  );
};

export default CharacterInfo;
