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
    const [playersRank, setPlayersIni] = useState(5);


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
        let newSquad = {
            shipType: e.value,
            isElite: false,
            upgradesSource: UPGRADES.FGA,
            upgrades: getUpgrades(e.value, playersRank, UPGRADES.FGA, false)
        };
        tSquadrons.push(newSquad);
        setSquadrons(tSquadrons);
    }

    function handleShipRemoval(index) {
        const tAiShips = [...squadrons];
        tAiShips.splice(index, 1);
        setSquadrons(tAiShips);
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
    }

    function handleSetIsElite(index, isElite) {
        let tSquadrons = [...squadrons];
        const squadron = tSquadrons[index];
        squadron.isElite = isElite;
        squadron.upgrades = getUpgrades(squadron.shipType, playersRank, squadron.upgradesSource, isElite);
        setSquadrons(tSquadrons);
    }

    return (
        <div className="App">
            <GlobalSquadsValuesContext.Provider value={{
                playersRank: playersRank,
                squadrons: squadrons,
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
