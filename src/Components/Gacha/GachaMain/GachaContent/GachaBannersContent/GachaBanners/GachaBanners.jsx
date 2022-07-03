import React, { useEffect, useState, useRef } from "react";
import cl from "./GachaBanners.module.css";
import GachaCore from "../../../../GachaCore/GachaCore.ts";
import GachaButtons from "./GachaButtons/GachaButtons";

const GachaBanners = ({ images, isLoading }) => {
  const bannerRef = useRef();
  const [banner, setBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const bannerTypes = ["event", "standart", "standart"];

  useEffect(() => {
    if (images.length > 0) {
      GachaCore.setBannerType(bannerTypes[banner]);
      bannerRef.current.style.transition = ".2s";
      bannerRef.current.style.opacity = 0;
      setTimeout(() => {
        bannerRef.current.src = images[banner];
        setIsAnimating(true);
      }, 200);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [banner]);

  useEffect(() => {
    if (isAnimating) {
      bannerRef.current.style.transition = ".3s";
      bannerRef.current.style.opacity = 1;
      setIsAnimating(false);
    }
  }, [isAnimating]);

  return (
    <>
      <div className={cl.bannersBtns}>
        {images.map((src, index) => (
          <GachaButtons
            key={src}
            banner={banner}
            src={src}
            id={index}
            setBanner={setBanner}
          />
        ))}
      </div>
      <img className={cl.bannerImage} ref={bannerRef} src="" alt="banner" />
    </>
  );
};

export default GachaBanners;
