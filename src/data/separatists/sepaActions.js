import React from "react";
import {Ships} from "../Ships";

export default function sepaShipActions(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        case Ships.BELBULLAB.id:
            return <BELBULLAB/>;
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

const BELBULLAB = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li><i className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-focus"/> to avoid target's arc and still get a shot.</li>
        <li><i className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-focus"/> to get a shot.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
        <li>If not in enemy arc and no shot, perform <i className="xwi x-lock"/>.</li>
        <li><i className="xwi x-focus"/>.</li>
    </ol>
);
