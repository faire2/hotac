import React, {useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import ActionsCarousel from "./ActionsCarousel";
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

    return (
        <div>
            <div className="row">
                <div className="col-5"><h2>Squadron designation:</h2></div>
                <div className="col-5"><h3><Select options={squadNames}/></h3></div>
            </div>
            <div className="row">
                <div className="col-8">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}/>

                    <h2>Ship actions:</h2>
                    <ActionsCarousel aiEngine={aiEngine} shipType={shipType} position={targetPosition}
                                     randNum={randNum} stressed={stressed} setAiEngine={setAiEngine}
                                     handleStress={handleStress}/>
                </div>
                <div className="col-4">
                    <TargetPosition shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                    handleShipRemoval={props.handleShipRemoval} squadId={props.squadId}
                                    aiEngine={aiEngine} stressed={stressed}/>
                </div>
            </div>
        </div>
    )
}