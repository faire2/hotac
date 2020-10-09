import React from "react";
import {Ships} from "../Ships";

export default function sepaShipActions(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        default:
            console.log("Component sepaActions didn't recognize shipType: " + props.shipType);
    }
}

const VULTURE = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li><i className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-calculate"/> to avoid target's arc and still get a shot.</li>
        <li><i className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-calculate"/> to get a shot.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
        <li>If not in enemy arc, no shot and not fully loaded, perform <i className="xwi x-reload"/>.</li>
        <li><i className="xwi x-calculate"/>.</li>
    </ol>
);
