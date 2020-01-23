import React, {useState} from "react";

import {Ships, Stats} from "../../data/Ships";
import SquadActions from "../../data/ShipActions";
import {PSN} from "./TargetButtons";
import SquadManeuvers from "../../data/Maneuvers";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import {SquadTargetSelection} from "./SquadTargetting";
import ShipTargetting from "../../data/ShipTargetting";
import Select from "react-select";

export function Squad(props) {
    const shipType = props.shipType;
    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);
    const [randNum, setRandnum] = useState(1);

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

    return (
        <div>
            <div className="row">
                <div className="col-5"><h2>Squadron designation:</h2></div>
                <div className="col-5"><h3><Select options={squadNames} /></h3></div>
            </div>
            <div className="row">
                <div className="col-6">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}/>

                    <h2>Select target:</h2>
                    <ShipTargetting shipType={shipType}/>

                    <h2>Perform maneuver:</h2>
                    <SquadManeuvers shipType={shipType} position={targetPosition} randNum={randNum}/>

                    <h2>Select and perform action:</h2>
                    <SquadActions shipType={shipType}/>
                </div>
                <div className="col-5 position-relative">
                    <SquadTargetSelection shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                          handleShipRemoval={props.handleShipRemoval}/>
                </div>
            </div>
        </div>
    )
}