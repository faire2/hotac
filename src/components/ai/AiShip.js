import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Abi, Ships} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {PSN, TargetButtons} from "./TargetButtons";
import Maneuvers from "../../data/Maneuvers";
import {ShipStats} from "./ShipStats";

export function InnerShip(props) {
    const shipType = props.shipType;
    const maxShields = Ships[shipType][Abi.shields];
    const maxHull = Ships[shipType][Abi.hull];
    const shipId = props.shipId;

    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);
    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);

    function handlePropertyIncrease(e) {
        let property = e.target.parentNode.id;
        if (property === Abi.shields && currShields < maxShields) {
            const tempCurrShields = currShields + 1;
            setCurrShields(tempCurrShields);
        } else if (property === Abi.hull && currHull < maxHull) {
            const tempCurrHull = currHull + 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Abi.hull && property !== Abi.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    function handlePropertyDecrease(e) {
        let property = e.target.parentNode.id;
        if (property === Abi.shields && currShields > 0) {
            const tempCurrShields = currShields - 1;
            setCurrShields(tempCurrShields);
        } else if (property === Abi.hull && currHull > 0) {
            const tempCurrHull = currHull - 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Abi.hull && property !== Abi.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    return (
        <div className="row">
            <div className="col-5">
                <ShipStats shipType={shipType} currShields={currShields} currHull={currHull}
                           handlePropertyDecrease={handlePropertyDecrease}
                           handlePropertyIncrease={handlePropertyIncrease}/>

                <h4>Select target:</h4>
                <ShipTargetting shipType={shipType}/>

                <h4>Perform maneuver:</h4>
                <Maneuvers shipType={shipType} position={targetPosition}/>

                <h4>Select and perform action:</h4>
                <ShipActions shipType={shipType}/>

            </div>
            <div className="col-6">
                <Button onClick={e => props.handleShipRemoval(shipId)}>Remove ship</Button>
                <ShipManeuverImages shipType={shipType}/>
                <TargetButtons setTargetPosition={setTargetPosition}/>
            </div>
        </div>
    )
}