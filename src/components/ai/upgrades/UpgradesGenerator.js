import {Ships, UPGRADES} from "../../../data/Ships";
import {HinnyUpgrades} from "../../../data/hinny/HinnyUpgrades";
import {CommunityUpgrades} from "../../../data/fga/CommunityUpgrades";

export default function getUpgrades(shipType, playersIni, upgradesSource, isElite) {
    console.log("*** GET UPGRADES: ***");
    console.log("shipType, playersIni, isElite, upgradesSource: ");
    console.log(shipType + ", " + playersIni + ", " + upgradesSource + ", " + isElite.log);

    let shipTypeUpgrades = getShipTypeUpgrades(shipType, upgradesSource);
    let adjustedRandNum = getAdjustedRandomNumber(shipTypeUpgrades.length);
    const upgrades = [...shipTypeUpgrades[adjustedRandNum]];
    console.log("Upgrades: ");
    console.log(upgrades);

    /* if ship is not elite, it will only get basic upgrade */
    if (isElite !== true) {
        upgrades.length = 1
    }

    /* only upgrades relevant to the players' rank are returned */
    if (playersIni <= upgrades.length) {
        upgrades.length = (playersIni === 1 ? 2 : playersIni);
    }
    return upgrades;
}

function getShipTypeUpgrades(shipType, upgradesSource) {
    let shipTypeUpgrades = [];
    switch (upgradesSource) {
        case UPGRADES.HINNY:
            switch (shipType) {
                case Ships.TIEIN.id:
                    shipTypeUpgrades = hinnyUpgrades.TIEIN;
                    break;
                case Ships.TIELN.id:
                    shipTypeUpgrades = hinnyUpgrades.NO_UPGRADE;
                    break;
                case Ships.TIESA.id:
                    shipTypeUpgrades = hinnyUpgrades.TIESA;
                    break;
                case Ships.VT49.id:
                    shipTypeUpgrades = hinnyUpgrades.VT49;
                    break;
                default:
                    shipTypeUpgrades = hinnyUpgrades.NO_UPGRADE;
                    console.log("HinnyShipUpgrades didn't recognize shipType: " + shipType);
            }
            break;
        case UPGRADES.COMMUNITY:
            switch (shipType) {
                case Ships.TIEIN.id:
                    shipTypeUpgrades = communityUpgrades.TIEIN;
                    break;
                case Ships.TIELN.id:
                    shipTypeUpgrades = communityUpgrades.NO_UPGRADE;
                    break;
                case Ships.TIESA.id:
                    shipTypeUpgrades = communityUpgrades.TIESA;
                    break;
                case Ships.VT49.id:
                    shipTypeUpgrades = communityUpgrades.VT49;
                    break;
                default:
                    shipTypeUpgrades = communityUpgrades.NO_UPGRADE;
                    console.log("CommunityUpgrades didn't recognize shipType: " + shipType);
            }
            break;
        default:
            shipTypeUpgrades = communityUpgrades.NO_UPGRADE;
            console.log("GetUpgrades didn't recognize upgrades source: " + upgradesSource);
    }
    return shipTypeUpgrades;
}

