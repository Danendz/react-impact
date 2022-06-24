import React, { useEffect, useRef, useState } from "react";
import cl from "./CharacterInfo.module.css";
import Loader from "../UI/Loader/Loader";
import Constelattions from "./Constellations/Constellations";

const CharacterInfo = ({ isLoading, characterData }) => {
  const [bgColor, setBgColor] = useState("");
  const [vision, setVision] = useState("");
  const visionImage = useRef();
  useEffect(() => {
    const getNameBgColor = () => {
      const visions = {
        Cryo: "https://muakasan.github.io/genshin-portraits/assets/cryo.png",
        Geo: "https://muakasan.github.io/genshin-portraits/assets/geo.png",
        Anemo: "https://muakasan.github.io/genshin-portraits/assets/anemo.png",
        Electro:
          "https://muakasan.github.io/genshin-portraits/assets/electro.png",
        Pyro: "https://muakasan.github.io/genshin-portraits/assets/pyro.png",
        Hydro: "https://muakasan.github.io/genshin-portraits/assets/hydro.png",
      };
      const colors = {
        Cryo: "rgba(52, 152, 219, 0.6)",
        Geo: "rgba(243, 157, 18, 0.6)",
        Anemo: "rgba(46, 204, 112, 0.6)",
        Electro: "rgba(156, 89, 182, 0.6)",
        Pyro: "rgba(231, 77, 60, 0.6)",
        Hydro: "rgba(41, 127, 185, 0.6)",
      };
      setBgColor(
        characterData["vision"] ? colors[characterData["vision"]] : "black"
      );
      setVision(
        characterData["vision"] ? visions[characterData["vision"]] : "#"
      );
    };
    getNameBgColor();
  }, [characterData, vision]);

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
      <div className={cl.content}>
        <p style={{ backgroundColor: bgColor }} className={cl.name}>
          <img
            ref={visionImage}
            className={cl.img}
            src={vision}
            alt="vision pic"
          />{" "}
          {characterData["name"]}
        </p>

        <div className={cl.const}>
          <Constelattions
            bgColor={bgColor}
            consts={characterData["constellations"]}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
