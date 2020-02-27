import React, {useContext, useState} from "react";
import Variables from "./Variables";
import {HinnyUpgrades} from "../../../data/hinny/HinnyUpgrades";
import {GlobalSquadsValuesContext} from "../../../context/Contexts";
import {CommunityUpgrades} from "../../../data/fga/CommunityUpgrades";

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
    let hasExtraHull = 0;
    let hasExtraShield = 0;

    for (let upgrade of upgrades) {
        if (upgrade[0] === HinnyUpgrades.hullUpgrade || upgrade[0] ===  CommunityUpgrades.hullUpgrade) {
            hasExtraHull += 1;
            console.log(hasExtraHull);
        }
        if (upgrade[0] === HinnyUpgrades.shieldUpgrade || upgrade[0] === CommunityUpgrades.shieldUpgrade) {
            hasExtraShield += 1;
            console.log(hasExtraShield);
        }
    }

    const maxHull = props.maxHull + hasExtraHull;
    const maxShield = props.maxShield + hasExtraShield;


    const [ships, setShips] = useState([{
        tokenId: 0,
        hull: maxHull,
        shields: maxShield
    }]);

    for (let ship of ships) {
        console.log("Ships shields, hull: " + ship.shields + ", " + ship.hull);
    }

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
                    <Variables key={keyIndex} keyIndex={keyIndex} ship={ship} maxHull={maxHull}
                               maxShield={maxShield}
                               handleShipChange={handleShipChange} handleRemoveShip={handleRemoveShip}/>)
            }
            <br/>
            <button className="btn btn-primary btn-sm" onClick={handleAddShip}>Add a ship to squadron</button>
            <RemoveSquadButton />
        </div>
    )
}