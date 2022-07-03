import React, {useState, useRef, useEffect} from "react";
import backgroundHolder from "../../../../images/backgroundHolder.png";
import cl from './GachaVideo.module.css'


const GachaVideo = ({ video, setIsWishAnimationEnded, isGaching }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef();

  useEffect(() => {
    setIsLoaded(false);
    videoRef.current?.load();
    videoRef.current.volume = 0.3;
    videoRef.current.addEventListener("loadeddata", (e) => {
      setIsLoaded(true);
    });
  }, [video]);

  return (
    <>
      <img
        className={cl.gachaBackground}
        style={isLoaded ? { display: "none" } : { display: "block" }}
        src={backgroundHolder}
        alt="bg"
      />
      <video
        onEnded={() => setIsWishAnimationEnded(true)}
        style={!isLoaded ? { display: "none" } : { display: "block" }}
        className={cl.gachaBackground}
        ref={videoRef}
        autoPlay
        loop={isGaching ? false : true}
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
};

export default GachaVideo;
