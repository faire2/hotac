import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Stats, Ships} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {PSN, TargetButtons} from "./TargetButtons";
import Maneuvers from "../../data/Maneuvers";
import {ShipStats} from "./ShipStats";

export function InnerShip(props) {
    const shipType = props.shipType;
    const maxShields = Ships[shipType][Stats.shields];
    const maxHull = Ships[shipType][Stats.hull];
    const shipId = props.shipId;

    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);
    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);

    function handlePropertyIncrease(e) {
        let property = e.target.parentNode.id;
        if (property === Stats.shields && currShields < maxShields) {
            const tempCurrShields = currShields + 1;
            setCurrShields(tempCurrShields);
        } else if (property === Stats.hull && currHull < maxHull) {
            const tempCurrHull = currHull + 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Stats.hull && property !== Stats.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    function handlePropertyDecrease(e) {
        let property = e.target.parentNode.id;
        if (property === Stats.shields && currShields > 0) {
            const tempCurrShields = currShields - 1;
            setCurrShields(tempCurrShields);
        } else if (property === Stats.hull && currHull > 0) {
            const tempCurrHull = currHull - 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Stats.hull && property !== Stats.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    return (
        <div>
            <h3>{Ships[props.shipType][Stats.name]}</h3>
            <div className="row">
                <div className="col-6">
                    <ShipStats shipType={shipType} currShields={currShields} currHull={currHull}
                               handlePropertyDecrease={handlePropertyDecrease}
                               handlePropertyIncrease={handlePropertyIncrease}/>
                    <Button className="btnRemoveShip" variant="danger" size="sm" onClick={e => props.handleShipRemoval(shipId)}>Remove ship</Button>

                    <ShipManeuverImages shipType={shipType}/>
                    <TargetButtons setTargetPosition={setTargetPosition}/>

                </div>
                <div className="col-5">
                    <h4>Select target:</h4>
                    <ShipTargetting shipType={shipType}/>

                    <h4>Perform maneuver:</h4>
                    <Maneuvers shipType={shipType} position={targetPosition}/>

                    <h4>Select and perform action:</h4>
                    <ShipActions shipType={shipType}/>
                </div>
            </div>
        </div>
    )
}