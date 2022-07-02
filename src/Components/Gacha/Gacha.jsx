import React, { useCallback, useEffect, useRef, useState } from "react";
import backgroundVid from "../../Videos/backgroundCropped.mp4";
import backgroundHolder from "../../images/backgroundHolder.png";
import cl from "./Gacha.module.css";
import GachaContent from "./GachaContent/GachaContent";

import wish3Star1 from "../../Videos/3star1comp.mp4";
import wish4Star1 from "../../Videos/4star1comp.mp4";
import wish4Star10 from "../../Videos/4star10comp.mp4";
import wish5Star1 from "../../Videos/5star1comp.mp4";
import wish5Star10 from "../../Videos/5star10comp.mp4";
import { useFetching } from "../../hooks/useFetching";
import CharacterService from "../API/CharacterService";
import Loader from "../UI/Loader/Loader";

const Gacha = () => {
  const [video, setVideo] = useState(backgroundVid);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isGaching, setIsGaching] = useState(false);
  const [videoType, setVideoType] = useState("bg");
  const [isWishAnimationEnded, setIsWishAnimationEnded] = useState(false);
  const [isSkipVisible, setIsSkipVisible] = useState(false);
  const [downloadedVids, setDownloadedVids] = useState([]);
  const videoRef = useRef();

  const wishVids = [
    backgroundVid,
    wish3Star1,
    wish4Star1,
    wish4Star10,
    wish5Star1,
    wish5Star10,
  ];

  const [fetchVideos, isLoading] = useFetching(async () => {
    const downVids = []
    for (let i = 0; i < wishVids.length; i++) {
      const vid = await CharacterService.getVideo(wishVids[i])
      downVids.push(vid)
    }
    setDownloadedVids(downVids)
  });

  useEffect(() => {
    fetchVideos();
  }, []);

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
    setIsLoaded(false);
    videoRef.current?.load();
    videoRef.current.volume = 0.3;
    videoRef.current.addEventListener("loadeddata", (e) => {
      setIsLoaded(true);
    });
  }, [video]);

  useEffect(() => {
    if (isWishAnimationEnded) {
      setVideoType("bg");
      changeVideo();
      setIsWishAnimationEnded(false);
    }
  }, [videoType, isWishAnimationEnded, changeVideo]);

  useEffect(() => {
    if (isWishAnimationEnded) {
    }
  }, [isWishAnimationEnded, isSkipVisible]);

  return (
    <>
      <h1 className={cl.notInLandscape}>
        Пожалуйста перевени свой телефон чтобы все заработало!
      </h1>
      <div className={cl.contentContainer}>
        <Loader
          style={!isLoading ? { display: "none" } : { display: "flex" }}
        />
        <h2
          style={
            !isLoading
              ? { display: "none" }
              : { display: "block", width: "100%", textAlign: "center" }
          }
        >
          В первый раз это занимает некоторое время на загрузку...
        </h2>

        <div style={isLoading ? { display: "none" } : { display: "block" }}>
          <button
            onClick={() => {
              setIsSkipVisible(false);
              setIsWishAnimationEnded(true);
            }}
            className={cl.skipBtn}
            style={isSkipVisible ? { display: "block" } : { display: "none" }}
          >
            Skip
          </button>
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
          <GachaContent
            isWishAnimationEnded={isWishAnimationEnded}
            setVideoType={setVideoType}
            isGaching={isGaching}
            setIsGaching={setIsGaching}
          />
        </div>
      </div>
    </>
  );
};

export default Gacha;
