import React, {useState} from "react";
import {Stats} from "../../data/Ships";
import Select from "react-select";

export default function ShipVariables(props) {
    const maxShields = props.maxShields;
    const maxHull = props.maxHull;

    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);
    const [tokenId, setTokenId] = useState();

    const idOptions = [
        {value: 0, label: 0},
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5},
        {value: 6, label: 6},
        {value: 7, label: 7},
        {value: 8, label: 8},
        {value: 9, label: 9},

    ];

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
                <div className="col-4">
                    <div>ID:</div>
                </div>
                <div className="col-4">
                    <div>Shields:</div>
                </div>
                <div className="col-4">
                    <div>Hull:</div>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <Select options={idOptions} onChange={e => setTokenId(e.value)}/>
                </div>
                <div id={Stats.shields} className="col-4">
                    <button className="btn btn-primary btn-sm btn-increment" onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </button>
                    <span className="value"> {currShields} </span>
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </button>
                </div>
                <div id={Stats.hull} className="col-4">
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </button>
                    <span className="value"> {currHull} </span>
                    <button className="btn btn-primary btn-sm btn-increment"  onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </button>
                </div>
            </div>
        </div>
    )
}