import React, {useContext, useState} from "react";

import {AI, Ships, Stats, UPGRADES} from "../../data/Ships";
import {ShipsVariables} from "./variables/ShipsVariables"
import {SquadStats} from "./SquadStats";
import Select from "react-select";
import {PSN} from "../../data/Maneuvers";
import SquadActionsCarousel from "./actionsCarousel/SquadActionsCarousel";
import {TargetPosition} from "./TargetPosition";
import UpgradesCard from "./UpgradesCard";
import getUpgrades from "./UpgradesGenerator'";
import {GlobalAiValuesContext, TargetPositionContext} from "../../context/Contexts";

export function Squad(props) {
    const shipType = props.shipType;
    const globalAiValues = useContext(GlobalAiValuesContext);

    /* TARGET POSITION STATE */
    const [targetPosition, setTargetPosition] = useState([PSN.R3FRONT]);
    const [maneuverRandNum, setManeuverRandnum] = useState(1);
    const [aiEngine, setAiEngine] = useState(AI.FGA);
    const [stressed, setStressed] = useState(false);

    /* UPGRADES STATE */
    const [upgradeLevel, setUpgradeLevel] = useState(0);
    const [upgradesRandNum, setUpgradesRandNum] = useState(Math.floor(Math.random() * 10) + 1);
    const [upgradesSource, setUpgradesSource] = useState(UPGRADES.HINNY);
    const [upgrades, setUpgrades] = useState(getUpgrades(shipType, upgradesRandNum, globalAiValues.playersRank, upgradesSource));

    const squadNames = [
        {value: "Alpha", label: "Alpha"},
        {value: "Beta", label: "Beta"},
        {value: "Gamma", label: "Gamma"},
        {value: "Delta", label: "Delta"},
        {value: "Epsilon", label: "Epsilon"},
        {value: "Omega", label: "Omega"},
    ];

    // number is randomized here to ensure that re-render of SquadManeuvres will be triggered
    // eslint-disable-next-line no-unused-vars
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
                        <SquadStats shipType={shipType} iniative={upgrades[upgrades.length - 1][1]}
                                    xp={upgrades[upgrades.length - 1][2]}/>
                        <ShipsVariables maxHull={Ships[shipType][Stats.hull]} maxShield={Ships[shipType][Stats.shields]}
                                        upgrades={upgrades}/>
                        <SquadActionsCarousel aiEngine={aiEngine} shipType={shipType}/>
                        <UpgradesCard upgrades={upgrades} handleSetUpgradeLevel={handleSetUpgradeLevel}/>
                    </div>
                    <div className="col-4">
                        <TargetPosition/>
                    </div>
                </div>
            </div>
        </TargetPositionContext.Provider>
    )
}