import React from 'react';
import {Squad} from "./Squad";

export default function SquadGenerator(props) {
    let i = 0;
    let squadId = 0;
    return (
        <div className="row shipStats">
            {props.aiShips.map(function (ship) {
                squadId = i;
                i++;
                return <div key={i} className="col-l-3 col-m-4">
                    <Squad shipType={ship.shipType} squadId={squadId} upgradeRandNum={ship.upgradeRandNum} handleShipRemoval={props.handleShipRemoval}/>
                </div>;
            })
            }
        </div>
    )
};


