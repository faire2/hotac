import React from 'react';
import {Ships} from "./Ships";

export default function ShipActions(props) {
    switch (props.shipId) {
        case Ships.TIEIN.id:
            return <TIEIN/>;
        case Ships.TIELN.id:
            return <TIELN/>;
        case Ships.TIESA.id:
            return <TIESA/>;
        case Ships.VT49.id:
            return <VT49/>;
        default:
            console.log("Component ShipActions didn't recognize shipId: " + props.shipId);
    }
}

export const TIELN = () => (
    <ol>
        <li>Remove 1 stress token or take <i className="xwing-miniatures-font xwing-miniatures-font-crit"/> action.</li>
        <li><i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"/> to avoid target's firing arc and
            still have it in your firing arc.</li>
        <li><i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"/> to get target in your firing arc.</li>
        <li><i className="xwing-miniatures-font xwing-miniatures-font-focus"/> if you have target in your firing arc.</li>
        <li><i className="xwing-miniatures-font xwing-miniatures-font-barrelroll"/> to avoid target's firing arc.</li>
        <li><i className="xwing-miniatures-font xwing-miniatures-font-evade"/></li>
    </ol>
);

const TIEIN = () => (
    <ol>
        <li>Remove 1 stress token or <span className="xwing-miniatures-font xwing-miniatures-font-hit"></span></li>
    </ol>
);

const TIESA = () => (
    <ol>
        <li>Remove 1 stress token or <span className="xwing-miniatures-font xwing-miniatures-font-hit"></span></li>
    </ol>
);

const VT49 = () => (
    <ol>
        <li>Remove 1 stress token or <span className="xwing-miniatures-font xwing-miniatures-font-hit"></span></li>
    </ol>
);