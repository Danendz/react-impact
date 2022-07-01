import React, { useEffect, useRef, useState } from "react";
import backgroundVid from "../../Videos/backgroundCropped.mp4";
import cl from "./Gacha.module.css";
import GachaContent from "./GachaContent/GachaContent";

const Gacha = () => {
  const [video, setVideo] = useState(backgroundVid);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(); /* 
    const changeVideo = ()=>{
        setVideo(video === video1 ? video2 : video1)
    } */

  useEffect(() => {
    setIsLoaded(false)
    videoRef.current?.load();
    videoRef.current.addEventListener('loadeddata', (e) => {
        setIsLoaded(true)
        console.log('loaded')
    })
  }, [video]);

  return (
    <>
      <h1 className={cl.notInLandscape}>
        Пожалуйста перевени свой телефон чтобы все заработало!
      </h1>
      <div className={cl.contentContainer}>
        {/* <button onClick={() => changeVideo()}>Change video</button> */}
        <video
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
