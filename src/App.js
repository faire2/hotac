import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/xwing-miniatures.css';
import './fonts/xwing-miniatures.ttf';
import './fonts/xwing-miniatures-ships.ttf'
import Select from 'react-select';


import {Ships, Stats} from "./data/Ships";
import SquadGenerator from "./components/ai/SquadGenerator";
import {GlobalAiValuesContext} from "./context/Contexts";

function App() {
    const [aiShips, setAiShips] = useState([Ships.TIESA.id]);
    const [playersRank, setPlayersRank] = useState(1);

    let newShipOptions = [];
    for (let ship of Object.keys(Ships)) {
        newShipOptions.push({value: Ships[ship][Stats.id], label: Ships[ship][Stats.name]})
    }

    let playerRankOptions = [];
    for (let i = 1; i < 8; i++) {
        playerRankOptions.push({value: i, label: i});
    }


    function handleNewShipSelection(e) {
        const tAiShips = aiShips;
        tAiShips.push(e.value);
        setAiShips([...tAiShips]);
        console.log("Current ships state: ");
        console.log(aiShips);
    }

    function handleShipRemoval(index) {
        const tAiShips = aiShips;
        tAiShips.splice(index, 1);
        setAiShips([...tAiShips]);
        console.log("Current ships state: ");
        console.log(aiShips);
    }

    return (
        <div className="App">
            <GlobalAiValuesContext.Provider value={{
                playersRank: playersRank,
                handleShipRemoval: handleShipRemoval,
            }}>
                <h3>Select a ship to generate a new squadron:</h3>
                {/*todo reset select caption after a choice is made, make a default message*/}
                <Select options={newShipOptions} onChange={e => handleNewShipSelection(e)}/>
                <Select options={playerRankOptions} onChange={e => setPlayersRank(e.value)}/>
                <SquadGenerator aiShips={aiShips}/>
            </GlobalAiValuesContext.Provider>
        </div>
    );
}

export default App;
