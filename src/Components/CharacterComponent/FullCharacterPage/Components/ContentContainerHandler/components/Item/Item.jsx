import React, { useState } from "react";
import cl from "./Item.module.css";
const Item = ({ name, description, index, bgColor }) => {
  const [open, setOpen] = useState(false);

  const toggleDescription = () => {
    setOpen(!open);
  };

  return (
    <p
      className={[cl.item, cl.consts].join(" ")}
      key={name}
      style={{ backgroundColor: bgColor.nameColor }}
    >
      <span
        onClick={() => toggleDescription()}
        className={cl.title}
      >
        {index + 1}. {name}:
      </span>
      <span
        className={
          open ? [cl.description, cl.opened].join(" ") : cl.description
        }
      >
        {description}
      </span>
    </p>
  );
};
export default Item;
