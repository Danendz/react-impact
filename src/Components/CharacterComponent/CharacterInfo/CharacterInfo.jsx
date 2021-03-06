import React, { useEffect, useReducer, useRef, useState } from "react";
import PagesHolder from "./PagesHolder/PagesHolder";
import cl from "./CharacterInfo.module.css";
import VisionHelper from "../../Helpers/VisionHelper";
import Loader from "../../UI/Loader/Loader";
import "./style/info.css";

const CharacterInfo = ({ characterData, modal }) => {
  const [bgColor, setBgColor] = useState({
    contentColor: "black",
    nameColor: "black",
    boxShadowColor: "black",
    buttonsBgColor: "black",
  });
  const [vision, setVision] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const backImage = useRef();
  const pagesContainer = useRef();

  const reducer = (id, action) => {
    switch (action.type) {
      case "next":
        if (id.currentId + 1 <= pagesContainer.current.children.length - 1) {
          return { ...id, lastId: id.currentId, currentId: id.currentId + 1 };
        } else {
          return { ...id };
        }
      case "prev":
        if (id.currentId - 1 >= 0) {
          return { ...id, lastId: id.currentId, currentId: id.currentId - 1 };
        } else {
          return { ...id };
        }
      case "reset":
        return { ...id, lastId: id.currentId, currentId: 0 };
      default:
        return id;
    }
  };
  const [id, dispatch] = useReducer(reducer, {
    lastId: 0,
    currentId: 0,
  });

  useEffect(() => {
    if (pagesContainer) {
      const pagesArr = pagesContainer.current.children;
      pagesArr[id.lastId].style.display = "none";
      pagesArr[id.currentId].style.display = "block";
    }
  }, [id]);

  useEffect(() => {
    dispatch({ type: "reset" });
  }, [modal]);

  useEffect(() => {
    const [
      icon,
      nameBgColor,
      contentBgColor,
      boxShadowBgColor,
      buttonsBgColor,
    ] = VisionHelper.getAllVisionStats(
      characterData["vision"],
      0.6,
      0.1,
      0.5,
      0.7
    );

    setBgColor({
      contentColor: contentBgColor,
      nameColor: nameBgColor,
      boxShadowColor: boxShadowBgColor,
      buttonsBgColor: buttonsBgColor,
    });
    setVision(icon)
  }, [characterData]);


  useEffect(() => {
    setIsLoaded(false);
    const img = new Image();
    const imgError = new Image();
    function onImageLoad() {
      setIsLoaded(true);
    }
    function imgErrorHandler() {
      backImage.current.style.backgroundImage = `url(${characterData["gacha-splash"]})`;

      imgError.src = characterData["gacha-splash"];
      imgError.addEventListener("load", onImageLoad);
    }

    img.src = characterData["card"];
    img.addEventListener("load", onImageLoad);
    img.addEventListener("error", imgErrorHandler);
    return () => {
      img.removeEventListener("load", onImageLoad);
      img.removeEventListener("error", imgErrorHandler);
      imgError.removeEventListener("load", onImageLoad);
    };
  }, [characterData]);

  return (
    <>
      <Loader style={isLoaded ? { display: "none" } : { display: "flex" }} />

      <div
        ref={backImage}
        style={
          isLoaded
            ? {
                display: "flex",
                backgroundImage: `url(${characterData["card"]})`,
              }
            : {
                display: "none",
                backgroundImage: `url(${characterData["card"]})`,
              }
        }
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

          <div>
            <div ref={pagesContainer}>
              <PagesHolder characterData={characterData} bgColor={bgColor} />
            </div>
            <button
              style={{ backgroundColor: bgColor.buttonsBgColor }}
              className={cl.btnLeft}
              onClick={() => dispatch({ type: "prev" })}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: bgColor.buttonsBgColor }}
              className={cl.btnRight}
              onClick={() => dispatch({ type: "next" })}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterInfo;
