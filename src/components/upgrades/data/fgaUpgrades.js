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

export const fgaUpgrades = Object.freeze({
    TIELN:
        [
            [
                [HinnyUpgradesList.nightBeast, 2, 2],
                [HinnyUpgradesList.predator, 2, 2],
                [HinnyUpgradesList.shieldUpgrade, 2, 2],
                [HinnyUpgradesList.hullUpgrade, 2, 2]
            ],
            [
                [HinnyUpgradesList.outmaneuver, 3, 2],
                [HinnyUpgradesList.shieldUpgrade, 3, 2],
                [HinnyUpgradesList.hullUpgrade, 3, 2]
            ],
        ],
    TIEIN:
        [
            [
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.hullUpgrade, 1, 2],
                [HinnyUpgradesList.soontirFel, 6, 4],
                [HinnyUpgradesList.outmaneuver, 6, 4],
                [HinnyUpgradesList.whisper, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.hullUpgrade, 1, 2],
                [HinnyUpgradesList.shieldUpgrade, 4, 4],
                [HinnyUpgradesList.outmaneuver, 4, 4],
                [HinnyUpgradesList.gideonHask, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.stealthDevice, 1, 2],
                [HinnyUpgradesList.soontirFel, 6, 4],
                [HinnyUpgradesList.hullUpgrade, 6, 4],
                [HinnyUpgradesList.scourgeSkutu, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
                [HinnyUpgradesList.predator, 7, 6],
            ],
            [
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.stealthDevice, 1, 2],
                [HinnyUpgradesList.nightBeast, 5, 4],
                [HinnyUpgradesList.hullUpgrade, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.maulerMithel, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgradesList.hullUpgrade, 1, 2],
                [HinnyUpgradesList.stealthDevice, 1, 2],
                [HinnyUpgradesList.pureSabaac, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.nightBeast, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.hullUpgrade, 1, 2],
                [HinnyUpgradesList.stealthDevice, 1, 2],
                [HinnyUpgradesList.captainOicunn, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.intimidation, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
        ],
    TIEADVX:
        [
            [
                [HinnyUpgradesList.concussionMissiles, 1, 2],
                [HinnyUpgradesList.marekSteele, 5, 4],
                [HinnyUpgradesList.outmaneuver, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.fireControlSystem, 5, 4],
                [HinnyUpgradesList.soontirFel, 7, 6],
                [HinnyUpgradesList.outmaneuver, 7, 6],
            ],
            [
                [HinnyUpgradesList.fireControlSystem, 3, 2],
                [HinnyUpgradesList.zertikStrom, 3, 4],
                [HinnyUpgradesList.outmaneuver, 3, 4],
                [HinnyUpgradesList.shieldUpgrade, 3, 4],
                [HinnyUpgradesList.clusterMissiles, 3, 4],
                [HinnyUpgradesList.maulerMithel, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.clusterMissiles, 1, 2],
                [HinnyUpgradesList.munitionFailsafe, 1, 2],
                [HinnyUpgradesList.marekSteele, 5, 4],
                [HinnyUpgradesList.hullUpgrade, 5, 4],
                [HinnyUpgradesList.whisper, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.fireControlSystem, 3, 2],
                [HinnyUpgradesList.gideonHask, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.clusterMissiles, 5, 4],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
                [HinnyUpgradesList.outmaneuver, 7, 6],
                [HinnyUpgradesList.predator, 7, 6],
            ],
        ],
    TIESA:
        [
            [
                [HinnyUpgradesList.protonTorpedoes, 1, 2],
                [HinnyUpgradesList.clusterMissiles, 1, 2],
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.captainJonus, 4, 4],
                [HinnyUpgradesList.clusterMissiles, 4, 4],
                [HinnyUpgradesList.shieldUpgrade, 4, 4],
                [HinnyUpgradesList.munitionFailsafe, 4, 4],
                [HinnyUpgradesList.maulerMithel, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.advancedProtonTorpedoes, 1, 2],
                [HinnyUpgradesList.concussionMissiles, 1, 2],
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.gideonHask, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.predator, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.protonTorpedoes, 1, 2],
                [HinnyUpgradesList.ionMissiles, 1, 2],
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.majorRhymer, 4, 4],
                [HinnyUpgradesList.intimidation, 4, 4],
                [HinnyUpgradesList.shieldUpgrade, 4, 4],
                [HinnyUpgradesList.hullUpgrade, 4, 4],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.protonTorpedoes, 1, 2],
                [HinnyUpgradesList.concussionMissiles, 1, 2],
                [HinnyUpgradesList.shieldUpgrade, 1, 2],
                [HinnyUpgradesList.whisper, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.soontirFel, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
        ],
    TIEDEF:
        [
            [
                [HinnyUpgradesList.heavyLaserCannor, 1, 2],
                [HinnyUpgradesList.rexlerBrath, 7, 4],
                [HinnyUpgradesList.captainOicunn, 7, 6],
                [HinnyUpgradesList.fireControlSystem, 7, 6],
                [HinnyUpgradesList.concussionMissiles, 7, 6],
                [HinnyUpgradesList.munitionFailsafe, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgradesList.fireControlSystem, 3, 2],
                [HinnyUpgradesList.nightBeast, 7, 4],
                [HinnyUpgradesList.maulerMithel, 7, 6],
                [HinnyUpgradesList.clusterMissiles, 7, 6],
                [HinnyUpgradesList.munitionFailsafe, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.concussionMissiles, 1, 2],
                [HinnyUpgradesList.gideonHask, 7, 4],
                [HinnyUpgradesList.fireControlSystem, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.clusterMissiles, 1, 2],
                [HinnyUpgradesList.pureSabaac, 6, 4],
                [HinnyUpgradesList.predator, 6, 4],
                [HinnyUpgradesList.fireControlSystem, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
        ],
    TIEPH:
        [
            [
                [HinnyUpgradesList.collisionDetector, 1, 2],
                [HinnyUpgradesList.echo, 4, 4],
                [HinnyUpgradesList.outmaneuver, 4, 4],
                [HinnyUpgradesList.stealthDevice, 4, 4],
                [HinnyUpgradesList.shieldUpgrade, 4, 4],
                [HinnyUpgradesList.pureSabaac, 7, 6],
            ],
            [
                [HinnyUpgradesList.advancedSensors, 1, 2],
                [HinnyUpgradesList.whisper, 5, 4],
                [HinnyUpgradesList.juke, 5, 4],
                [HinnyUpgradesList.hullUpgrade, 5, 4],
                [HinnyUpgradesList.rexlerBrath, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
            [
                [HinnyUpgradesList.advancedSensors, 1, 2],
                [HinnyUpgradesList.captainOicunn, 5, 4],
                [HinnyUpgradesList.intimidation, 5, 4],
                [HinnyUpgradesList.hullUpgrade, 5, 4],
                [HinnyUpgradesList.maulerMithel, 7, 6],
                [HinnyUpgradesList.shieldUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.initiative, 4, 2],
                [HinnyUpgradesList.captainFeroph, 4, 4],
                [HinnyUpgradesList.darthVader, 4, 4],
                [HinnyUpgradesList.collisionDetector, 4, 4],
                [HinnyUpgradesList.juke, 4, 4],
                [HinnyUpgradesList.majorRhymer, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.fireControlSystem, 1, 2],
                [HinnyUpgradesList.echo, 4, 4],
                [HinnyUpgradesList.stealthDevice, 4, 4],
                [HinnyUpgradesList.perceptiveCopilot, 4, 4],
                [HinnyUpgradesList.captainFeroph, 7, 6],
                [HinnyUpgradesList.hullUpgrade, 7, 6],
            ],
            [
                [HinnyUpgradesList.initiative, 4, 2],
                [HinnyUpgradesList.whisper, 5, 4],
                [HinnyUpgradesList.fireControlSystem, 5, 4],
                [HinnyUpgradesList.juke, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.shieldUpgrade, 5, 4],
                [HinnyUpgradesList.gideonHask, 7, 6],
                [HinnyUpgradesList.stealthDevice, 7, 6],
            ],
        ],
    LAMBDA:
        [
            [
                [HinnyUpgradesList.heavyLaserCannor, 1, 2],
                [HinnyUpgradesList.electronicBaffle, 1, 2],
                [HinnyUpgradesList.captainOicunn, 4, 4],
                [HinnyUpgradesList.admiralSloane, 4, 4],
                [HinnyUpgradesList.hullUpgrade, 4, 4],
            ],
            [
                [HinnyUpgradesList.perceptiveCopilot, 1, 2],
                [HinnyUpgradesList.howlRunner, 4, 4],
                [HinnyUpgradesList.heavyLaserCannor, 4, 4],
                [HinnyUpgradesList.hullUpgrade, 4, 4],
            ],
        ],
    VT49:
        [
            [
                [HinnyUpgradesList.veteranTurretGunner, 1, 2],
                [HinnyUpgradesList.advancedProtonTorpedoes, 1, 2],
                [HinnyUpgradesList.captainOicunn, 3, 4],
                [HinnyUpgradesList.admiralSloane, 3, 4],
                [HinnyUpgradesList.perceptiveCopilot, 3, 4],
                [HinnyUpgradesList.tacticalScrambler, 3, 4],
                [HinnyUpgradesList.ruthless, 3, 4],
                [HinnyUpgradesList.whisper, 3, 4],
            ],
            [
                [HinnyUpgradesList.captainOicunn, 3, 2],
                [HinnyUpgradesList.veteranTurretGunner, 3, 2],
                [HinnyUpgradesList.hullUpgrade, 5, 4],
                [HinnyUpgradesList.howlRunner, 5, 4],
                [HinnyUpgradesList.protonTorpedoes, 5, 4],
                [HinnyUpgradesList.munitionFailsafe, 5, 4],
                [HinnyUpgradesList.admiralSloane, 5, 4],
            ],
        ]
});