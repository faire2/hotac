import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Ships, Stats} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {PSN, TargetButtons} from "./TargetButtons";
import Maneuvers from "../../data/Maneuvers";

import Variables from "./Variables";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";

export function Squad(props) {
    const shipType = props.shipType;
    const maxShields = Ships[shipType][Stats.shields];
    const maxHull = Ships[shipType][Stats.hull];
    const squadId = props.squadId;

    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);





    return (
        <div>
            <h1>{Ships[props.shipType][Stats.name]}</h1>
            <div className="row">
                <div className="col-6">
                    <SquadStats shipType={shipType}/>
                    <ShipsVariables maxHull={maxHull} maxShield={maxShields}/>


                    <br/>

                    <h2>Select target:</h2>
                    <ShipTargetting shipType={shipType}/>

                    <h2>Perform maneuver:</h2>
                    <Maneuvers shipType={shipType} position={targetPosition}/>

                    <h2>Select and perform action:</h2>
                    <ShipActions shipType={shipType}/>
                </div>
                <div className="col-5 position-relative">
                    <ShipManeuverImages shipType={shipType}/>
                    <TargetButtons setTargetPosition={setTargetPosition}/>
                    <div className="d-flex flex-row">
                        <Button className="btnRemoveShip" variant="danger" size="sm"
                                onClick={e => props.handleShipRemoval(squadId)}>Remove ship</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}