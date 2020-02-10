//todo: distiguish between forms of attack (fire arcs, turrets...)

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


