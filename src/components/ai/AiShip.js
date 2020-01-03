import {Abi, Ships} from "../../data/Ships";
import React, {useState} from "react";
import {Button} from "react-bootstrap";

export function InnerShip(props) {
    const shipId = props.shipId;
    const maxShields = Ships[shipId][Abi.shields];
    const maxHull = Ships[shipId][Abi.hull];
    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);

    function handleValueChange(e, isNegative) {
        let property = e.target.parentNode.id;
        let i = isNegative ? -1 : 1;
        console.log(e.target.parentNode.id)
        if (property === Abi.shields) {
            const tempCurrShields = currShields + i;
            setCurrShields(tempCurrShields);
        } else if (property === Abi.hull) {
            const tempCurrHull = currHull + i;
            setCurrHull(tempCurrHull);
        } else {
            console.log("Unknown ship property: " + property);
        }
    }

    return (
    <div className="row">
        <div className="col-5">
            <h3>{Ships[shipId][Abi.name]}</h3>
            <div>Initiative: {Ships[shipId][Abi.initiative]}</div>
            <div>Attack: {Ships[shipId][Abi.attack]}</div>
            <div>Agility: {Ships[shipId][Abi.agility]}</div>
            <div id="shields">
                Shields:
                <Button onClick={e => handleValueChange(e,true)}> - </Button>
                {currShields}
                <Button onClick={e => handleValueChange(e, false)}> + </Button>
            </div>
            <div id="hull">
                Hull:
                <Button onClick={e => handleValueChange(e,true)}> - </Button>
                {currHull}
                <Button onClick={e => handleValueChange(e, false)}> + </Button>
            </div>
            <h4>Select target:</h4>
            <ol>
                {Ships[shipId][Abi.selTarget].map((instruction) =>
                    <li>{instruction}</li>
                )}
            </ol>
        </div>
        <div className="col-7">
            IMAGE
        </div>
    </div>
    )
}