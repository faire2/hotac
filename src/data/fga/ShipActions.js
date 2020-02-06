import React from 'react';
import {Ships} from "../Ships";

export default function fgaShipActions(props) {
    switch (props.shipType) {
        case Ships.TIEIN.id:
            return <TIEIN/>;
        case Ships.TIELN.id:
            return <TIELN/>;
        case Ships.TIESA.id:
            return <TIESA/>;
        case Ships.VT49.id:
            return <VT49/>;
        case Ships.TIEADVX.id:
            return <TIEADVX/>;
        case Ships.TIEDEF.id:
            return <TIEDEF/>;
        case Ships.TIEPH.id:
            return <TIEPH/>;
        case Ships.LAMBDA.id:
            return <LAMBDA/>;
        default:
            console.log("Component ShipActions didn't recognize shipType: " + props.shipType);
    }
}

const TIELN = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc and still get a shot.</li>
        <li><i className="xwi x-barrelroll"/> to get a shot.</li>
        <li><i className="xwi x-focus"/> if you have a shot.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
        <li><i className="xwi x-evade"/>.</li>
    </ol>
);

const TIEIN = () => (
    <div>
        <div>If target has already moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-focus"/> <i className="xwi x-linked"/><i className="xwir x-barrelroll"/>/<i
                className="xwir x-boost"/> to avoidtarget's arc and still get a shot.
            </li>
            <li><i className="xwi x-boost"/> <i className="xwi x-linked"/><i className="xwir x-barrelroll"/> or <i
                className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-boost"/> to get a
                shot.
            </li>
            <li><i className="xwi x-focus"/> if hou have a shot.</li>
            <li><i className="xwi x-boost"/> <i className="xwi x-linked"/><i className="xwir x-barrelroll"/> or <i
                className="xwi x-barrelroll"/> <i className="xwi x-linked"/><i className="xwir x-boost"/> to avoid
                target's arc.
            </li>
            <li><i className="xwi x-evade"/>.</li>
        </ol>
        <div>If target has not yet moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-lock"/> if not in enemy's arc.</li>
            <li><i className="xwi x-focus"/>.</li>
        </ol>
    </div>
);

const TIESA = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li>
            <i className="xwir x-reload"/> if no charges on equipped <i className="xwi x-missile"/> or <i
            className="xwi x-torpedo"/>.
        </li>
        <li>
            <i className="xwi x-barrelroll"/> (<i className="xwi x-linked"/><i className="xwir x-lock"/>) to avoid
            target's arc and still get a shot.
        </li>
        <li>
            <i className="xwi x-barrelroll"/> (<i className="xwi x-linked"/><i className="xwir x-lock"/>) to get a
            shot.
        </li>
        <li><i className="xwi x-lock"/>.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
        <li><i className="xwi x-focus"/>.</li>
    </ol>
);

const VT49 = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li>If target is in no arc, <i className="xwi x-rotatearc"/> to get a shot.</li>
        <li>If target has already moved, <i className="xwi x-lock"/>.</li>
        <li>If not in enemy's arc and target has not yet moved, <i className="xwi x-lock"/>.</li>
        <li><i className="xwi x-focus"/>.</li>
    </ol>
);

const TIEADVX = () => (
    <div>
        <div>If target has already moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-lock"/> target.</li>
            <li><i className="xwir x-focus"/> <i className="xwi x-linked"/><i className="xwi x-barrelroll"/> to avoid
                target's arc and still get a shot.
            </li>
            <li><i className="xwir x-focus"/> <i className="xwi x-linked"/><i className="xwi x-barrelroll"/> to get a
                shot.
            </li>
            <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
            <li><i className="xwi x-focus"/>.</li>
        </ol>
        <div>If target has not yer moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-lock"/> if not in enemy's arc.</li>
            <li><i className="xwi x-focus"/>.</li>
        </ol>
    </div>
);

const TIEDEF = () => (
    <div>
        <div>If target has already moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-lock"/> target.</li>
            <li><i className="xwi x-barrelroll"/> or <i className="xwi x-boost"/> to get a shot</li>
            . {/* todo: the steps 3 and 4 should probably be switched */}
            <li><i className="xwi x-barrelroll"/> or <i className="xwi x-boost"/> to get in range 1 and still get a
                shot.
            </li>
            <li><i className="xwi x-barrelroll"/> or <i className="xwi x-boost"/> to avoid target's arc.</li>
            <li><i className="xwi x-focus"/>.</li>
        </ol>
        <div>If target has not yer moved:</div>
        <ol>
            <li>Resolve <i className="xwi x-crit"/>.</li>
            <li><i className="xwi x-barrelroll"/> or <i className="xwi x-boost"/> to avoid target's arc.</li>
            <li><i className="xwi x-focus"/>.</li>
        </ol>
    </div>
);

const TIEPH = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li>If target has not yet moved, <i className="xwir x-barrelroll"/> to avoid target's arc and still get a shot.
        </li>
        <li><i className="xwi x-barrelroll"/> to get a shot.</li>
        <li><i className="xwi x-barrelroll"/> to avoid target's arc.</li>
        <li><i className="xwi x-focus"/> if you have a shot.</li>
        <li><i className="xwi x-evade"/> to avoid target's arc.</li>
    </ol>
);

const LAMBDA = () => (
    <ol>
        <li>Resolve <i className="xwi x-crit"/>.</li>
        <li><i className="xwi x-focus"/> if you have a shot.</li>
        <li><i className="xwi x-coordinate"/> nearest friendly ship.</li>
        <li><i className="xwir x-jam"/> nearest enemy ship.</li>
        <li><i className="xwi x-focus"/>.</li>
    </ol>


);
