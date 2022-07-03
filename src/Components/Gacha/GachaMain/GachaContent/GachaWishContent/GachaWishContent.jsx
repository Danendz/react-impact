import React from "react";
import cl from "./GachaWishContent.module.css";
import Container from "../../../../UI/Container/Container";

const GachaWishContent = ({ visibleWishContent, wishItems, setIsGaching }) => {
  const getBackgroundColor = (rarity) => {
    switch (rarity) {
      case 3:
        return "#3498db";
      case 4:
        return "#9b59b6";
      case 5:
        return "#f1c40f";
      default:
        return "#2ecc71";
    }
  };
  return (
    <div
      style={
        visibleWishContent
          ? { display: "flex", color: "black" }
          : { display: "none" }
      }
      className={cl.wishContent}
    >
      <Container className={"wishContent"}>
        {wishItems.map(({ icon, data }, index) => (
          <div
            style={{ backgroundColor: getBackgroundColor(data.rarity) }}
            className={cl.item}
            key={index}
          >
            <img className={cl.wishImg} src={icon} alt="wishIcon" />
            <p>{data.name}</p>
          </div>
        ))}
      </Container>
      <button className={cl.backBtn} onClick={() => setIsGaching(false)}>
        Назад
      </button>
    </div>
  );
};

export default GachaWishContent;
