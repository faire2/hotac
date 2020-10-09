/*
XPs: 2xp / threat level (TL), which roughly corresponds to the players" initiative
NES = non-elite SHIP, ES = elite ship, LN = tie-fighter, PC = pilot card, UL = upgrade level
TL1: LN without PC, NES no PC, ES UL = lowest + 1
TL2-4: LN without PC, NES UL = lowest, ES UL = lowest + 1
TL5: LN without PC, NES UL = lowest, ES UL = lowest + 2
TL6: LN without PC, NES UL = lowest + 1, ES UL = lowest + 2, TIELN have Shield Upgrade
7+: LN UL = lowest, NES UL = lowest + 1, ES UL = lowest + 2, TIELN have Shield Upgrade and Shield Regenerator
*/
//todo no xp for TIE/ln without PC!
import {HinnyUpgradesList} from "../../../data/hinny/HinnyUpgradesList";

export const sepaUpgrades = Object.freeze({
    VULTURE:
        [
            [
                [HinnyUpgradesList.noUpgrade, 2, 2],
            ],
        ],
});