/* Each skill is specified by its description, initiative and XP. */
const hinnyUpgrades = Object.freeze({
    TIEIN:
        [
            [
                [HinnyUpgrades.hullUpgrade, 2, 6],
                [HinnyUpgrades.outmaneuver, 3, 12],
                [HinnyUpgrades.shieldUpgrade, 4, 14],
                [HinnyUpgrades.turrPhennir, 5, 16],
                [HinnyUpgrades.marksmanship, 6, 18],
                [HinnyUpgrades.gideonHask, 7, 20]
            ],
            [
                [HinnyUpgrades.crackShot, 1, 5],
                [HinnyUpgrades.hullUpgrade, 2, 10],
                [HinnyUpgrades.daredevil, 3, 12],
                [HinnyUpgrades.trickShot, 4, 14],
                [HinnyUpgrades.staticDischargeVanes, 5, 16],
                [HinnyUpgrades.mauler, 6, 18]
            ],
            [
                [HinnyUpgrades.hullUpgrade, 1, 5],
                [HinnyUpgrades.wampa, 2, 10],
                [HinnyUpgrades.ruthless, 3, 12],
                [HinnyUpgrades.nightBeast, 4, 14],
                [HinnyUpgrades.shieldUpgrade, 5, 16],
                [HinnyUpgrades.juke, 6, 18]
            ],
            [
                [HinnyUpgrades.crackShot, 2, 6],
                [HinnyUpgrades.shieldUpgrade, 3, 12],
                [HinnyUpgrades.predator, 4, 14],
                [HinnyUpgrades.afterburners, 5, 16],
                [HinnyUpgrades.juke, 6, 18],
                [HinnyUpgrades.soontirFel, 7, 20]
            ],
            [
                [HinnyUpgrades.stealthDevice, 2, 6],
                [HinnyUpgrades.ruthless, 3, 12],
                [HinnyUpgrades.valenRudor, 4, 14],
                [HinnyUpgrades.hullUpgrade, 5, 16],
                [HinnyUpgrades.outmaneuver, 6, 18],
                [HinnyUpgrades.scourgeSkutu, 5, 20]
            ],
            [
                [HinnyUpgrades.stealthDevice, 1, 5],
                [HinnyUpgrades.afterburners, 2, 10],
                [HinnyUpgrades.loneWolf, 3, 12],
                [HinnyUpgrades.elusive, 4, 14],
                [HinnyUpgrades.marksmanship, 5, 16],
                [HinnyUpgrades.seynMarana, 6, 18]
            ]
        ],
    TIESA:
        [
            [
                [HinnyUpgrades.protonBombs, 2, 6],
                [HinnyUpgrades.clusterMissiles, 3, 12],
                [HinnyUpgrades.saturationSalvo, 4, 14],
                [HinnyUpgrades.debrisGambit, 6, 15],
                [HinnyUpgrades.protonTorpedoes, 6, 18],
                [HinnyUpgrades.munitionFailsafe, 7, 20]
            ],
            [
                [HinnyUpgrades.plasmaTorpedoes, 2, 6],
                [HinnyUpgrades.connerNets, 3, 12],
                [HinnyUpgrades.captainJonus, 4, 14],
                [HinnyUpgrades.shieldUpgrade, 5, 16],
                [HinnyUpgrades.diamondBoronMissiles, 6, 18],
                [HinnyUpgrades.swarmTactics, 7, 20]
            ],
            [
                [HinnyUpgrades.protonBombs, 2, 6],
                [HinnyUpgrades.protonTorpedoes, 2, 10],
                [HinnyUpgrades.deathFire, 2, 10],
                [HinnyUpgrades.skilledBombardier, 4, 14],
                [HinnyUpgrades.electroProtonBomb, 4, 15],
                [HinnyUpgrades.ruthless, 6, 17]
            ],
            [
                [HinnyUpgrades.ionTorpedoes, 2, 6],
                [HinnyUpgrades.proximityMines, 3, 12],
                [HinnyUpgrades.skilledBombardier, 3, 13],
                [HinnyUpgrades.connerNets, 4, 16],
                [HinnyUpgrades.concussionMissiles, 5, 17],
                [HinnyUpgrades.elusive, 6, 19]
            ],
            [
                [HinnyUpgrades.clusterMissiles, 2, 6],
                [HinnyUpgrades.majorRhymer, 3, 12],
                [HinnyUpgrades.advancedProtonTorpedoes, 3, 13],
                [HinnyUpgrades.bombletGenerator, 4, 15],
                [HinnyUpgrades.marksmanship, 5, 17],
                [HinnyUpgrades.shieldUpgrade, 6, 19]
            ],
            [
                [HinnyUpgrades.barrageMissiles, 2, 6],
                [HinnyUpgrades.munitionFailsafe, 2, 10],
                [HinnyUpgrades.swarmTactics, 3, 12],
                [HinnyUpgrades.advancedProtonTorpedoes, 4, 13],
                [HinnyUpgrades.proximityMines, 4, 15],
                [HinnyUpgrades.trickShot, 5, 17]
            ]
        ],
    //todo Hinny did not list ini and xps for despoiler, the values were eye-balled
    VT49:
        [
            [
                [HinnyUpgrades.despoiler, 1, 19],
                [HinnyUpgrades.veteranTurretGunner, 2, 21],
                [HinnyUpgrades.deathTroopers, 2, 23],
                [HinnyUpgrades.captainOicunn, 3, 25],
                [HinnyUpgrades.ruthless, 4, 27],
                [HinnyUpgrades.protonBombs, 4, 29]
            ],
            [
                [HinnyUpgrades.despoiler, 1, 19],
                [HinnyUpgrades.veteranTurretGunner, 2, 21],
                [HinnyUpgrades.deathTroopers, 2, 23],
                [HinnyUpgrades.captainOicunn, 3, 25],
                [HinnyUpgrades.ruthless, 4, 27],
                [HinnyUpgrades.protonBombs, 4, 29]
            ],
        ],
    /* Fallback in case that selected ship has no defined upgrades. */
    NO_UPGRADE:
        [
            [
                [{skillName: "-", skillDescription: "No upgrade equipped."}, 2, 5, {CHARGE: null, ATTACK: null}]
            ]
        ]
});

