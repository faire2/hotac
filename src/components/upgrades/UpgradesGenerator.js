import {Ships} from "../../data/Ships";
import {HinnyUpgradesList} from "../../data/hinny/HinnyUpgradesList";
import {getAdjustedRandomNumber, getFgaUpgrades} from "./upgradesFunctins";
import {fgaUpgrades} from "./data/fgaUpgrades";
import {hinnyUpgrades} from "./data/hinnyUpgrades";
import {communityUpgrades} from "./data/communityUpgrades";
import {UpgradesSource} from "../../enums";
import {sepaUpgrades} from "./data/sepaUpgrades";

export default function getUpgrades(shipType, playersRank, upgradesSource, isElite) {
    console.log("*** GET UpgradesSource: ***");
    console.log("shipType, playersIni, upgradesSource, isElite: ");
    console.log(shipType + ", " + playersRank + ", " + upgradesSource + ", " + isElite);

    const shipTypeUpgrades = getShipTypeUpgrades(shipType, upgradesSource);
    const adjustedRandNum = getAdjustedRandomNumber(shipTypeUpgrades.length);
    let upgrades = [...shipTypeUpgrades[adjustedRandNum]];
    console.log("Upgrades: ");

    /* if ship is not elite, it will only get basic upgrade */
    if (isElite !== true) {
        upgrades.length = 1
    }

    /* only upgrades relevant to the players" rank are returned */

    /* Hinnys upgrades */
    if (upgradesSource === UpgradesSource.HINNY) {
        if (isElite !== true) {
            upgrades.length = 1;
        } else if (playersRank <= upgrades.length) {
            upgrades.length = (playersRank === 1 ? 2 : playersRank);
        }
    }

    /* Community upgrades */
    if (upgradesSource === UpgradesSource.COMMUNITY) {
        if (isElite !== true || shipType === Ships.TIELN.id) {
            upgrades.length = 1;
        } else if (playersRank <= upgrades.length) {
            upgrades.length = (playersRank < 3 ? 3 : playersRank + 1);
        }
    }

    /* FGA upgrades - relatively complex, table can be found above const fgaUpgrades */
    if (upgradesSource === UpgradesSource.FGA) {
        if (shipType === Ships.TIELN.id) {
            if (playersRank < 7) {
                upgrades[0] = [HinnyUpgradesList.noUpgrade, 1, 0];
                upgrades.length = 1;
            }
            if (playersRank > 5) {
                upgrades.unshift([HinnyUpgradesList.shieldUpgrade, 1, 0])
            }
        } else {
            if (playersRank < 2) {
                if (isElite !== true) {
                    upgrades[0] = [HinnyUpgradesList.noUpgrade, 1, 0];
                    upgrades.length = 1;
                } else {
                    upgrades = getFgaUpgrades(2, upgrades);
                }
            } else if (playersRank < 5) {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(1, upgrades);
                } else {
                    upgrades = getFgaUpgrades(2, upgrades);
                }
            } else if (playersRank < 6) {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(1, upgrades);
                } else {
                    upgrades = getFgaUpgrades(3, upgrades);
                }
            } else {
                if (isElite !== true) {
                    upgrades = getFgaUpgrades(2, upgrades);
                } else {
                    upgrades = getFgaUpgrades(3, upgrades);
                }
            }
        }
        if (playersRank > 6) {
            upgrades.unshift([HinnyUpgradesList.shieldRegeneration, 1, 0])
        }
    }

    for (const upgrade of upgrades) {
        console.log(upgrade[0]["skillName"]);
    }

    return upgrades;
}

function getShipTypeUpgrades(shipType, upgradesSource) {
    let shipTypeUpgrades = [];
    switch (upgradesSource) {
        case UpgradesSource.HINNY:
            shipTypeUpgrades = hinnyUpgrades[shipType];
            break;
        case UpgradesSource.COMMUNITY:
            shipTypeUpgrades = communityUpgrades[shipType];
            break;
        case UpgradesSource.FGA:
            shipTypeUpgrades = fgaUpgrades[shipType];
            break;
        case UpgradesSource.SEPARATIST:
            shipTypeUpgrades = sepaUpgrades[shipType];
            break;
        default:
            shipTypeUpgrades = [[]];
            console.log("GetUpgrades didn't recognize upgrades source: " + upgradesSource);
    }
    return shipTypeUpgrades;
}
