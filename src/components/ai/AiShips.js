import React from 'react';
import {InnerShip} from "./AiShip";

export default function AiShipsComponents(props) {
    let i = 0;
    let shipId = 0;
    return (
        <div className="row shipStats">
            {props.aiShips.map(function (shipType) {
                shipId = i;
                i++;
                return <div className="col-l-6">
                    <InnerShip shipType={shipType} shipId={shipId} handleShipRemoval={props.handleShipRemoval}/>
                </div>;
            })
            }

        </div>
    )
};


