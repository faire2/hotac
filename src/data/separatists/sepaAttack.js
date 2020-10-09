import React from "react";
import {Ships} from "../Ships";

export default function sepaAttack(props) {
    switch (props.shipType) {
        case Ships.VULTURE.id:
            return <VULTURE/>;
        default:
            console.log("Component sepaAttack didn't recognize shipType: " + props.shipType);
    }
}

const VULTURE = () => (
    <ol>
        <li>Locked enemy in ship's arc.</li>
        <li>Nearest enemy in ship's arc with lowest initiative.</li>
        <li>Nearest enemy in ship's arc.</li>
        <li>Nearest enemy.</li>
    </ol>
);
