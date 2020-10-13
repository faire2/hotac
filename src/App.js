import React, {useState} from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/xwing-miniatures.css";
import "./fonts/xwing-miniatures.ttf";
import "./fonts/xwing-miniatures-ships.ttf"
import {Ships} from "./data/Ships";
import Squadrons from "./components/Squadrons";
import {GlobalContext, SquadContext} from "./context/Contexts";
import getUpgrades from "./components/upgrades/UpgradesGenerator";
import {HinnyUpgradesList} from "./data/hinny/HinnyUpgradesList";
import {CommunityUpgrades} from "./data/fga/CommunityUpgrades";
import {TopMenu} from "./components/menus/TopMenu";

function App() {
    //const [squadrons, setSquadrons] = useState([]);
    const [squadrons, setSquadrons] = useState([]);
    const [playersRank, setPlayersRank] = useState(2);


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

        const previousUpgrades = squadron.upgrades;
        const newUpgrades = getUpgrades(squadron.shipType, playersRank, upgradesSource, squadron.isElite);
        squadron.ships = resetShipsextraHullAndShield(previousUpgrades, newUpgrades, squadron.shipType, squadron.ships);
        squadron.upgrades = newUpgrades;
        setSquadrons(tSquadrons);
    }

    function handleSetPlayersRank(newPlayersRank) {
        let tSquadrons = [...squadrons];
        for (let squad of tSquadrons) {
            const newUpgrades = getUpgrades(squad.shipType, newPlayersRank, squad.upgradesSource, squad.isElite);
            squad.ships = resetShipsextraHullAndShield(squad.upgrades, newUpgrades, squad.shipType, squad.ships);
            squad.upgrades = newUpgrades;
        }
        setSquadrons(tSquadrons);
        setPlayersRank(newPlayersRank);
    }

    function handleNewShipSelection(value) {
        const tSquadrons = [...squadrons];
        const shipType = Ships[value].id;
        const upgradesSource = Ships[shipType].upgrades[0];
        const upgrades = getUpgrades(shipType, playersRank, upgradesSource, false);
        const extraHullAndShield = countExtraHullAndShield(upgrades);
        let newSquad = {
            shipType: shipType,
            isElite: false,
            upgradesSource: upgradesSource,
            upgrades: upgrades,
            ships: [{
                tokenId: 0,
                hull: Ships[shipType].hull + extraHullAndShield.extraHull,
                shields: Ships[shipType].shields + extraHullAndShield.extraShield
            }]
        };
        tSquadrons.push(newSquad);
        setSquadrons(tSquadrons);
    }

    function handleSetIsElite(index, isElite) {
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[index];
        squadron.isElite = isElite;

        const previousUpgrades = squadron.upgrades;
        const newUpgrades = getUpgrades(squadron.shipType, playersRank, squadron.upgradesSource, isElite);
        squadron.ships = resetShipsextraHullAndShield(previousUpgrades, newUpgrades, squadron.shipType, squadron.ships);
        squadron.upgrades = newUpgrades;
        setSquadrons(tSquadrons);

        setSquadrons(tSquadrons);
    }

    /* handlers for state of individual ships in squadron */
    function handleAddShip(squadId) {
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[squadId];
        let ships = tSquadrons[squadId].ships;
        let extraHullAndShield = countExtraHullAndShield(squadron.upgrades);
        ships.push({
            tokenId: 0,
            hull: Ships[squadron.shipType].hull + extraHullAndShield.extraHull,
            shields: Ships[squadron.shipType].shields + extraHullAndShield.extraShield
        });
        setSquadrons(tSquadrons);
    }

    function handleRemoveShip(index, squadId) {
        let tSquadrons = [...squadrons];
        let tShips = tSquadrons[squadId].ships;
        tShips.splice(index, 1);
        setSquadrons(tSquadrons);
    }

    function handleShipChange(ship, index, squadId) {
        let tSquadrons = [...squadrons];
        let tShips = tSquadrons[squadId].ships;
        tShips.splice(index, 1, ship);
        setSquadrons(tSquadrons);
    }

    const globalContextValues = {
        playersRank: playersRank,
        squadrons: squadrons,
        handleSetIsElite: handleSetIsElite,
        handleSetUpgradesSource: handleSetUpgradesSource,
        handleSquadRemoval: handleSquadRemoval,
        handleNewShipSelection: handleNewShipSelection,
        handleSetPlayersRank: handleSetPlayersRank,
    };

    const squadContextValues = {
        squadrons: squadrons,
        handleAddShip: handleAddShip,
        handleShipRemoval: handleRemoveShip,
        handleShipChange: handleShipChange
    };

    return (
        <div className="App">
            <GlobalContext.Provider value={globalContextValues}>
                <SquadContext.Provider value={squadContextValues}>
                    <TopMenu />
                    <Squadrons squadrons={squadrons}/>
                </SquadContext.Provider>
            </GlobalContext.Provider>
        </div>
    );
}



function resetShipsextraHullAndShield(previousUpgrades, newUpgrades, shipType, ships) {
    const previousExtras = countExtraHullAndShield(previousUpgrades);
    const newExtras = countExtraHullAndShield(newUpgrades);

    for (const ship of ships) {
        ship.hull = ship.hull + newExtras.extraHull - previousExtras.extraHull;
        ship.shields = ship.shields + newExtras.extraShield - previousExtras.extraShield;
    }
    return ships
}

export function countExtraHullAndShield(upgrades) {
    let extraHull = 0;
    let extraShield = 0;

    for (let upgrade of upgrades) {
        if (upgrade[0] === HinnyUpgradesList.hullUpgrade || upgrade[0] === CommunityUpgrades.hullUpgrade) {
            extraHull += 1;
        }
        if (upgrade[0] === HinnyUpgradesList.shieldUpgrade || upgrade[0] === CommunityUpgrades.shieldUpgrade) {
            extraShield += 1;
        }
    }
    return {extraHull: extraHull, extraShield: extraShield}
}

export default App;
