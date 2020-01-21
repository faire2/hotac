import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/xwing-miniatures.css';
import './fonts/xwing-miniatures.ttf';
import './fonts/xwing-miniatures-ships.ttf'

import Button from 'react-bootstrap/Button';
import Select from 'react-select';


import {Ships} from "./data/Ships";
import SquadGenerator from "./components/ai/SquadGenerator";

function App() {
    const [aiShips, setAiShips] = useState([]);

    const newShipOptions = [
        {value: Ships.TIELN.id, label: Ships.TIELN.name},
        {value: Ships.TIEIN.id, label: Ships.TIEIN.name},
        {value: Ships.TIESA.id, label: Ships.TIESA.name},
        {value: Ships.VT49.id, label: Ships.VT49.name},
    ];

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
            <h3>Select a ship to generate a new squadron:</h3>
            <Select options={newShipOptions} onChange={e => handleNewShipSelection(e)}/>
            <SquadGenerator aiShips={aiShips} handleShipRemoval={handleShipRemoval}/>
        </div>
    );
}

export default App;
