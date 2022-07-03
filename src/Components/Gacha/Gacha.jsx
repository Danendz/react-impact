import React, { useEffect } from "react";
import backgroundVid from "../../Videos/backgroundCropped.mp4";
import cl from "./Gacha.module.css";
import Loader from "../UI/Loader/Loader";

import wish3Star1 from "../../Videos/3star1comp.mp4";
import wish4Star1 from "../../Videos/4star1comp.mp4";
import wish4Star10 from "../../Videos/4star10comp.mp4";
import wish5Star1 from "../../Videos/5star1comp.mp4";
import wish5Star10 from "../../Videos/5star10comp.mp4";

import { useDownloadMedia } from "../../hooks/useDownloadMedia";
import GachaMain from "./GachaMain/GachaMain";

const Gacha = () => {
  const wishVids = [
    backgroundVid,
    wish3Star1,
    wish4Star1,
    wish4Star10,
    wish5Star1,
    wish5Star10,
  ];

  const [fetchVideos, isLoading, downloadedVids] = useDownloadMedia(wishVids);

  useEffect(() => {
    fetchVideos();
  }, []);

  if (isLoading) {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Loader />
        <h2 style={{ display: "block", width: "100%", textAlign: "center" }}>
          В первый раз это занимает некоторое время на загрузку...
        </h2>
      </div>
    );
  }

  return (
    <>
      <h1 className={cl.notInLandscape}>
        Пожалуйста перевени свой телефон чтобы все заработало!
      </h1>
      <GachaMain downloadedVids={downloadedVids} />
    </>
  );
};

export default Gacha;
