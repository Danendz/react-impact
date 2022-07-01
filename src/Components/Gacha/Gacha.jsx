import React, { useEffect, useRef, useState } from "react";
import backgroundVid from "../../Videos/backgroundCropped.mp4";
import cl from "./Gacha.module.css";

import GachaContent from "./GachaContent/GachaContent";

const Gacha = () => {
  const [video, setVideo] = useState(backgroundVid);

  const videoRef = useRef(); /* 
    const changeVideo = ()=>{
        setVideo(video === video1 ? video2 : video1)
    } */
  useEffect(() => {
    videoRef.current?.load();
  }, [video]);

  return (
    <div className={cl.contentContainer}>
      {/* <button onClick={() => changeVideo()}>Change video</button> */}

      <video className={cl.gachaBackground} ref={videoRef} muted autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <GachaContent />
    </div>
  );
};

export default Gacha;
