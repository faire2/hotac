import React from 'react';
import {Ships} from "../Ships";

export default function ShipTargetting(props) {
    switch (props.shipType) {
        case Ships.TIELN.id:
            return <TIELN/>;
        case Ships.TIEIN.id:
            return <TIEIN/>;
        case Ships.TIEADVX:
            return <TIEADVX/>;
        case Ships.TIESA.id:
            return <TIESA/>;
        case Ships.TIEDEF.id:
            return <TIEDEF/>;
        case Ships.TIEPH.id:
            return <TIEPH/>;
        case Ships.LAMBDA.id:
            return <LAMBDA/>;
        case Ships.VT49.id:
            return <VT49/>;
        default:
            console.log("Component ShipTargetting didn't recognize shipType: " + props.shipType);
    }
}

const TIELN = () => (
    <ol>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const TIEIN = () => (
    <ol>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const TIEADVX = () => (
    <ol>
        <li>Locked enemy</li>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const TIESA = () => (
    <ol>
        <li>Locked enemy</li>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const TIEDEF = () => (
    <ol>
        <li>Locked enemy</li>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const TIEPH = () => (
    <ol>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const LAMBDA = () => (
    <ol>
        <li>Nearest enemy in front arc</li>
        <li>Nearest enemy</li>
    </ol>
);

const VT49 = () => (
    <ol>
        <li>Locked enemy</li>
        <li>Nearest enemy with lower initiative in arc</li>
        <li>Nearest enemy in arc</li>
        <li>Nearest enemy</li>
    </ol>
);