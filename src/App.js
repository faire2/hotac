import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/xwing-miniatures.css';
import './fonts/xwing-miniatures.ttf';
import './fonts/xwing-miniatures-ships.ttf'
import Select from 'react-select';


import {Ships, Stats, UPGRADES} from "./data/Ships";
import SquadGenerator from "./components/ai/SquadGenerator";
import {GlobalSquadsValuesContext} from "./context/Contexts";
import getUpgrades from "./components/ai/upgrades/UpgradesGenerator";

function App() {
    const [squadrons, setSquadrons] = useState([]);
    const [playersIni, setPlayersIni] = useState(5);
    const [upgradesSource, setUpgradesSource] = useState([UPGRADES.HINNY]);
    const [isElite, setIsElite] = useState([false]);
    const [upgrades, setUpgrades] = useState([]);


    let newSquadShipOptions = [];
    for (let ship of Object.keys(Ships)) {
        newSquadShipOptions.push({value: Ships[ship][Stats.id], label: Ships[ship][Stats.name]})
    }

    let playerRankOptions = [];
    for (let i = 1; i < 8; i++) {
        playerRankOptions.push({value: i, label: i});
    }

    function handleNewShipSelection(e) {
        const tSquadrons = [...squadrons];
        tSquadrons.push(e.value);
        setSquadrons(tSquadrons);

        const tUpgradesSoure = [...upgradesSource];
        tUpgradesSoure.push(UPGRADES.HINNY);
        const i = tUpgradesSoure.length - 1;
        setUpgradesSource(tUpgradesSoure);

        const tIsElite = [...isElite];
        tIsElite.push(false);
        setIsElite(tIsElite);

        const tUpgrades = [...upgrades];
        tUpgrades.push(getUpgrades(e.value, playersIni, tUpgradesSoure[i], isElite[i]));
        setUpgrades(tUpgrades);
    }

    function handleShipRemoval(index) {
        const tAiShips = [...squadrons];
        tAiShips.splice(index, 1);
        setSquadrons(tAiShips);

        const tUpgradesSoure = [...upgradesSource];
        tUpgradesSoure.splice(index, 1);
        setUpgradesSource(tUpgradesSoure);

        const tUpgrades = [...upgrades];
        tUpgrades.splice(index, 1);
        setUpgrades(tUpgrades);

        const tIsElite = [...isElite];
        tIsElite.splice(index, 1);
        setIsElite(tIsElite);
    }

    function handleSetUpgradesSource(index, upgradesSource) {
        let tUpgradesSource = [...upgradesSource];
        tUpgradesSource[index] = upgradesSource;
        console.log("Upgrades source updated:" + tUpgradesSource[index]);
        setUpgradesSource(tUpgradesSource);

        let tUpgrades = [...upgrades];
        tUpgrades[index] = getUpgrades(squadrons[index], playersIni, upgradesSource, isElite[index]);
        setUpgrades(tUpgrades);
    }

    function handleSetPlayersRank(newPlayersInitiative) {
        let tUpgrades = [...upgrades];
        for (let i = 0; i < tUpgrades.length; i++) {
            tUpgrades[i] = getUpgrades(squadrons[i], newPlayersInitiative, upgradesSource[i], isElite[i]);
        }
        setUpgrades(tUpgrades);
        setPlayersIni(newPlayersInitiative);
    }

    function handleSetIsElite(index, value) {
        let tIsElite = [...isElite];
        tIsElite.splice(index, 1, value);
        setIsElite(tIsElite);

        const tUpgrades = [...upgrades];
        const newUpgrades = getUpgrades(squadrons[index], playersIni, upgradesSource[index], value);
        console.log("upgrades loaded");
        tUpgrades.splice(index, 1, newUpgrades);
        setUpgrades(tUpgrades);
    }

    return (
        <div className="App">
            <GlobalSquadsValuesContext.Provider value={{
                playersRank: playersIni,
                upgradesSource: upgradesSource,
                upgrades: upgrades,
                isElite: isElite,
                handleSetIsElite: handleSetIsElite,
                handleSetUpgradesSource: handleSetUpgradesSource,
                handleShipRemoval: handleShipRemoval,
            }}>
                <h3>Select a ship to generate a new squadron:</h3>
                {/*todo reset select caption after a choice is made, make a default message*/}
                <Select options={newSquadShipOptions} onChange={e => handleNewShipSelection(e)}/>
                <Select options={playerRankOptions} onChange={e => handleSetPlayersRank(e.value)}/>
                <SquadGenerator squadrons={squadrons}/>
            </GlobalSquadsValuesContext.Provider>
        </div>
    );
}

export default App;
