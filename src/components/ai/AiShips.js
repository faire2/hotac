import React from 'react';
import {AiShip} from "./AiShip";

export default function AiShipsComponents(props) {
    let i = 0;
    let squadId = 0;
    return (
        <div className="row shipStats">
            {props.aiShips.map(function (shipType) {
                squadId = i;
                i++;
                return <div key={i} className="col-l-6">
                    <AiShip shipType={shipType} squadId={squadId} handleShipRemoval={props.handleShipRemoval}/>
                </div>;
            })
            }

        </div>
    )
};


