export const Ships = Object.freeze({
    TIELN: {
        name: "Tie-Fighter",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIELN",
    },
    TIEIN: {
        name: "Tie-Interceptor",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 3,
        agility: 3,
        id: "TIEIN",
    },
    TIESA: {
        name: "Tie-Bomber",
        initiative: 2,
        shields: 0,
        hull: 6,
        attack: 2,
        agility: 2,
        id: "TIESA",
    },
    VT49: {
        name: "VT-49",
        initiative: 2,
        shields: 4,
        hull: 12,
        attack: 3,
        agility: 0,
        id: "VT49",
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
});