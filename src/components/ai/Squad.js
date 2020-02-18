import React, {useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import SquadActionsCarousel from "./SquadActionsCarousel";
import {TargetPosition} from "./TargetPosition";

export function Squad(props) {
    const shipType = props.shipType;
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [randNum, setRandnum] = useState(1);
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
        setRandnum(Math.floor(Math.random() * 6));
        setTargetPosition(position);
    }

    function handleStress(e) {
        setStressed(!stressed);
    }

    function handleSetAi(ai) {
        setTargetPosition(PSN.R1FRONT);
        setStressed(false);
        setAiEngine(ai);
    }

    return (
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
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}
                                    handleShipRemoval={props.handleShipRemoval}/>

                    <SquadActionsCarousel aiEngine={aiEngine} shipType={shipType} />
                </div>
                <div className="col-4">
                    <TargetPosition shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                    setAiEngine={handleSetAi} handleStress={handleStress}
                                    squadId={props.squadId} aiEngine={aiEngine} stressed={stressed} randNum={randNum}
                                    position={targetPosition}/>
                </div>
            </div>
        </div>
    )
}