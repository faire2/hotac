import Select from "react-select";
import {AI, Ships, Stats} from "../../data/Ships";
import SquadManeuverGenerator from "./SquadManeuverGenerator";
import React from "react";

export default function SquadManeuver(props) {
    const shipType = props.shipType;
    const aiEngine = props.aiEngine;


    let aiValues = [];
    for (let ai of Ships[shipType][Stats.ai]) {
        aiValues.push({value: ai, label: ai});
    }
    return (
        <div>
        <span>
            <SquadManeuverGenerator shipType={shipType} position={props.position} randNum={props.randNum}
                                    aiEngine={aiEngine} />
            <br/>
            <Select options={aiValues} defaultValue={{label: aiEngine, value: aiEngine}}
                    onChange={e => props.setAiEngine(e.value)}/>
            {/*  Handles visibility according to selected Ai engine */
                aiEngine === AI.FGA &&
                <label>
                    <input type="checkbox" value={props.stressed} onChange={e => props.handleStress(e)}/>
                    Is ship stressed?
                </label>}
                        </span>

        </div>
    )
}