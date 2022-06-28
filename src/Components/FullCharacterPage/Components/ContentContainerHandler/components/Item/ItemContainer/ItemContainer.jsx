import React from "react";
import ContentContainer from "../../../../ContentContainer/ContentContainer";
import Item from "../Item";

const ItemContainer = ({title, data, bgColor, characterData}) => {
    return(
        <ContentContainer title={title} bgColor={bgColor}>
        {characterData[data].map(({ name, description }, index) => (
          <Item
            key={name}
            name={name}
            description={description}
            index={index}
            bgColor={bgColor}
            
          />
        ))}
      </ContentContainer>
    )
}

export default ItemContainer;