import getHinnyUpgrades from "../../data/hinny/GetHinnyUpgrades";
import {AI} from "../../data/Ships";

export default function getUpgrades(shipType, playersRank, upgradeRandNum, upgradeSource) {
    let upgrades = [];
    console.log("Rank: " + playersRank);

    switch (upgradeSource) {
        case AI.HINNY:
            upgrades = getHinnyUpgrades(shipType, playersRank, upgradeRandNum);
    }

    return upgrades;
}
