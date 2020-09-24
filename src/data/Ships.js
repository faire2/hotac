import React from "react";

export const AI = Object.freeze({
    HINNY: "Hinny's",
    FGA: "FGA",
    }
);

export const UpgradesSource = Object.freeze({
    HINNY: "Hinny's upg.",
    COMMUNITY: "Community upg.",
    FGA: "FGA upg.",
});

export const AttackType = Object.freeze({
    frontArc: <i className="xwiv x-frontarc"/>,
    rearArc: <i className="xwiv x-reararc"/>,
    turret: <i className="xwiv x-singleturretarc"/>,
    doubleturret: <i className="xwiv x-doubleturretarc"/>,
});

export const Ships = Object.freeze({
    TIELN: {
        name: "TIE/ln Starfighter",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: [{attack: AttackType.frontArc, damage: 2}],
        agility: 3,
        id: "TIELN",
        ai: [AI.HINNY, AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.HINNY, UpgradesSource.COMMUNITY],
    },
    TIEIN: {
        name: "TIE/in Interceptor",
        initiative: 2,
        shields: 0,
        hull: 3,
        attack: [{attack: AttackType.frontArc, damage: 3}],
        agility: 3,
        id: "TIEIN",
        ai: [AI.HINNY, AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.HINNY, UpgradesSource.COMMUNITY],
    },
    TIESA: {
        name: "TIE/sa Bomber",
        initiative: 2,
        shields: 0,
        hull: 6,
        attack: [{attack: AttackType.frontArc, damage: 2}],
        agility: 2,
        id: "TIESA",
        ai: [AI.HINNY, AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.HINNY, UpgradesSource.COMMUNITY],
    },
    VT49: {
        name: "VT-49",
        initiative: 2,
        shields: 4,
        hull: 12,
        attack: [{attack: AttackType.doubleturret, damage: 3}],
        agility: 0,
        id: "VT49",
        ai: [AI.HINNY, AI.FGA],
        upgrades: [UpgradesSource.HINNY, UpgradesSource.FGA],
    },
    TIEADVX: {
        name: "Tie Advanced x1",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: [{attack: AttackType.frontArc, damage: 2}],
        agility: 3,
        id: "TIEADVX",
        ai: [AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.COMMUNITY],
    },
    TIEDEF: {
        name: "TIE/D Defender",
        initiative: 2,
        shields: 2,
        hull: 3,
        attack: [{attack: AttackType.frontArc, damage: 2}],
        agility: 3,
        id: "TIEDEF",
        ai: [AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.COMMUNITY],
    },
    TIEPH: { // todo has a system phase and an end phase  - it should be noted here and then rendered as an optional component
        name: "TIE/PH Phantom",
        initiative: 3,
        shields: 2,
        hull: 3,
        attack: [{attack: AttackType.frontArc, damage: 3}],
        agility: 2,
        id: "TIEPH",
        ai: [AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.COMMUNITY],
    },
    LAMBDA: {
        name: "Lambda-class T-4A Shuttle",
        initiative: 1,
        shields: 4,
        hull: 10,
        attack: [{attack: AttackType.frontArc, damage: 3}, {attack: AttackType.rearArc, damage: 2}],
        agility: 1,
        id: "LAMBDA",
        ai: [AI.FGA],
        upgrades: [UpgradesSource.FGA, UpgradesSource.COMMUNITY],
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