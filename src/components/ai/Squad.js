import React, {useContext, useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./variables/ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import SquadActionsCarousel from "./actionsCarousel/SquadActionsCarousel";
import {TargetPosition} from "./maneuvers/TargetPosition";
import UpgradesCard from "./upgrades/UpgradesCard";
import {GlobalSquadsValuesContext, TargetPositionContext} from "../../context/Contexts";

export function Squad(props) {
    const shipType = props.shipType;
    const globalSquadValues = useContext(GlobalSquadsValuesContext);
    const upgrades = [...globalSquadValues.upgrades[props.squadId]];

    /* TARGET POSITION STATE */
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [maneuverRandNum, setManeuverRandnum] = useState(1);
    const [aiEngine, setAiEngine] = useState(AI.FGA);
    const [stressed, setStressed] = useState(false);

    const squadNames = [
        {value: "Alpha", label: "Alpha"},
        {value: "Beta", label: "Beta"},
        {value: "Gamma", label: "Gamma"},
        {value: "Delta", label: "Delta"},
        {value: "Epsilon", label: "Epsilon"},
        {value: "Omega", label: "Omega"},
    ];

    // number is randomized here to ensure that re-render of SquadManeuvres will be triggered
    function handleSetTargetPosition(position) {
        setManeuverRandnum(Math.floor(Math.random() * 6));
        setTargetPosition(position);
    }

    function handleStress() {
        setStressed(!stressed);
    }

    function handleSetAi(ai) {
        setTargetPosition(PSN.R1FRONT);
        setStressed(false);
        setAiEngine(ai);
    }

    return (
        <TargetPositionContext.Provider value={{
            shipType: shipType,
            maneuverRandNum: maneuverRandNum,
            aiEngine: aiEngine,
            setAiEngine: handleSetAi,
            targetPosition: targetPosition,
            setTargetPosition: handleSetTargetPosition,
            stressed: stressed,
            handleStress: handleStress
        }}>
            <div className="squadContainer">
                <div className="row">
                    <div className="col-8">
                        <h3>Ship type: {Ships[shipType][Stats.name]}</h3>
                    </div>
                    <div className="col-4">
                        <Select options={squadNames}
                                defaultValue={{value: "Squadron designation", label: "Squadron designation"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <SquadStats shipType={shipType} upgrades={upgrades}/>
                        <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}
                                        upgrades={upgrades}/>
                        <SquadActionsCarousel aiEngine={aiEngine} shipType={shipType}/>
                        <UpgradesCard upgrades={upgrades} squadId={props.squadId}/>
                    </div>
                    <div className="col-4">
                        <TargetPosition/>
                    </div>
                </div>
            </div>
        </TargetPositionContext.Provider>
    )
}