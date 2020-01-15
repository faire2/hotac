import {Stats, Ships} from "../../data/Ships";
import {Button} from "react-bootstrap";
import React, {useState} from "react";

/* todo replace <p> elements */
export default function ShipStats(props) {
    const maxShields = props.maxShields;
    const maxHull = props.maxHull;

    const [currShields, setCurrShields] = useState(maxShields);
    const [currHull, setCurrHull] = useState(maxHull);

    function handlePropertyIncrease(e) {
        let property = e.target.parentNode.id;
        if (property === Stats.shields && currShields < maxShields) {
            const tempCurrShields = currShields + 1;
            setCurrShields(tempCurrShields);
        } else if (property === Stats.hull && currHull < maxHull) {
            const tempCurrHull = currHull + 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Stats.hull && property !== Stats.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    function handlePropertyDecrease(e) {
        let property = e.target.parentNode.id;
        if (property === Stats.shields && currShields > 0) {
            const tempCurrShields = currShields - 1;
            setCurrShields(tempCurrShields);
        } else if (property === Stats.hull && currHull > 0) {
            const tempCurrHull = currHull - 1;
            setCurrHull(tempCurrHull);
        } else if (property !== Stats.hull && property !== Stats.shields) {
            console.log("Unknown ship property: " + property);
        }
    }

    return (
        <div className="row">
            <div className="col-4">
                <div className="row">
                    <div className="col-6">
                        <p>Initiative: </p>
                        <p>Attack: </p>
                        <p>Agility: </p>
                    </div>
                    <div className="col-6">
                        <p>{Ships[props.shipType][Stats.initiative]}</p>
                        <p>{Ships[props.shipType][Stats.attack]}</p>
                        <p>{Ships[props.shipType][Stats.agility]}</p>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6">
                        <p>Shields:</p>
                        <p>Hull:</p>
                    </div>
                    <div className="col-6">
                        <p id="shields">
                            <Button onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </Button>
                            <span className="value"> {currShields} </span>
                            <Button onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </Button>
                        </p>
                        <p id="hull">
                            <Button onClick={e => handlePropertyDecrease(e, true)} size="sm"> - </Button>
                            <span className="value"> {currHull} </span>
                            <Button onClick={e => handlePropertyIncrease(e, false)} size="sm"> + </Button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
