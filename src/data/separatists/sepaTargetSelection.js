import React from "react";
import {Ships} from "../Ships";

export default function fgaTargetSelection(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        case Ships.BELBULLAB.id:
            return <BELBULLAB/>;
        default:
            console.log("Component sepaTargetSelection didn't recognize shipType: " + props.shipType);
    }
}

const VULTURE = () => (
    <ol>
        <li>Target locked in arc else nearest enemy.</li>
        <li>Use missiles if requirements met else primary.</li>
    </ol>
);
const BELBULLAB = () => (
    <ol>
        <li>Target locked in arc else nearest enemy.</li>
        <li>Use missiles if requirements met else primary.</li>
    </ol>
);
