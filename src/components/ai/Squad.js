import React, {useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import {TargetPosition} from "./TargetPosition";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import ActionsCarousel from "./ActionsCarousel";

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
                <div className="col-6">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}/>

                    <h2>Ship actions:</h2>
                    <ActionsCarousel aiEngine={aiEngine} shipType={shipType} position={targetPosition}
                                     randNum={randNum} stressed={stressed} setAiEngine={setAiEngine}
                                     handleStress={handleStress}/>


                </div>
                <div className="col-5 position-relative">
                    <TargetPosition shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                    handleShipRemoval={props.handleShipRemoval} squadId={props.squadId}
                                    aiEngine={aiEngine} stressed={stressed}/>
                </div>

            </div>

            <svg width="500px" height="800px">
                {/*<rect x="0" y="0" width="50px" height="200px" fill="#80aaed"/>
                <rect x="" y="200" width="50px" height="200px" fill="#568ce3"/>
                <rect x="" y="400" width="50px" height="200px" fill="#285fb8"/>*/}
                {/*<g transform="translate(200,100)" stroke="#000" stroke-width="2">
                    <path d="M0 0-70 70A99 99 0 0 1-70-70Z" fill="#f00"/>
                    <path d="M0 0-70-70A99 99 0 0 1 70-70Z" fill="#080"/>
                    <path d="M0 0 70-70A99 99 0 0 1 70 70Z" fill="#dd0"/>
                    <path d="M0 0 70 70A99 99 0 0 1-70 70Z" fill="#04e"/>
                </g>
                <path d="M0 0 L-700 -700" stroke="#000" stroke-width="2"/>*/}


            </svg>
        </div>
    )
}