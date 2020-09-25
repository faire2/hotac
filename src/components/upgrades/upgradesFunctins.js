export function getAdjustedRandomNumber(upgradesLength) {
    const upgradeRandNum = Math.floor(Math.random() * 10) + 1;

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = Math.round(upgradeRandNum / 10 * upgradesLength) - 1;

    /* some numbers may be rounded down to - 1 (todo rewrite function to Math.floor) */
    if (adjustedRandNum < 0) {
        adjustedRandNum = 0
    }
    return adjustedRandNum;
}

export function getFgaUpgrades(xpLevel, upgrades) {
    if (xpLevel === 1) {
        return upgrades.filter(upgrade => upgrade[2] < 4)
    } else if (xpLevel === 2) {
        return upgrades.filter(upgrade => upgrade[2] < 6)
    } else if (xpLevel === 3) {
        return upgrades
    } else {
        console.log("Function getFgaUpgrades received unacceptable parameter xpLevel: " + xpLevel);
    }
}