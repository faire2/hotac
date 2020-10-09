import React from "react";
import {Ships} from "../Ships";

export default function fgaTargetSelection(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        default:
            console.log("Component sepaTargetSelection didn't recognize shipType: " + props.shipType);
    }
}

const VULTURE = () => (
    <ol>
        Use missiles when able to.
        <li>Nearest locked enemy in <i className="xwi x-frontarc"/></li>
        <li>Nearest enemy in <i className="xwi x-frontarc"/></li>
    </ol>
);
