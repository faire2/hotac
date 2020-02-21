import getHinnyUpgrades from "../../data/hinny/GetHinnyUpgrades";
import {AI} from "../../data/Ships";

export default function getUpgrades(shipType, upgradeRandNum, playersRank, upgradeSource) {
    let upgrades = [];

    switch (upgradeSource) {
        case AI.HINNY:
            upgrades = getHinnyUpgrades(shipType, upgradeRandNum, playersRank);
    }

    return upgrades;
}
