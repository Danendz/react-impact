import React, {useState, useEffect, useRef} from "react";
import cl from "./GachaContent.module.css";
import eventCharacter from "../../../images/eventCharacterBanner.png";
import eventCharacterWeapon from "../../../images/eventCharacterWeapon.png";
import standartBanner from "../../../images/standartBanner.png";
import GachaButtons from ".././GachaButtons/GachaButtons";


const GachaContent = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const images = [eventCharacter, eventCharacterWeapon, standartBanner];
  const bannerRef = useRef();

  const [banner, setBanner] = useState(0);
  useEffect(() => {
    bannerRef.current.style.transition = ".2s";
    bannerRef.current.style.opacity = 0;
    setTimeout(() => {
      bannerRef.current.src = images[banner];
      setIsAnimating(true);
    }, 200);
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
    <div className={cl.content}>
      <div className={cl.banners}>
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
        <div className={cl.wishBtns}>
          <button>Использовать 1</button>
          <button>Использовать 10</button>
        </div>
      </div>
    </div>
  );
};
export default GachaContent;
