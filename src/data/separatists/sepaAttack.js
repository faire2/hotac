import React from "react";
import {Ships} from "../Ships";

export default function sepaAttack(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        case Ships.BELBULLAB.id:
            return <BELBULLAB/>;
        default:
            console.log("Component sepaAttack didn't recognize shipType: " + props.shipType);
    }
}

const VULTURE = () => (
    <ol>
        Use missiles when able to.
        <li>Nearest locked enemy in <i className="xwi x-frontarc"/></li>
        <li>Nearest enemy in <i className="xwi x-frontarc"/></li>
    </ol>
);
const BELBULLAB = () => (
    <ol>
        <li>Nearest locked enemy in <i className="xwi x-frontarc"/></li>
        <li>Nearest enemy in <i className="xwi x-frontarc"/> with lowest initiative</li>
        <li>Nearest enemy in <i className="xwi x-frontarc"/></li>
        <li>Nearest enemy</li>
    </ol>
);
