import React from "react";
import PageWithButtonsMain from '../PageWithButtons/PageWithButtonsMain'
import DescriptionPage from "../DescriptionPage/DescriptionPage";

const PagesHolder = ({characterData, bgColor}) => {
    return(
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
        </>
    )
}

export default PagesHolder;