import React, {useContext} from "react";
import Variables from "./Variables";
import {GlobalSquadsValuesContext} from "../../../context/Contexts";

const ShipsHeader = () => (
    <div>
        <div className="row">
            <div className="col-3">
                <h3>ID:</h3>
            </div>
            <div className="col-4">
                <h3>Shields:</h3>
            </div>
            <div className="col-4">
                <h3>Hull:</h3>
            </div>
            <div className="col-1">
            </div>
        </div>
    </div>
);

export function ShipsVariables(props) {
    const ships = props.ships;

    for (let ship of ships) {
        console.log("Ships shields, hull: " + ship.shields + ", " + ship.hull);
    }

    const RemoveSquadButton = () => {
        const globalAiValuesContext = useContext(GlobalSquadsValuesContext);
        return (
            <button className="btn btn-danger btn-sm btnRemoveShip"
                    onClick={() => globalAiValuesContext.handleShipRemoval(props.squadId)}>
                Remove whole squadron
            </button>
        )
    };

    return (
        <div>
            <ShipsHeader/>
            {
                ships.map((ship, keyIndex) =>
                    <Variables key={keyIndex} keyIndex={keyIndex} ship={ship} maxShieldAndHull={props.maxShieldAndHull}
                               handleShipChange={props.handleShipChange} handleRemoveShip={props.handleRemoveShip}/>)
            }
            <br/>
            <button className="btn btn-primary btn-sm" onClick={props.handleAddShip}>Add a ship to squadron</button>
            <RemoveSquadButton/>
        </div>
    )
}