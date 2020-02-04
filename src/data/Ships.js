//todo: distiguish between forms of attack (fire arcs, turrets...)
//todo: note which AI can be used with the ship
import React from "react";

export const Ships = Object.freeze({
    TIELN: {
        name: "TIE/ln Starfighter",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIELN",
        ai: [AI.HINNY, AI.COMM],
    },
    TIEIN: {
        name: "TIE/in Interceptor",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 3,
        agility: 3,
        id: "TIEIN",
        ai: [AI.HINNY, AI.COMM],
    },
    TIESA: {
        name: "TIE/sa Bomber",
        initiative: 2,
        shields: 0,
        hull: 6,
        attack: 2,
        agility: 2,
        id: "TIESA",
        ai: [AI.HINNY, AI.COMM],
    },
    VT49: {
        name: "VT-49",
        initiative: 2,
        shields: 4,
        hull: 12,
        attack: 3,
        agility: 0,
        id: "VT49",
        ai: [AI.HINNY, AI.COMM],
    },
    TIEADVX: {
        name: "Tie Advanced x1",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIEADVX",
        ai: [AI.COMM],
    },
    TIEDEF: {
        name: "TIE/D Defender",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIEADVX",
        ai: [AI.COMM],
    },
    TIEPH: {
        name: "TIE/PH Phantom",
        initiative: 3,
        shields: 2,
        hull: 3,
        attack: 3,
        agility: 2,
        id: "TIEPH",
        ai: [AI.COMM],
    },
    LAMBDA: { // todo distinguish fire arcs (probably check for different attack possibilities)
        name: "Lambda-class T-4A Shuttle",
        initiative: 1,
        shields: 4,
        hull: 10,
        attack: 3/2,
        agility: 1,
        id: "LAMBDA",
        ai: [AI.COMM],
    },
});

export const Stats = Object.freeze({
    name: "name",
    initiative: "initiative",
    shields: "shields",
    hull: "hull",
    attack: "attack",
    agility: "agility",
    id: "id",
    selTarget: "selTarget",
    tokenId: "token Id",
    ai: "ship AI",
});

export const AI =  Object.freeze({
    HINNY: "Hinny",
    COMM: "Community version",
});

export const PSN = Object.freeze({
    R4FRONT: "far front",
    R4FRONTSIDE: "far front side",
    R4REARSIDE: "far rear side",
    R4REAR: "far rear",
    R4BULL: "far bulls eye",
    R3FRONT: "middle front",
    R3FRONTSIDE: "middle front side",
    R3REARSIDE: "middle rear side",
    R3REAR: "middle rear",
    R3BULL: "middle bulls eye",
    R1FRONT: "close front",
    R1FRONTSIDE: "close front side",
    R1REARSIDE: "close rear side",
    R1REAR: "close rear",
    R1BULL: "close bulls eye",
    STRSBULL: "stressed bulls-eye",
    STRSFRONT: "stressed front",
    STRSFRONTSIDE: "stressed front side",
    STRSREARSIDE: "stressed rear side",
    STRSREAR: "stressed rear"
});

export const MVRS = Object.freeze({
    STRAIGHT1: "straight 1",
    STRAIGHT1BLUE: "blue straight 1",
    STRAIGHT2: "straight 2",
    STRAIGHT2BLUE: "blue straight 2",
    STRAIGHT3: "straight 3",
    STRAIGHT3BLUE: "blue straight 3",
    STRAIGHT4: "straight 4",
    STRAIGHT4BLUE: "blue straight 4",
    STRAIGHT5: "straight 5",
    STRAIGHT5BLUE: "blue straight 5",
    BANK1: "bank 1",
    BANK1OPPOSITE: "opposite bank 1",
    BANK1BLUE: "blue bank 1",
    BANK1BLUEOPPOSITE: "opposite blue bank 1",
    BANK2: "bank 2",
    BANK2OPPOSITE: "opposite bank 2",
    BANK2BLUE: "blue bank 2",
    BANK2BLUEOPPOSITE: "oppposite blue bank 2",
    BANK3: "bank 3",
    BANK3OPPOSITE: "opposite bank 3",
    BANK3RED: "red bank 3",
    TURN1: "turn 1",
    TURN1RED: "turn 1 red",
    TURN2: "turn 2",
    TURN2RED: "red turn 2",
    TURN2BLUE: "blue turn 2",
    TURN2BLUEOPPOSITE: "opposite blue turn 2",
    TURN3: "turn 3",
    TURN2OPPOSITE: "opposite turn 2",
    TURN3OPPOSITE: "opposite turn 3",
    SEGNOR3RED: "segnor 3",
    SEGNOR3REDOPPOSITE: "opposite segnor 3",
    TALLON3RED: "tallon 3",
    TALLON3REDOPPOSITE: "opposite tallon 3",
    KOIOGRAN3RED: "red koiogran 3",
    KOIOGRAN4: "koiogran 4",
    KOIOGRAN4RED: "red koiogran 4",
    KOIOGRAN5RED: "red koiogran 5",
    STATIONARYRED: "stationary",
    REVERSESTRAIGHT1RED: "reverse straight 1",
    REVERSEBANK1RED: "reverse bank 1",
    REVERSEBANK2RED: "reverse bank 2",
});

