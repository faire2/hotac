import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Stats, Ships} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {PSN, TargetButtons} from "./TargetButtons";
import Maneuvers from "../../data/Maneuvers";

import ShipVariables from "./ShipVariables";
import {ShipStats} from "./ShipStats";

export function InnerShip(props) {
    const shipType = props.shipType;
    const maxShields = Ships[shipType][Stats.shields];
    const maxHull = Ships[shipType][Stats.hull];
    const shipId = props.shipId;

    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);

    return (
        <div>
            <h1>{Ships[props.shipType][Stats.name]}</h1>
            <div className="row">
                <div className="col-6">
                    <ShipStats shipType={shipType}/>
                    <ShipVariables maxShields={maxShields} maxHull={maxHull}/>
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
                                onClick={e => props.handleShipRemoval(shipId)}>Remove ship</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}