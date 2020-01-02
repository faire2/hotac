import React from 'react';
import {InnerShip} from "./AiShip";

export const AiShipsComponents = props => (
    <div className="row">
        {props.aiShips.map(function (shipId) {
            return <div className="col-xl-6"> {InnerShip(shipId)}</div>
        })}
    </div>
);


