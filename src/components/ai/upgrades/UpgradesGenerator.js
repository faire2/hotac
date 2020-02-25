import getHinnyUpgrades from "../../../data/hinny/GetHinnyUpgrades";
import {UPGRADES} from "../../../data/Ships";

export default function getUpgrades(shipType, playersRank, upgradeSource, isElite) {
    let upgrades = [];
    const upgradeRandNum = Math.floor(Math.random() * 10) + 1;

    switch (upgradeSource) {
        case UPGRADES.HINNY:
            return getHinnyUpgrades(shipType, playersRank, upgradeRandNum, isElite);
        default:
            console.log("Function getUpgrades didn't recognize upgrades source: " + upgradeSource);
    }

    return upgrades;
}
