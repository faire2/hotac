import React, {useContext, useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./variables/ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import SquadActionsCarousel from "./actionsCarousel/SquadActionsCarousel";
import {TargetPosition} from "./maneuvers/TargetPosition";
import UpgradesCard from "./upgrades/UpgradesCard";
import {GlobalSquadsValuesContext, TargetPositionContext} from "../../context/Contexts";
import {HinnyUpgrades} from "../../data/hinny/HinnyUpgrades";
import {CommunityUpgrades} from "../../data/fga/CommunityUpgrades";

export function Squad(props) {
    const shipType = props.ship.shipType;
    const globalSquadValues = useContext(GlobalSquadsValuesContext);

    /* TARGET POSITION STATE */
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [maneuverRandNum, setManeuverRandnum] = useState(1);
    const [aiEngine, setAiEngine] = useState(AI.FGA);
    const [stressed, setStressed] = useState(false);
    const squadNames = [
        {value: "Alpha", label: "Alpha"},
        {value: "Beta", label: "Beta"},
        {value: "Gamma", label: "Gamma"},
        {value: "Delta", label: "Delta"},
        {value: "Epsilon", label: "Epsilon"},
        {value: "Omega", label: "Omega"},
    ];

    const upgrades = props.ship.upgrades;
    const [maxShieldAndHull, setMaxShieldAndHull] = useState(getMaxHullAndShield(upgrades, shipType));

    console.log("Max shield and hull in squad: ");
    console.log(maxShieldAndHull);
    const [ships, setShips] = useState([{
        tokenId: 0,
        hull: maxShieldAndHull.maxHull,
        shields: maxShieldAndHull.maxShields
    }]);

    function handleAddShip() {
        const tShipVars = [...ships];
        tShipVars.push({tokenId: 0, hull: maxShieldAndHull.maxHull, shields: maxShieldAndHull.maxShields});
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

    // number is randomized here to ensure that re-render of SquadManeuvres will be triggered
    function handleSetTargetPosition(position) {
        setManeuverRandnum(Math.floor(Math.random() * 6));
        setTargetPosition(position);
    }

    function handleStress() {
        setStressed(!stressed);
    }

    function handleSetAi(ai) {
        setTargetPosition(PSN.R1FRONT);
        setStressed(false);
        setAiEngine(ai);
    }

    return (
        <TargetPositionContext.Provider value={{
            shipType: shipType,
            maneuverRandNum: maneuverRandNum,
            aiEngine: aiEngine,
            setAiEngine: handleSetAi,
            targetPosition: targetPosition,
            setTargetPosition: handleSetTargetPosition,
            stressed: stressed,
            handleStress: handleStress
        }}>
            <div className="squadContainer">
                <div className="row">
                    <div className="col-8">
                        <h3>Ship type: {Ships[shipType][Stats.name]}</h3>
                    </div>
                    <div className="col-4">
                        <Select options={squadNames}
                                defaultValue={{value: "Squadron designation", label: "Squadron designation"}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <SquadStats shipType={shipType} upgrades={upgrades}/>
                        <ShipsVariables ships={ships} handleAddShip={handleAddShip} handleRemoveShip={handleRemoveShip}
                                        handleShipChange={handleShipChange} maxShieldAndHull={maxShieldAndHull}/>
                        <SquadActionsCarousel aiEngine={aiEngine} shipType={shipType}/>
                        <UpgradesCard upgrades={upgrades} squadId={props.squadId} setShips={setShips} ships={ships}
                                      maxShieldAndHull={maxShieldAndHull} setMaxShieldAndHull={setMaxShieldAndHull} shipType={shipType} getMaxShieldAndHull={getMaxHullAndShield}/>
                    </div>
                    <div className="col-4">
                        <TargetPosition/>
                    </div>
                </div>
            </div>
        </TargetPositionContext.Provider>
    )
}

function getMaxHullAndShield(upgrades, shipType) {
    let extraHull = 0;
    let extraShield = 0;

    for (let upgrade of upgrades) {
        if (upgrade[0] === HinnyUpgrades.hullUpgrade || upgrade[0] === CommunityUpgrades.hullUpgrade) {
            extraHull += 1;
        }
        if (upgrade[0] === HinnyUpgrades.shieldUpgrade || upgrade[0] === CommunityUpgrades.shieldUpgrade) {
            extraShield += 1;
        }
    }

    const maxHull = Ships[shipType].hull + extraHull;
    const maxShields = Ships[shipType].shields + extraShield;
    console.log("get max hull and shield: " + maxHull + ", " + maxShields);
    return {maxHull: maxHull, maxShields: maxShields}
}