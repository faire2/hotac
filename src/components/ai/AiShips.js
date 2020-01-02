import React from 'react';
import {InnerShip} from "./AiShip";

export const AiShipsComponents = props => (
    <div>
        {console.log("Ai ships mapping:")}
        {console.log(props.aiShips)}
        {props.aiShips.map(function (shipId) {
            return InnerShip(shipId)
        })}
    </div>
);


