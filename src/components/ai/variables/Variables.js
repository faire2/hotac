import React from "react";
import {Stats} from "../../../data/Ships";
import Select from "react-select";

export default function Variables(props) {
    let ship = props.ship;

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

    function handleShipVarChange(variable, value) {
        const tShip = {...props.ship};

        switch (variable) {
            case Stats.shields:
                if (value >= 0 && value <= props.maxShield) {
                    tShip.shields = value;
                }
                break;
            case Stats.hull:
                if (value >= 0 && value <= props.maxHull) {
                    tShip.hull = value;
                }
                break;
            case Stats.tokenId:
                tShip.tokenId = value;
                break;
            default:
                console.log("Function handleShipVarChange in Variables didn't recognize variable: " + variable);
        }
        props.handleShipChange(tShip, props.keyIndex);
    }

    return (
        <div>
            <div className="row">
                <div className="col-3" >
                    <Select options={idOptions} onChange={e => handleShipVarChange(Stats.tokenId, e.value)}
                            value={{label: props.ship.tokenId, value: props.ship.tokenId}}/>
                </div>
                <div className="col-4">
                    <button className="btn btn-primary btn-increment"
                            onClick={e => handleShipVarChange(Stats.shields, ship.shields - 1)}
                            size="sm"> -
                    </button>
                    <span className="value"> {ship.shields} </span>
                    <button className="btn btn-primary btn-increment"
                            onClick={e => handleShipVarChange(Stats.shields, ship.shields + 1)}
                            size="sm"> +
                    </button>
                </div>
                <div className="col-4 ">
                    <button className="btn btn-primary btn-increment"
                            onClick={e => handleShipVarChange(Stats.hull, ship.hull - 1)}
                            size="sm"> -
                    </button>
                    <span className="value">     {ship.hull} </span>
                    <button className="btn btn-primary btn-increment"
                            onClick={e => handleShipVarChange(Stats.hull, ship.hull + 1)}
                            size="sm"> +
                    </button>
                </div>
                <div className="col-1">
                    <button id="btn-remove_ship" className="btn btn-danger" onClick={() => props.handleRemoveShip(props.keyIndex)}>x
                    </button>
                </div>
            </div>
        </div>
    )
}