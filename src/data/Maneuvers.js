import React from "react";
import {Ships} from "./Ships";
import {PSN} from "../components/ai/TargetButtons";

const MVRS = Object.freeze({
    STRAIGHT1: "STRAIGHT1",
    STRAIGHT2: "STRAIGHT2",
    STRAIGHT3: "STRAIGHT3",
    STRAIGHT4: "STRAIGHT4",
    STRAIGHT5: "STRAIGHT5",
    BANK1: "BANK1",
    BANK2: "BANK2",
    BANK3: "BANK3",
    BANKOPPOSITE3: "BANKOPPOSITE3",
    TURN1: "TURN1",
    TURNRED1: "TURNRED1",
    TURN2: "TURN2",
    TURN3: "TURN3",
    TURNOPPOSITE2: "TURNOPPOSITE2",
    TURNOPPOSITE3: "TURNOPPOSITE3",
    SEGNOR3: "SEGNOR3",
    SEGNOROPPOSITE3: "SEGNOROPPOSITE3",
    TALLON3: "TALLON3",
    KOIOGRAN3: "KOIOGRAN3",
    KOIOGRAN4: "KOIOGRAN4",
    KOIOGRAN5: "KOIOGRAN5",
    STATIONARY: "STATIONARY",
    REVERSESTRAIGHT1: "REVERSESTRAIGHT1",
    REVERSEBANK1: "REVERSEBANK1",
    REVERSEBANK2: "REVERSEBANK2",
});


/* MANEUVERS are kept as arrays so that random number can be used as the array index */
const ShipManeuvers = Object.freeze({
    [Ships.TIELN.id]: {
        [PSN.FARFRONT]: [MVRS.STRAIGHT5, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.FARFRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN1],
        [PSN.FARREARSIDE]: [MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN1],
        [PSN.FARREAR]: [MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN2, MVRS.TURN1],
        [PSN.NEARFRONT]: [MVRS.KOIOGRAN4, MVRS.KOIOGRAN4, MVRS.STRAIGHT2, MVRS.BANK2, MVRS.BANK2, MVRS.TURN1],
        [PSN.NEAFRONTSIDE]: [MVRS.KOIOGRAN4, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.NEARREARSIDE]: [MVRS.KOIOGRAN4, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.NEARREAR]: [MVRS.STRAIGHT5, MVRS.KOIOGRAN4, MVRS.KOIOGRAN4, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN3],
    },
    [Ships.TIEIN.id]: {
        [PSN.FARFRONT]: [MVRS.STRAIGHT5, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.FARFRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN1],
        [PSN.FARREARSIDE]: [MVRS.KOIOGRAN4, MVRS.KOIOGRAN4, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN1],
        [PSN.FARREAR]: [MVRS.KOIOGRAN4, MVRS.SEGNOROPPOSITE3, MVRS.SEGNOR3, MVRS.SEGNOR3, MVRS.TURN2, MVRS.TURN1],
        [PSN.NEARFRONT]: [MVRS.KOIOGRAN4, MVRS.SEGNOROPPOSITE3, MVRS.STRAIGHT2, MVRS.BANK2, MVRS.BANK2, MVRS.TURN1],
        [PSN.NEAFRONTSIDE]: [MVRS.SEGNOROPPOSITE3, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.NEARREARSIDE]: [MVRS.SEGNOR3, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.NEARREAR]: [MVRS.STRAIGHT5, MVRS.KOIOGRAN4, MVRS.KOIOGRAN4, MVRS.SEGNOROPPOSITE3, MVRS.SEGNOR3, MVRS.TURN3],
    },
    [Ships.TIESA.id]: {
        [PSN.FARFRONT]: [MVRS.STRAIGHT4, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.FARFRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2],
        [PSN.FARREARSIDE]: [MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2],
        [PSN.FARREAR]: [MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN3, MVRS.TURN2],
        [PSN.NEARFRONT]: [MVRS.KOIOGRAN5, MVRS.STRAIGHT2, MVRS.STRAIGHT1, MVRS.STRAIGHT1, MVRS.BANK1, MVRS.BANK1],
        [PSN.NEAFRONTSIDE]: [MVRS.KOIOGRAN5, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.BANK1, MVRS.BANK1],
        [PSN.NEARREARSIDE]: [MVRS.KOIOGRAN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1],
        [PSN.NEARREAR]: [MVRS.KOIOGRAN5, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.KOIOGRAN3, MVRS.TURN3],
    },
    [Ships.VT49.id]: {
        [PSN.FARFRONT]: [MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.STRAIGHT2, MVRS.BANK2],
        [PSN.FARFRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2],
        [PSN.FARREARSIDE]: [MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1],
        [PSN.FARREAR]: [MVRS.TURN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURNOPPOSITE2, MVRS.BANK1],
        [PSN.NEARFRONT]: [MVRS.STRAIGHT4, MVRS.TURN3, MVRS.TURN3, MVRS.TURNOPPOSITE3, MVRS.BANK3, MVRS.BANKOPPOSITE3],
        [PSN.NEAFRONTSIDE]: [MVRS.TURN3, MVRS.BANK2, MVRS.TURNOPPOSITE2, MVRS.TURN2, MVRS.BANK1, MVRS.TURNRED1],
        [PSN.NEARREARSIDE]: [MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1, MVRS.BANK1, MVRS.TURNRED1],
        [PSN.NEARREAR]: [MVRS.TURNOPPOSITE3, MVRS.TURN3, MVRS.TURNOPPOSITE2, MVRS.TURN2, MVRS.BANK1, MVRS.TURNRED1],
    },

});

