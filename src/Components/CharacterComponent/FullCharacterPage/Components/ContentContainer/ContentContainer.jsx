import React, { useState } from "react";
import cl from "./ContentContainer.module.css";

const ContentContainer = ({ bgColor, title, children }) => {
  const [open, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={cl.contentContainer}>
        <h2
          onClick={() => toggleContent()}
          style={{ borderBottom: `2px solid ${bgColor.nameColor}` }}
        >
          {title}
          <i
            style={{ marginLeft: "10px", fontSize: "30px" }}
            className={
              open ? "fa-solid fa-angle-up" : "fa-solid fa-chevron-down"
            }
          ></i>
        </h2>
        <div className={open ? [cl.content, cl.opened].join(" ") : cl.content}>
          {children}
        </div>
      </div>
    </>
  );
};

export default ContentContainer;
