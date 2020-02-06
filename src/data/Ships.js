//todo: distiguish between forms of attack (fire arcs, turrets...)
//todo: each ship could count the stresses too...

export const AI =  Object.freeze({
    HINNY: "Hinny AI",
    FGA: "FGA version AI",
});

export const Ships = Object.freeze({
    TIELN: {
        name: "TIE/ln Starfighter",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIELN",
        ai: [AI.HINNY, AI.FGA],
    },
    TIEIN: { //todo create a new component for performing the attack - maybe a dice roller?
        name: "TIE/in Interceptor",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 3,
        agility: 3,
        id: "TIEIN",
        ai: [AI.HINNY, AI.FGA],
    },
    TIESA: {
        name: "TIE/sa Bomber",
        initiative: 2,
        shields: 0,
        hull: 6,
        attack: 2,
        agility: 2,
        id: "TIESA",
        ai: [AI.HINNY, AI.FGA],
    },
    VT49: { // todo has a turret, see the lambda
        name: "VT-49",
        initiative: 2,
        shields: 4,
        hull: 12,
        attack: 3,
        agility: 0,
        id: "VT49",
        ai: [AI.HINNY, AI.FGA],
    },
    TIEADVX: {
        name: "Tie Advanced x1",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIEADVX",
        ai: [AI.FGA],
    },
    TIEDEF: {
        name: "TIE/D Defender",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIEADVX",
        ai: [AI.FGA],
    },
    TIEPH: { // todo has a system phase and an end phase  - it should be noted here and then rendered as an optional component
        name: "TIE/PH Phantom",
        initiative: 3,
        shields: 2,
        hull: 3,
        attack: 3,
        agility: 2,
        id: "TIEPH",
        ai: [AI.FGA],
    },
    LAMBDA: { // todo distinguish fire arcs (probably check for different attack possibilities)
        name: "Lambda-class T-4A Shuttle",
        initiative: 1,
        shields: 4,
        hull: 10,
        attack: 3/2,
        agility: 1,
        id: "LAMBDA",
        ai: [AI.FGA],
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
    tokenId: "tokenId",
    ai: "ai",
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