export default function Maneuvers(props) {

    /* generates random number between 0 - 5 */
    console.log("Mvr randomized");
    const maneuver = ShipManeuvers[props.shipType][props.position][props.randNum];

    switch (maneuver) {
        case MVRS.STRAIGHT1:
            return <div className="xw-man">1<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT2:
            return <div className="xw-man">2<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT3:
            return <div className="xw-man">3<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT4:
            return <div className="xw-man">4<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT5:
            return <div className="xw-man">5<i className="xwm x-straight"/></div>;
        case MVRS.BANK1:
            return <div className="xw-man">1<i className="xwm x-bankright"/></div>;
        case MVRS.BANK2:
            return <div className="xw-man">2<i className="xwm x-bankright"/></div>;
        case MVRS.BANK3:
            return <div className="xw-man">3<i className="xwm x-bankright"/></div>;
        case MVRS.BANKOPPOSITE3:
            return <div className="xw-man">3<i className="xwm x-bankleft"/></div>;
        case MVRS.TURN1:
            return <div className="xw-man">1<i className="xwm x-turnright"/></div>;
        case MVRS.TURNRED1:
            return <div className="xw-man">1<i className="xwmr x-turnright"/></div>;
        case MVRS.TURN2:
            return <div className="xw-man">2<i className="xwm x-turnright"/></div>;
        case MVRS.TURN3:
            return <div className="xw-man">3<i className="xwm x-turnright"/></div>;
        case MVRS.TURNOPPOSITE2:
            return <div className="xw-man">2<i className="xwm x-turnleft"/> </div>;
        case MVRS.TURNOPPOSITE3:
            return <div className="xw-man">3<i className="xwm x-turnleft"/> </div>;
        case MVRS.SEGNOR3:
            return <div className="xw-man">3<i className="xwmr x-sloopright"/> </div>;
        case MVRS.SEGNOROPPOSITE3:
            return <div className="xw-man">3<i className="xwmr x-sloopleft"/> </div>
        case MVRS.TALLON3:
            return <div className="xw-man">3<i className="xwmr x-trollright"/> </div>;
        case MVRS.KOIOGRAN3:
            return <div className="xw-man">3<i className="xwmr x-kturn"/> </div>;
        case MVRS.KOIOGRAN4:
            return <div className="xw-man">4<i className="xwmr x-kturn"/> </div>;
        case MVRS.KOIOGRAN5:
            return <div className="xw-man">5<i className="xwmr x-kturn"/> </div>;
        case MVRS.STATIONARY:
            return <div className="xw-man"><i className="xwmr x-stop"/> </div>;
        case MVRS.REVERSESTRAIGHT1:
            return <div className="xw-man">1<i className="xwmr x-reversestraight"/> </div>;
        case MVRS.REVERSEBANK1:
            return <div className="xw-man">1<i className="xwmr x-reversebankright"/> </div>;
        case MVRS.REVERSEBANK2:
            return <div className="xw-man">2<i className="xwmr x-reversebankright"/> </div>;
        default:
            console.log("Component Maneuvers didn't recognize maneuver: " + props.maneuver);
    }
}

