import React, { useEffect, useRef, useState } from "react";
import backgroundVid from "../../Videos/backgroundCropped.mp4";
import wish4star10 from "../../Videos/4star10comp.mp4";
import backgroundHolder from "../../images/backgroundHolder.png";
import cl from "./Gacha.module.css";
import GachaContent from "./GachaContent/GachaContent";
import Loader from "../UI/Loader/Loader";

const Gacha = () => {
  const [video, setVideo] = useState(backgroundVid);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();
  const changeVideo = () => {
    setVideo(video === backgroundVid ? wish4star10 : backgroundVid);
  };

  useEffect(() => {
    setIsLoaded(false);
    videoRef.current?.load();
    videoRef.current.addEventListener("loadeddata", (e) => {
      setIsLoaded(true);
      console.log("loaded");
    });
  }, [video]);

  return (
    <>
      <h1 className={cl.notInLandscape}>
        Пожалуйста перевени свой телефон чтобы все заработало!
      </h1>
      <div className={cl.contentContainer}>
        
        <img
          className={cl.gachaBackground}
          style={isLoaded ? { display: "none" } : { display: "block" }}
          src={backgroundHolder}
          alt="bg"
        />
        <video
          style={!isLoaded ? { display: "none" } : { display: "block" }}
          className={cl.gachaBackground}
          ref={videoRef}
          muted
          autoPlay
          loop
        >
          <source src={video} type="video/mp4" />
        </video>
        <GachaContent />
      </div>
    </>
  );
};

export default Gacha;
