import React from "react";

export const AI = Object.freeze({
        HINNY: "Hinny's",
        FGA: "FGA",
        SEPARATISTS: "Separatist"
    }
);

export const UpgradesSource = Object.freeze({
    HINNY: "Hinny's upg.",
    COMMUNITY: "Community upg.",
    FGA: "FGA upg.",
    SEPARATIST: "Separatists' upg."
});

export const AttackType = Object.freeze({
    frontArc: <i className="xwiv x-frontarc"/>,
    rearArc: <i className="xwiv x-reararc"/>,
    turret: <i className="xwiv x-singleturretarc"/>,
    doubleturret: <i className="xwiv x-doubleturretarc"/>,
});

export const Locations = Object.freeze({
    SQUADRONS: "squads",
    CAMPAIGN_SETTINGS: "campaign settings",
});