import React, {useState} from "react";

import {AI, Ships, Stats} from "../../data/Ships";
import {ShipsVariables} from "./ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import SquadActionsCarousel from "./SquadActionsCarousel";
import {TargetPosition} from "./TargetPosition";
import UpgradesCard from "./UpgradesCard";
import getHinnyUpgrades from "../../data/hinny/GetHinnyUpgrades";

export function Squad(props) {
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [maneuverRandNum, setManeuverRandnum] = useState(1);
    const [aiEngine, setAiEngine] = useState(AI.FGA);
    const [stressed, setStressed] = useState(false);
    const [upgradeLevel, setUpgradeLevel] = useState(0);

    const shipType = props.shipType;
    const upgrades = getHinnyUpgrades(shipType, props.upgradeRandNum);
    let upgradesOfLevel = [...upgrades];
    upgradesOfLevel.splice(upgradeLevel + 1, 5 - upgradeLevel);
    const initiative = upgrades.length === 5 ? upgrades[upgradeLevel][1] : upgrades[0][1];
    const xp = upgrades.length === 5 ? upgrades[upgradeLevel][2] : upgrades[0][1];

    const squadNames = [
        {value: "Alpha", label: "Alpha"},
        {value: "Beta", label: "Beta"},
        {value: "Gamma", label: "Gamma"},
        {value: "Delta", label: "Delta"},
        {value: "Epsilon", label: "Epsilon"},
        {value: "Omega", label: "Omega"},
    ];

    // number is randomized here to ensure that re-render of SquadManeuvres will be triggered
    function handleSetTargetPosition(position) {
        setManeuverRandnum(Math.floor(Math.random() * 6));
        setTargetPosition(position);
    }

    function handleStress(e) {
        setStressed(!stressed);
    }

    function handleSetAi(ai) {
        setTargetPosition(PSN.R1FRONT);
        setStressed(false);
        setAiEngine(ai);
    }

    function handleSetUpgradeLevel(value) {
        if (upgrades.length === 6) {
            let tUpgradeLevel = upgradeLevel;
            tUpgradeLevel += value;
            if (tUpgradeLevel > -1 && tUpgradeLevel < 6) {
                setUpgradeLevel(tUpgradeLevel)
            }
        }
    }

    return (
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
                    <SquadStats shipType={shipType} iniative={initiative} xp={xp} upgradeLevel={upgradeLevel}/>
                    <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}
                                    handleShipRemoval={props.handleShipRemoval}  upgradesOfLevel={upgradesOfLevel}/>
                    <SquadActionsCarousel aiEngine={aiEngine} shipType={shipType} />
                    <UpgradesCard upgradesOfLevel={upgradesOfLevel} handleSetUpgradeLevel={handleSetUpgradeLevel}/>
                </div>
                <div className="col-4">
                    <TargetPosition shipType={shipType} setTargetPosition={handleSetTargetPosition}
                                    setAiEngine={handleSetAi} handleStress={handleStress} squadId={props.squadId}
                                    aiEngine={aiEngine} stressed={stressed} randNum={maneuverRandNum}
                                    position={targetPosition}/>
                </div>
            </div>
        </div>
    )
}