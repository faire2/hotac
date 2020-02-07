import React, {useState} from "react";

import {AI, PSN, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import {TargetSelection} from "./TargetSelection";
import Select from "react-select";
import SquadManeuver from "./SquadManeuver";
import SquadActions from "./SquadActions";
import SquadTargetSelection from "./SquadTargetSelection";
import SquadAttack from "./SquadAttack";

export function Squad(props) {
    const shipType = props.shipType;
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [randNum, setRandnum] = useState(1);
    const [aiEngine, setAiEngine] = useState(AI.FGA);
    const [stressed, setStressed] = useState(true);

    let aiValues = [];
    for (let ai of Ships[shipType][Stats.ai]) {
        aiValues.push({value: ai, label: ai});
    }

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
        // todo function will check used AI engine - if Hinny is used, it will use R3 templates for R4 positions
        setRandnum(Math.floor(Math.random() * 6));
        setTargetPosition(position);
    }
    // todo doesnt work
    function handleStress(e) {
        console.log("Incoming: " + (e.target.value));
        console.log((!e.target.value));
        setStressed(!e.target.value)
    }

    function handleCheck() {
        console.log("State: " + stressed);
        return stressed
    }

    return (
        <div>`
            <div className="row">
                <div className="col-5"><h2>Squadron designation:</h2></div>
                <div className="col-5"><h3><Select options={squadNames}/></h3></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}/>

                    <h2>Select target:</h2>
                    <SquadTargetSelection shipType={shipType} aiEngine={aiEngine}/>

                    <h2>Perform maneuver:</h2>
                    <span>
                    <Select options={aiValues} defaultValue={{label: aiEngine, value: aiEngine}}
                            onChange={e => setAiEngine(e.value)}/>
                    <label>
                        <input type="checkbox" checked={handleCheck()} onChange={e => handleStress(e)} />
                        Is ship stressed?
                    </label>
                        </span>
                    <SquadManeuver shipType={shipType} position={targetPosition} randNum={randNum} aiEngine={aiEngine}/>

                    <h2>Select and perform action:</h2>
                    <SquadActions shipType={shipType} aiEngine={aiEngine}/>

                    <h2>Select target and perform attack:</h2>
                    <SquadAttack shipType={shipType} aiEngine={aiEngine} />
                </div>
                <div className="col-5 position-relative">
                    <TargetSelection shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                          handleShipRemoval={props.handleShipRemoval} squadId={props.squadId}/>
                </div>
            </div>
        </div>
    )
}