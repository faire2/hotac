import React, {useState} from "react";
import Variables from "./Variables";

const ShipsHeader = () => (
    <div>
        <div className="row">
            <div className="col-4">
                <h3>ID:</h3>
            </div>
            <div className="col-4">
                <h3>Shields:</h3>
            </div>
            <div className="col-4">
                <h3>Hull:</h3>
            </div>
        </div>
    </div>
);

export function ShipsVariables(props) {
    const [ships, setShips] = useState([{
        tokenId: 0,
        hull: props.maxHull,
        shields: props.maxShield
    }]);

    function handleAddShip() {
        const tShipVars = [...ships];
        tShipVars.push({tokenId: 0, hull: props.maxHull, shields: props.maxShield});
        setShips(tShipVars);
    }

    function handleRemoveShip(index) {
        const tShips = [...ships];
        tShips.splice(index, 1);
        setShips(tShips);
    }

    function handleShipChange(ship, index) {
        const tShips = [...ships];
        tShips.splice(index, 1, ship);
        setShips(tShips);
    }

    return (
        <div>
            <ShipsHeader/>
            {
                ships.map((ship, keyIndex) =>
                    <Variables key={keyIndex} keyIndex={keyIndex} ship={ship} maxHull={props.maxHull}
                               maxShield={props.maxShield}
                               handleShipChange={handleShipChange} handleRemoveShip={handleRemoveShip}/>)
            }
            <br/>
            <button className="btn btn-primary btn-sm" onClick={handleAddShip}>Add a ship to this squadron</button>
        </div>
    )
}