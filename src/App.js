import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/xwing-miniatures.css';
import './fonts/xwing-miniatures.ttf';
import './fonts/xwing-miniatures-ships.ttf'
import Select from 'react-select';


import {Ships, Stats, UPGRADES} from "./data/Ships";
import SquadGenerator from "./components/ai/SquadGenerator";
import {GlobalSquadsValuesContext, ShipHandlingContext} from "./context/Contexts";
import getUpgrades from "./components/ai/upgrades/UpgradesGenerator";
import {HinnyUpgrades} from "./data/hinny/HinnyUpgrades";
import {CommunityUpgrades} from "./data/fga/CommunityUpgrades";

function App() {
    const [squadrons, setSquadrons] = useState([]);
    const [playersRank, setPlayersRank] = useState(5);


    let newSquadShipOptions = [];
    for (let ship of Object.keys(Ships)) {
        newSquadShipOptions.push({value: Ships[ship][Stats.id], label: Ships[ship][Stats.name]})
    }

    let playerRankOptions = [];
    for (let i = 1; i < 8; i++) {
        playerRankOptions.push({value: i, label: i});
    }

    function handleNewShipSelection(value) {
        const tSquadrons = [...squadrons];
        const shipType = Ships[value].id;
        const upgrades = getUpgrades(shipType, playersRank, UPGRADES.FGA, false);
        const maxShieldAndHull = getMaxHullAndShield(upgrades, shipType);
        let newSquad = {
            shipType: shipType,
            isElite: false,
            upgradesSource: UPGRADES.FGA,
            upgrades: upgrades,
            ships: [{
                tokenId: 0,
                hull: maxShieldAndHull.maxHull,
                shields: maxShieldAndHull.maxShields
            }]
        };
        tSquadrons.push(newSquad);
        setSquadrons(tSquadrons);
    }

    function handleSquadRemoval(index) {
        const tSquads = [...squadrons];
        tSquads.splice(index, 1);
        setSquadrons(tSquads);
    }

    function handleSetUpgradesSource(index, upgradesSource) {
        console.log("*** Setting upgrades source... ***");
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[index];
        squadron.upgradesSource = upgradesSource;
        console.log(squadron);
        squadron.upgrades = getUpgrades(squadron.shipType, playersRank, upgradesSource, squadron.isElite);
        setSquadrons(tSquadrons);
    }

    function handleSetPlayersRank(newPlayersRank) {
        let tSquadrons = [...squadrons];
        for (let squad of tSquadrons) {
            squad.upgrades = getUpgrades(squad.shipType, newPlayersRank, squad.upgradesSource, squad.isElite)
        }
        setSquadrons(tSquadrons);
        setPlayersRank(newPlayersRank);
    }

    function handleSetIsElite(index, isElite) {
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[index];
        squadron.isElite = isElite;
        squadron.upgrades = getUpgrades(squadron.shipType, playersRank, squadron.upgradesSource, isElite);
        setSquadrons(tSquadrons);
    }

    /* handlers for state of individual ships in squadron */
    function handleAddShip(squadId) {
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[squadId];
        let ships = tSquadrons[squadId].ships;
        const maxShieldAndHull = getMaxHullAndShield(squadron.upgrades, squadron.shipType);
        ships.push({tokenId: 0, hull: maxShieldAndHull.maxHull, shields: maxShieldAndHull.maxShields});
        setSquadrons(tSquadrons);
    }

    function handleRemoveShip(index, squadId) {
        let tSquadrons = [...squadrons];
        let tShips = tSquadrons[squadId];
        tShips.splice(index, 1);
        setSquadrons(tSquadrons);
    }

    function handleShipChange(ship, index, squadId) {
        let tSquadrons = [...squadrons];
        let tShips = tSquadrons[squadId];
        tShips.splice(index, 1, ship);
        setSquadrons(tSquadrons);
    }

    return (
        <div className="App">
            <GlobalSquadsValuesContext.Provider value={{
                playersRank: playersRank,
                squadrons: squadrons,
                handleSetIsElite: handleSetIsElite,
                handleSetUpgradesSource: handleSetUpgradesSource,
                handleSquadRemoval: handleSquadRemoval,
            }}>
                <ShipHandlingContext.Provider value={{
                    squadrons: squadrons,
                    handleAddShip: handleAddShip,
                    handleShipRemoval: handleRemoveShip,
                    handleShipChange: handleShipChange
                }}>
                    <h3>Select a ship to generate a new squadron:</h3>
                    {/*todo reset select caption after a choice is made, make a default message*/}
            <Select options={newSquadShipOptions} onChange={e => handleNewShipSelection(e.value)}/>
            <Select options={playerRankOptions} onChange={e => handleSetPlayersRank(e.value)}/>
                    <SquadGenerator squadrons={squadrons}/>
                </ShipHandlingContext.Provider>
            </GlobalSquadsValuesContext.Provider>
        </div>
    );
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

export default App;