export default function SquadManeuver(props) {
    //todo send used AI engine in props
    /* generates random number between 0 - 5 */
    console.log("Mvr randomized");
    const maneuver = props.aiEngine[props.shipType][props.position][props.randNum];

    switch (maneuver) {
        case MVRS.STRAIGHT1:
            return <div className="xw-man">1<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT1BLUE:
            return <div className="xw-man">1<i className="xwmb x-straight"/></div>;
        case MVRS.STRAIGHT2:
            return <div className="xw-man">2<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT2BLUE:
            return <div className="xw-man">2<i className="xwmb x-straight"/></div>;
        case MVRS.STRAIGHT3:
            return <div className="xw-man">3<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT3BLUE:
            return <div className="xw-man">3<i className="xwmb x-straight"/></div>;
        case MVRS.STRAIGHT4:
            return <div className="xw-man">4<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT5:
            return <div className="xw-man">5<i className="xwm x-straight"/></div>;
        case MVRS.STRAIGHT5BLUE:
            return <div className="xw-man">5<i className="xwmb x-straight"/></div>;
        case MVRS.BANK1:
            return <div className="xw-man">1<i className="xwm x-bankright"/></div>;
        case MVRS.BANK1OPPOSITE:
            return <div className="xw-man">1<i className="xwm x-bankleft"/></div>;
        case MVRS.BANK1BLUE:
            return <div className="xw-man">1<i className="xwmb x-bankright"/></div>;
        case MVRS.BANK1BLUEOPPOSITE:
            return <div className="xw-man">1<i className="xwmb x-bankleft"/></div>;
        case MVRS.BANK2:
            return <div className="xw-man">2<i className="xwm x-bankright"/></div>;
        case MVRS.BANK2OPPOSITE:
            return <div className="xw-man">2<i className="xwm x-bankleft"/></div>;
        case MVRS.BANK2BLUE:
            return <div className="xw-man">2<i className="xwmb x-bankright"/></div>;
        case MVRS.BANK2BLUEOPPOSITE:
            return <div className="xw-man">2<i className="xwmb x-bankleft"/></div>;
        case MVRS.BANK3:
            return <div className="xw-man">3<i className="xwm x-bankright"/></div>;
        case MVRS.BANK3RED:
            return <div className="xw-man">3<i className="xwmr x-bankright"/></div>;
        case MVRS.BANK3OPPOSITE:
            return <div className="xw-man">3<i className="xwm x-bankleft"/></div>;
        case MVRS.TURN1:
            return <div className="xw-man">1<i className="xwm x-turnright"/></div>;
        case MVRS.TURN1RED:
            return <div className="xw-man">1<i className="xwmr x-turnright"/></div>;
        case MVRS.TURN2:
            return <div className="xw-man">2<i className="xwm x-turnright"/></div>;
        case MVRS.TURN2RED:
            return <div className="xw-man">2<i className="xwmr x-turnright"/></div>;
        case MVRS.TURN2BLUE:
            return <div className="xw-man">2<i className="xwmb x-turnright"/></div>;
        case MVRS.TURN2BLUEOPPOSITE:
            return <div className="xw-man">2<i className="xwmb x-turnleft"/></div>;
        case MVRS.TURN3:
            return <div className="xw-man">3<i className="xwm x-turnright"/></div>;
        case MVRS.TURN2OPPOSITE:
            return <div className="xw-man">2<i className="xwm x-turnleft"/> </div>;
        case MVRS.TURN3OPPOSITE:
            return <div className="xw-man">3<i className="xwm x-turnleft"/> </div>;
        case MVRS.SEGNOR3RED:
            return <div className="xw-man">3<i className="xwmr x-sloopright"/> </div>;
        case MVRS.SEGNOR3REDOPPOSITE:
            return <div className="xw-man">3<i className="xwmr x-sloopleft"/> </div>
        case MVRS.TALLON3RED:
            return <div className="xw-man">3<i className="xwmr x-trollright"/> </div>;
        case MVRS.TALLON3REDOPPOSITE:
            return <div className="xw-man">3<i className="xwmr x-trollleft"/> </div>;
        case MVRS.KOIOGRAN3RED:
            return <div className="xw-man">3<i className="xwmr x-kturn"/> </div>;
        case MVRS.KOIOGRAN4RED:
            return <div className="xw-man">4<i className="xwmr x-kturn"/> </div>;
        case MVRS.KOIOGRAN5RED:
            return <div className="xw-man">5<i className="xwmr x-kturn"/> </div>;
        case MVRS.STATIONARYRED:
            return <div className="xw-man"><i className="xwmr x-stop"/> </div>;
        case MVRS.REVERSESTRAIGHT1RED:
            return <div className="xw-man">1<i className="xwmr x-reversestraight"/> </div>;
        case MVRS.REVERSEBANK1RED:
            return <div className="xw-man">1<i className="xwmr x-reversebankright"/> </div>;
        case MVRS.REVERSEBANK2RED:
            return <div className="xw-man">2<i className="xwmr x-reversebankright"/> </div>;
        default:
            console.log("Component Maneuvers didn't recognize maneuver: " + props.maneuver);
    }
}