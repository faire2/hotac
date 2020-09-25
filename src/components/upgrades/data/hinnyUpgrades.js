/* Each skill is specified by its description, initiative and XP. */
import {HinnyUpgradesList} from "../../../data/hinny/HinnyUpgradesList";

export const hinnyUpgrades = Object.freeze({
    TIELN:
        [
            [
                [{skillName: "-", skillDescription: "No upgrade equipped."}, 1, 3]
            ]
        ],
    TIEIN:
        [
            [
                [HinnyUpgradesList.hullUpgrade, 2, 6],
                [HinnyUpgradesList.outmaneuver, 3, 12],
                [HinnyUpgradesList.shieldUpgrade, 4, 14],
                [HinnyUpgradesList.turrPhennir, 5, 16],
                [HinnyUpgradesList.marksmanship, 6, 18],
                [HinnyUpgradesList.gideonHask, 7, 20]
            ],
            [
                [HinnyUpgradesList.crackShot, 1, 5],
                [HinnyUpgradesList.hullUpgrade, 2, 10],
                [HinnyUpgradesList.daredevil, 3, 12],
                [HinnyUpgradesList.trickShot, 4, 14],
                [HinnyUpgradesList.staticDischargeVanes, 5, 16],
                [HinnyUpgradesList.mauler, 6, 18]
            ],
            [
                [HinnyUpgradesList.hullUpgrade, 1, 5],
                [HinnyUpgradesList.wampa, 2, 10],
                [HinnyUpgradesList.ruthless, 3, 12],
                [HinnyUpgradesList.nightBeast, 4, 14],
                [HinnyUpgradesList.shieldUpgrade, 5, 16],
                [HinnyUpgradesList.juke, 6, 18]
            ],
            [
                [HinnyUpgradesList.crackShot, 2, 6],
                [HinnyUpgradesList.shieldUpgrade, 3, 12],
                [HinnyUpgradesList.predator, 4, 14],
                [HinnyUpgradesList.afterburners, 5, 16],
                [HinnyUpgradesList.juke, 6, 18],
                [HinnyUpgradesList.soontirFel, 7, 20]
            ],
            [
                [HinnyUpgradesList.stealthDevice, 2, 6],
                [HinnyUpgradesList.ruthless, 3, 12],
                [HinnyUpgradesList.valenRudor, 4, 14],
                [HinnyUpgradesList.hullUpgrade, 5, 16],
                [HinnyUpgradesList.outmaneuver, 6, 18],
                [HinnyUpgradesList.scourgeSkutu, 5, 20]
            ],
            [
                [HinnyUpgradesList.stealthDevice, 1, 5],
                [HinnyUpgradesList.afterburners, 2, 10],
                [HinnyUpgradesList.loneWolf, 3, 12],
                [HinnyUpgradesList.elusive, 4, 14],
                [HinnyUpgradesList.marksmanship, 5, 16],
                [HinnyUpgradesList.seynMarana, 6, 18]
            ]
        ],
    TIESA:
        [
            [
                [HinnyUpgradesList.protonBombs, 2, 6],
                [HinnyUpgradesList.clusterMissiles, 3, 12],
                [HinnyUpgradesList.saturationSalvo, 4, 14],
                [HinnyUpgradesList.debrisGambit, 6, 15],
                [HinnyUpgradesList.protonTorpedoes, 6, 18],
                [HinnyUpgradesList.munitionFailsafe, 7, 20]
            ],
            [
                [HinnyUpgradesList.plasmaTorpedoes, 2, 6],
                [HinnyUpgradesList.connerNets, 3, 12],
                [HinnyUpgradesList.captainJonus, 4, 14],
                [HinnyUpgradesList.shieldUpgrade, 5, 16],
                [HinnyUpgradesList.diamondBoronMissiles, 6, 18],
                [HinnyUpgradesList.swarmTactics, 7, 20]
            ],
            [
                [HinnyUpgradesList.protonBombs, 2, 6],
                [HinnyUpgradesList.protonTorpedoes, 2, 10],
                [HinnyUpgradesList.deathFire, 2, 10],
                [HinnyUpgradesList.skilledBombardier, 4, 14],
                [HinnyUpgradesList.electroProtonBomb, 4, 15],
                [HinnyUpgradesList.ruthless, 6, 17]
            ],
            [
                [HinnyUpgradesList.ionTorpedoes, 2, 6],
                [HinnyUpgradesList.proximityMines, 3, 12],
                [HinnyUpgradesList.skilledBombardier, 3, 13],
                [HinnyUpgradesList.connerNets, 4, 16],
                [HinnyUpgradesList.concussionMissiles, 5, 17],
                [HinnyUpgradesList.elusive, 6, 19]
            ],
            [
                [HinnyUpgradesList.clusterMissiles, 2, 6],
                [HinnyUpgradesList.majorRhymer, 3, 12],
                [HinnyUpgradesList.advancedProtonTorpedoes, 3, 13],
                [HinnyUpgradesList.bombletGenerator, 4, 15],
                [HinnyUpgradesList.marksmanship, 5, 17],
                [HinnyUpgradesList.shieldUpgrade, 6, 19]
            ],
            [
                [HinnyUpgradesList.barrageMissiles, 2, 6],
                [HinnyUpgradesList.munitionFailsafe, 2, 10],
                [HinnyUpgradesList.swarmTactics, 3, 12],
                [HinnyUpgradesList.advancedProtonTorpedoes, 4, 13],
                [HinnyUpgradesList.proximityMines, 4, 15],
                [HinnyUpgradesList.trickShot, 5, 17]
            ]
        ],
    //todo Hinny did not list ini and xps for despoiler, the values were eye-balled
    VT49:
        [
            [
                [HinnyUpgradesList.despoiler, 1, 19],
                [HinnyUpgradesList.veteranTurretGunner, 2, 21],
                [HinnyUpgradesList.deathTroopers, 2, 23],
                [HinnyUpgradesList.captainOicunn, 3, 25],
                [HinnyUpgradesList.ruthless, 4, 27],
                [HinnyUpgradesList.protonBombs, 4, 29]
            ],
            [
                [HinnyUpgradesList.despoiler, 1, 19],
                [HinnyUpgradesList.veteranTurretGunner, 2, 21],
                [HinnyUpgradesList.deathTroopers, 2, 23],
                [HinnyUpgradesList.captainOicunn, 3, 25],
                [HinnyUpgradesList.ruthless, 4, 27],
                [HinnyUpgradesList.protonBombs, 4, 29]
            ],
        ],
});