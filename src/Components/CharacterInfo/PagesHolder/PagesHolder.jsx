import React from "react";
import PageWithButtonsMain from "../PageWithButtons/PageWithButtonsMain";
import DescriptionPage from "../DescriptionPage/DescriptionPage";
import { Link } from "react-router-dom";

const PagesHolder = ({ characterData, bgColor }) => {
  return (
    <>
      <DescriptionPage
        title={"Description"}
        description={characterData.description}
        bgColor={bgColor}
      />
      <PageWithButtonsMain
        title={"Constellations"}
        data={characterData.constellations}
        bgColor={bgColor}
      />
      <PageWithButtonsMain
        title={"Passive Talents"}
        data={characterData.passiveTalents}
        bgColor={bgColor}
      />
      <PageWithButtonsMain
        title={"Skill Talents"}
        data={characterData.skillTalents}
        bgColor={bgColor}
      />
      <DescriptionPage
        title={"Show more"}
        description={"If you want see more information click here"}
        bgColor={bgColor}
      >
        <Link to={"/characters/" + characterData.trueName}>
          <button style={{ backgroundColor: bgColor.buttonsBgColor }}>
            Show more
          </button>
        </Link>
      </DescriptionPage>
    </>
  );
};

export default PagesHolder;
