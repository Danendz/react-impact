import React from "react";
import TalentsItem from "../UI/TalentsItem/TalentsItem";
import Widget from "../Widget/Widget";

const FarmingTalentsTodayWidget = ({title, farmTalents, className}) => {


    return(
        <Widget title={title} className={className}>
            {farmTalents.map(({name, iconUrl}) =>(
                <TalentsItem key={name} name={name} icon={iconUrl} />
            ))}
        </Widget>
    )
}

export default FarmingTalentsTodayWidget;