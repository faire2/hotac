import React, {useState} from "react";
import {Ships, Stats} from "../../data/Ships";
import {Button} from "react-bootstrap";

export default function ShipVariables(props) {
    const maxShields = props.maxShields;
    const maxHull = props.maxHull;

    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);

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
            <div className="row">
                <div className="col-6">
                    <p>Shields:</p>
                </div>
                <div className="col-6">
                    <p>Hull:</p>
                </div>
            </div>
            <div className="row">
                <div id={Stats.shields} className="col-6">
                    <button className="btn btn-primary btn-sm btn-increment" onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </button>
                    <span className="value"> {currShields} </span>
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </button>
                </div>
                <div id={Stats.hull} className="col-6">
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </button>
                    <span className="value"> {currHull} </span>
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </button>
                </div>
            </div>
        </div>
    )
}