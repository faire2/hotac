import React, {useState} from "react";
import styled from "styled-components";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/xwing-miniatures.css";
import "./fonts/xwing-miniatures.ttf";
import "./fonts/xwing-miniatures-ships.ttf"

import Select from "react-select";
import {Ships, Stats, UpgradesSource} from "./data/Ships";
import SquadGenerator from "./components/SquadGenerator";
import {GlobalSquadsValuesContext, ShipHandlingContext} from "./context/Contexts";
import getUpgrades from "./components/upgrades/UpgradesGenerator";
import {HinnyUpgrades} from "./data/hinny/HinnyUpgrades";
import {CommunityUpgrades} from "./data/fga/CommunityUpgrades";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function App() {
    //const [squadrons, setSquadrons] = useState([]);
    const [squadrons, setSquadrons] = useState([{shipType: Ships.TIELN.id, isElite: false, upgrades: [[{skillName: "Upgrade"}, 1 , 2]], ships: [{tokenId: 0, hull: 3, shields: 1}], }]);
    const [playersRank, setPlayersRank] = useState(2);


    let newSquadShipOptions = [];
    for (let ship of Object.keys(Ships)) {
        newSquadShipOptions.push({value: Ships[ship][Stats.id], label: Ships[ship][Stats.name]})
    }

    let playerRankOptions = [];
    for (let i = 1; i < 8; i++) {
        playerRankOptions.push(i);
    }

    function handleNewShipSelection(value) {
        const tSquadrons = [...squadrons];
        const shipType = Ships[value].id;
        const upgrades = getUpgrades(shipType, playersRank, UpgradesSource.FGA, false);
        const extraHullAndShield = countExtraHullAndShield(upgrades);
        let newSquad = {
            shipType: shipType,
            isElite: false,
            upgradesSource: UpgradesSource.FGA,
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
                    <TopMenu>
                        <TopMenuItem><h3>New squadron:</h3></TopMenuItem>
                        <TopMenuItem>
                            <TopMenuSelect options={newSquadShipOptions}
                                    onChange={e => handleNewShipSelection(e.value)}/>
                        </TopMenuItem>
                        <TopMenuItem>Set players' rank:</TopMenuItem>
                        <ToggleButtonGroup type="radio" name="radio" value={playersRank}
                                           onChange={e => handleSetPlayersRank(e)}>
                            {playerRankOptions.map((number) => <ToggleButton value={number}>{number}</ToggleButton> )}
                        </ToggleButtonGroup>
                    </TopMenu>

                    <SquadGenerator squadrons={squadrons}/>
                </ShipHandlingContext.Provider>
            </GlobalSquadsValuesContext.Provider>
        </div>
    );
}

const TopMenu = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    position: -webkit-sticky;
    background-color: #007bff;
    padding-left: 10px;
    color: white;
    height: 50px;
    top: 0;
z-index: 2;
`;

const TopMenuItem = styled.div`
    margin-right: 10px;
`;

const TopMenuSelect = styled(Select)`
    width: 200px;
    color: black;
`;

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
        if (upgrade[0] === HinnyUpgrades.hullUpgrade || upgrade[0] === CommunityUpgrades.hullUpgrade) {
            extraHull += 1;
        }
        if (upgrade[0] === HinnyUpgrades.shieldUpgrade || upgrade[0] === CommunityUpgrades.shieldUpgrade) {
            extraShield += 1;
        }
    }
    return {extraHull: extraHull, extraShield: extraShield}
}

export default App;
