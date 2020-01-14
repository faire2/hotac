import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Abi, Ships} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {TargetButtons} from "./TargetButtons";
import Maneuvers, {PSN} from "../../data/Maneuvers";

export function InnerShip(props) {
    const shipId = props.shipId;
    const maxShields = Ships[shipId][Abi.shields];
    const maxHull = Ships[shipId][Abi.hull];

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
        } else {
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
        } else {
            console.log("Unknown ship property: " + property);
        }
    }

    return (
        <div className="row">
            <div className="col-5">
                <h3>{Ships[shipId][Abi.name]}</h3>
                <div>Initiative: {Ships[shipId][Abi.initiative]}</div>
                <div>Attack: {Ships[shipId][Abi.attack]}</div>
                <div>Agility: {Ships[shipId][Abi.agility]}</div>
                <div id="shields">
                    <span>Shields: </span>
                    <Button onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </Button>
                    <span className="value"> {currShields} </span>
                    <Button onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </Button>
                </div>
                <div id="hull">
                    <span>Hull: </span>
                    <Button onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </Button>
                    <span className="value"> {currHull} </span>
                    <Button onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </Button>
                </div>

                <h4>Select target:</h4>
                <ShipTargetting shipId={shipId}/>

                <h4>Perform maneuver:</h4>
                <Maneuvers shipId={shipId} position={targetPosition}/>

                <h4>Select and perform action:</h4>
                <ShipActions shipId={shipId}/>

            </div>
            <div className="col-6">
                <ShipManeuverImages  shipId={shipId}/>
                <TargetButtons setTargetPosition={setTargetPosition}/>
            </div>
        </div>
    )
}