const communityUpgrades = Object.freeze({
    TIEIN:
        [
            [
                [CommunityUpgrades.autothrusters, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.expertHandling, 3, 6],
                [CommunityUpgrades.whisper, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.hullUpgrade, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.expose, 3, 6],
                [CommunityUpgrades.targetingComputer, 4, 6],
                [CommunityUpgrades.opportunist, 5, 6],
                [CommunityUpgrades.turrPhennir, 6, 6],
            ],
            [
                [CommunityUpgrades.autothrusters, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.pushTheLimit, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.expertHandling, 5, 6],
                [CommunityUpgrades.soontirFell, 6, 6],
            ],
            [
                [CommunityUpgrades.stealthDevice, 1, 4],
                [CommunityUpgrades.autothrusters, 3, 6],
                [CommunityUpgrades.predator, 3, 6],
                [CommunityUpgrades.rexlerBrath, 4, 6],
                [CommunityUpgrades.loneWolf, 5, 6],
                [CommunityUpgrades.maulerMithel, 6, 6],
            ],
            [
                [CommunityUpgrades.hullUpgrade, 1, 4],
                [CommunityUpgrades.autothrusters, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.calculation, 5, 6],
                [CommunityUpgrades.rearAdmiralChiraneau, 6, 6],
            ],
            [
                [CommunityUpgrades.stealthDevice, 1, 4],
                [CommunityUpgrades.hullUpgrade, 3, 6],
                [CommunityUpgrades.squadLeader, 3, 6],
                [CommunityUpgrades.experimentalInterface, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.commanderKenkirk, 6, 6],
            ],
        ],
    TIESA:
        [
            [
                [CommunityUpgrades.homingMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.lieutenantColzet, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
            [
                [CommunityUpgrades.clusterMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.marksmanship, 3, 6],
                [CommunityUpgrades.commanderAlozen, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.majorRhymer, 6, 6],
            ],
            [
                [CommunityUpgrades.clusterMissiles, 1, 4],
                [CommunityUpgrades.experimentalInterface, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.redline, 4, 6],
                [CommunityUpgrades.ruthless, 5, 6],
                [CommunityUpgrades.kirKanos, 6, 6],
            ],
            [
                [CommunityUpgrades.ionPulseMissiles, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.swarmTactics, 3, 6],
                [CommunityUpgrades.howlrunner, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.advancedProtonTorpedoes, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.majorRhymer, 4, 6],
                [CommunityUpgrades.opportunist, 5, 6],
                [CommunityUpgrades.commanderKenkirk, 6, 6],
            ],
            [
                [CommunityUpgrades.protonTorpedoes, 1, 4],
                [CommunityUpgrades.extraMunitions, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.nightBeast, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.kathScarlet, 6, 6],
            ],
        ],
    TIEADV:
        [
            [
                [CommunityUpgrades.advancedTargetingComputer, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.expose, 3, 6],
                [CommunityUpgrades.experimentalInterface, 4, 6],
                [CommunityUpgrades.whisper, 5, 6],
                [CommunityUpgrades.opportunist, 6, 6],
            ],
            [
                [CommunityUpgrades.accuracyCorrector, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.swarmTactics, 3, 6],
                [CommunityUpgrades.colonelJendon, 4, 6],
                [CommunityUpgrades.squadLeader, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.sensorJammer, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.expertHandling, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.advancedSensors, 1, 4],
                [CommunityUpgrades.protonRockets, 3, 6],
                [CommunityUpgrades.zertikStrom, 3, 6],
                [CommunityUpgrades.pushTheLimit, 4, 6],
                [CommunityUpgrades.intimidation, 5, 6],
                [CommunityUpgrades.maulerMithel, 6, 6],
            ],
        ],
    TIEDEF:
        [
            [
                [CommunityUpgrades.ionCannon, 1, 4],
                [CommunityUpgrades.stealthDevice, 3, 6],
                [CommunityUpgrades.elusiveness, 3, 6],
                [CommunityUpgrades.whisper, 4, 6],
                [CommunityUpgrades.loneWolf, 5, 6],
                [CommunityUpgrades.nightBeast, 6, 6],
            ],
            [
                [CommunityUpgrades.ionCannon, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.outmaneuver, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.heavyLaserCannon, 1, 4],
                [CommunityUpgrades.hullUpgrade, 3, 6],
                [CommunityUpgrades.pushTheLimit, 3, 6],
                [CommunityUpgrades.kirKanos, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
            [
                [CommunityUpgrades.heavyLaserCannon, 1, 4],
                [CommunityUpgrades.shieldUpgrade, 3, 6],
                [CommunityUpgrades.calculation, 3, 6],
                [CommunityUpgrades.kathScarlet, 4, 6],
                [CommunityUpgrades.ruthless, 5, 6],
                [CommunityUpgrades.rearAdmiralChiraneau, 6, 6],
            ],
        ],
    TIEPH:
        [
            [
                [CommunityUpgrades.maraJade, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.sensorJammer, 3, 6],
                [CommunityUpgrades.maulerMithel, 4, 6],
                [CommunityUpgrades.predator, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.reconSpecialist, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.sensorJammer, 3, 6],
                [CommunityUpgrades.loneWolf, 4, 6],
                [CommunityUpgrades.elusiveness, 5, 6],
                [CommunityUpgrades.darkCurse, 6, 6],
            ],
            [
                [CommunityUpgrades.gunner, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.fireControlSystem, 3, 6],
                [CommunityUpgrades.backstabber, 4, 6],
                [CommunityUpgrades.outmaneuver, 5, 6],
                [CommunityUpgrades.soontirFell, 6, 6],
            ],
            [
                [CommunityUpgrades.tactician, 1, 4],
                [CommunityUpgrades.advancedCloakingDevice, 3, 6],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.expose, 4, 6],
                [CommunityUpgrades.captainKagi, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
        ],
    LAMBDA:
        [
            [
                [CommunityUpgrades.antiPursuitLasers, 1, 4],
                [CommunityUpgrades.enhancedScopes, 3, 6],
                [CommunityUpgrades.maraJade, 3, 6],
                [CommunityUpgrades.zertikStrom, 4, 6],
                [CommunityUpgrades.tactician, 5, 6],
                [CommunityUpgrades.carnorJax, 6, 6],
            ],
            [
                [CommunityUpgrades.sensorJammer, 1, 4],
                [CommunityUpgrades.flightInstructor, 3, 6],
                [CommunityUpgrades.drawTheirFire, 3, 6],
                [CommunityUpgrades.captainKagi, 4, 6],
                [CommunityUpgrades.rebelCaptive, 5, 6],
                [CommunityUpgrades.elusiveness, 6, 6],
            ],
            [
                [CommunityUpgrades.fleetOfficer, 1, 4],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.tacticalJammer, 3, 6],
                [CommunityUpgrades.captainYorr, 4, 6],
                [CommunityUpgrades.swarmTactics, 5, 6],
                [CommunityUpgrades.howlrunner, 6, 6],
            ],
            [
                [CommunityUpgrades.weaponsEngineer, 1, 4],
                [CommunityUpgrades.advancedSensors, 3, 6],
                [CommunityUpgrades.squadLeader, 3, 6],
                [CommunityUpgrades.colonelJendon, 4, 6],
                [CommunityUpgrades.gunner, 5, 6],
                [CommunityUpgrades.rexlerBrath, 6, 6],
            ],
        ]
});


//todo use or remove
/*const skillVars = Object.freeze(
    {
        CHARGE: "charge",
        RECHARGE: "recharge rate",
        ATTACK: "attack",
        RANGE: "attack range"

    }
);*/

export function getAdjustedRandomNumber(upgradesLength) {
    const upgradeRandNum = Math.floor(Math.random() * 10) + 1;

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = Math.round(upgradeRandNum / 10 * upgradesLength) - 1;

    /* some numbers may be rounded down to - 1 (todo rewrite) */
    if (adjustedRandNum < 0) {
        adjustedRandNum = 0
    }
    return adjustedRandNum;
}