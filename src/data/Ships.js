export const Ships = Object.freeze({
    TIELN: {
        name: "Tie-Fighter",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 2,
        agility: 3,
        id: "TIELN",
        selTarget: ["Nearest enemy ship in your firing arc.", "Nearest enemy ship."],
        selAction: [""]
    },
    TIEIN: {
        name: "Tie-Interceptor",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: 3,
        agility: 3,
        id: "TIEIN",
        selTarget: ["Nearest enemy ship in your firing arc.", "Nearest enemy ship."]
    },
    TIESA: {
        name: "Tie-Bomber",
        initiative: 2,
        shields: 0,
        hull: 6,
        attack: 2,
        agility: 2,
        id: "TIESA",
        selTarget: ["Locked enemy ship at range 1-3", "Nearest enemy ship in your firing arc.", "Nearest enemy ship."]
    },
    VT49: {
        name: "Tie-Bomber",
        initiative: 2,
        shields: 4,
        hull: 12,
        attack: 3,
        agility: 0,
        id: "VT49",
        selTarget: ["Nearest enemy ship."]

    },
});

export const Abi = Object.freeze({
    name: "name",
    initiative: "initiative",
    shields: "shields",
    hull: "hull",
    attack: "attack",
    agility: "agility",
    id: "id",
    selTarget: "selTarget",
});