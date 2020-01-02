import React, {useState} from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts/xwing-miniatures.css';
import './fonts/xwing-miniatures.ttf';
import './fonts/xwing-miniatures-ships.ttf'

import Button from 'react-bootstrap/Button';
import Select from 'react-select';

import {AiShipsComponents} from "./components/ai/AiShips";
import {Ships} from "./data/Ships";


/*tady bude muset byt .map generujici ze state jednotlive lode*/

/*state lodi budou muset byt objekty vytvarene konstruktorem*/

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

    return (
        <div className="App">
            <Button> BUTTON </Button>
            <Select options={newShipOptions} onChange={e => handleNewShipSelection(e)}/>
            <AiShipsComponents aiShips={aiShips}/>
        </div>
    );
}

function createNewShip(shipId) {
    console.log(Ships["TIELN"]);
    console.log("ship: " + Ships[shipId]["name"]);
    return Ships[shipId];
}

export default App;
