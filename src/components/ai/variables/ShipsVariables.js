import React, {useContext, useState} from "react";
import Variables from "./Variables";
import {HinnySkills} from "../../../data/hinny/HinnyEliteSkills";
import {GlobalAiValuesContext, TargetPositionContext} from "../../../context/Contexts";

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
    const upgrades = props.upgrades;
    let hasExtraHull = false;
    let hasExtraShield = false;

    for (let upgrade of upgrades) {
        if (upgrade[0] === HinnySkills.hullUpgrade) {
            hasExtraHull = true;
        }
        if (upgrade[0] === HinnySkills.shieldUpgrade) {
            hasExtraShield = true;
        }
    }

    const maxHull = hasExtraHull ? props.maxHull + 1 : props.maxHull;
    const maxShield = hasExtraShield ? props.maxShield +1 : props.maxShield;

    const [ships, setShips] = useState([{
        tokenId: 0,
        hull: maxHull,
        shields: maxShield
    }]);

    function handleAddShip() {
        const tShipVars = [...ships];
        tShipVars.push({tokenId: 0, hull: maxHull, shields: maxShield});
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

    const RemoveSquadButton = () => {
        const globalAiValuesContext = useContext(GlobalAiValuesContext);
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
                    <Variables key={keyIndex} keyIndex={keyIndex} ship={ship} maxHull={props.maxHull}
                               maxShield={props.maxShield}
                               handleShipChange={handleShipChange} handleRemoveShip={handleRemoveShip}/>)
            }
            <br/>
            <button className="btn btn-primary btn-sm" onClick={handleAddShip}>Add a ship to squadron</button>
            <RemoveSquadButton />
        </div>
    )
}