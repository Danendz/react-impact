import React, { useState, useEffect, useCallback } from "react";
import GachaContent from "./GachaContent/GachaContent";
import cl from "./GachaMain.module.css";
import GachaVideo from "./GachaVideo/GachaVideo";
import GachaWishCounter from "./GachaWishCounter/GachaWishCounter";

const GachaMain = ({ downloadedVids }) => {
  const [video, setVideo] = useState(downloadedVids[0]);
  const [videoType, setVideoType] = useState("bg");
  const [isGaching, setIsGaching] = useState(false);
  const [isWishAnimationEnded, setIsWishAnimationEnded] = useState(false);

  const changeVideo = useCallback(() => {
    const videos = {
      bg: downloadedVids[0],
      wish3Star1: downloadedVids[1],
      wish4Star1: downloadedVids[2],
      wish4Star10: downloadedVids[3],
      wish5Star1: downloadedVids[4],
      wish5Star10: downloadedVids[5],
    };
    setVideo(videos[videoType]);
  }, [videoType, downloadedVids]);

  useEffect(() => {
    if (isGaching) {
      changeVideo();
    } else {
      setVideoType("bg");
    }
  }, [isGaching, changeVideo]);

  useEffect(() => {
    if (isWishAnimationEnded) {
      setVideoType("bg");
      changeVideo();
      setIsWishAnimationEnded(false);
    }
  }, [videoType, isWishAnimationEnded, changeVideo]);

  return (
    <div className={cl.contentContainer}>
      <div style={{positin: 'relative'}}>
        <GachaVideo
          video={video}
          isGaching={isGaching}
          setIsWishAnimationEnded={setIsWishAnimationEnded}
        />
        <GachaContent
          isWishAnimationEnded={isWishAnimationEnded}
          setVideoType={setVideoType}
          isGaching={isGaching}
          setIsGaching={setIsGaching}
        />
        <GachaWishCounter
          isGaching={isGaching}
        />
      </div>
    </div>
  );
};

export default GachaMain;
