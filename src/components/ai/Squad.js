import React, {useState} from "react";

import {Ships, Stats} from "../../data/Ships";
import SquadActions from "../../data/ShipActions";
import {PSN} from "./TargetButtons";
import SquadManeuvers from "../../data/Maneuvers";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import {SquadTargetSelection} from "./SquadTargetting";
import ShipTargetting from "../../data/ShipTargetting";

export function Squad(props) {
    const shipType = props.shipType;
    const squadId = props.squadId;

    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);

    return (
        <div>
            <h1>{Ships[props.shipType][Stats.name]}</h1>
            <div className="row">
                <div className="col-6">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}/>

                    <h2>Select target:</h2>
                    <ShipTargetting shipType={shipType}/>

                    <h2>Perform maneuver:</h2>
                    <SquadManeuvers shipType={shipType} position={targetPosition}/>

                    <h2>Select and perform action:</h2>
                    <SquadActions shipType={shipType}/>
                </div>
                <div className="col-5 position-relative">
                    <SquadTargetSelection squadId={props.squadId} shipType={shipType} setTargetPosition={setTargetPosition}/>
                </div>
            </div>
        </div>
    )
}