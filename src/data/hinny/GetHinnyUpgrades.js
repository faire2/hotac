import {Ships} from "../Ships";
import {HinnyUpgrades} from "./HinnyUpgrades";

export const MISSILE_RANGE = Object.freeze(
    {
        R1: "1",
        R12: "1-2",
        R23: "2-3"
    });

export default function getHinnyUpgrades(shipType, playersIni, upgradeRandNum, isElite) {
    let shipTypeUpgrades = [];
    console.log("*** GET HINNY UPGRADES: " + shipType + " ***");

    switch (shipType) {
        case Ships.TIEIN.id:
            shipTypeUpgrades = TIEIN;
            break;
        case Ships.TIELN.id:
            shipTypeUpgrades = NO_UPGRADE;
            break;
        case Ships.TIESA.id:
            shipTypeUpgrades = TIESA;
            break;
        case Ships.VT49.id:
            shipTypeUpgrades = VT49;
            break;
        default:
            shipTypeUpgrades = NO_UPGRADE;
            console.log("Component HinnyShipUpgrades didn't recognize shipType: " + shipType);
    }

    /* random number is adjusted to the number of upgrades the ship type has */
    let adjustedRandNum = Math.round(upgradeRandNum / 10 * shipTypeUpgrades.length) - 1;

    /* some numbers may be rounded down to - 1 (todo rewrite) */
    if (adjustedRandNum < 0) {adjustedRandNum = 0}

    // todo rewrite
    const upgrades = shipTypeUpgrades !== NO_UPGRADE ? [...shipTypeUpgrades[adjustedRandNum]] : NO_UPGRADE;

    /* if ship is not elite, it will only get basic upgrade */
    if (isElite !== true) {
        upgrades.length = 1
    }

    /* only upgrades relevant to the players' rank are returned */
    if (playersIni <= upgrades.length) {
        upgrades.length = (playersIni === 1 ? 2 : playersIni);
    }
    /*console.log(upgrades);
    for (let upgrade of upgrades) {
        console.log("upgrade: " + upgrade[0]["skillName"]);
    }*/
    return upgrades;
}

/* Fallback in case that selected ship has no defined upgrades. */
const NO_UPGRADE = [
    [{skillName: "-", skillDescription: "No upgrade equipped."}, 2, 5, {CHARGE: null, ATTACK: null}]
];

/* Each skill is specified by its description, initiative, XP and optionally charges (number of charges, recharge / round etc) */
/* HinnySkills.Skill, Initiative, Xp, {OptionalParameter: value...}*/
const TIEIN = [
    [
        [HinnyUpgrades.hullUpgrade, 2, 6, {}],
        [HinnyUpgrades.outmaneuver, 3, 12, {}],
        [HinnyUpgrades.shieldUpgrade, 4, 14, {}],
        [HinnyUpgrades.turrPhennir, 5, 16, {}],
        [HinnyUpgrades.marksmanship, 6, 18, {}],
        [HinnyUpgrades.gideonHask, 7, 20, {}]
    ],
    [
        [HinnyUpgrades.crackShot, 1, 5, {CHARGE: 1, RECHARGE: 0}],
        [HinnyUpgrades.hullUpgrade, 2, 10, {}],
        [HinnyUpgrades.daredevil, 3, 12, {}],
        [HinnyUpgrades.trickShot, 4, 14, {}],
        [HinnyUpgrades.staticDischargeVanes, 5, 16, {}],
        [HinnyUpgrades.mauler, 6, 18, {}]
    ],
    [
        [HinnyUpgrades.hullUpgrade, 1, 5, {}],
        [HinnyUpgrades.wampa, 2, 10, {CHARGE: 1, RECHARGE: 1}],
        [HinnyUpgrades.ruthless, 3, 12, {}],
        [HinnyUpgrades.nightBeast, 4, 14, {}],
        [HinnyUpgrades.shieldUpgrade, 5, 16, {}],
        [HinnyUpgrades.juke, 6, 18, {}]
    ],
    [
        [HinnyUpgrades.crackShot, 2, 6, {CHARGE: 1, RECHARGE: 0}],
        [HinnyUpgrades.shieldUpgrade, 3, 12, {}],
        [HinnyUpgrades.predator, 4, 14, {}],
        [HinnyUpgrades.afterburners, 5, 16, {}],
        [HinnyUpgrades.juke, 6, 18, {}],
        [HinnyUpgrades.soontirFel, 7, 20, {}]
    ],
    [
        [HinnyUpgrades.stealthDevice, 2, 6, {CHARGE: 1}],
        [HinnyUpgrades.ruthless, 3, 12, {}],
        [HinnyUpgrades.valenRudor, 4, 14, {}],
        [HinnyUpgrades.hullUpgrade, 5, 16, {}],
        [HinnyUpgrades.outmaneuver, 6, 18, {}],
        [HinnyUpgrades.scourgeSkutu, 5, 20, {}]
    ],
    [
        [HinnyUpgrades.stealthDevice, 1, 5, {CHARGE: 1}],
        [HinnyUpgrades.afterburners, 2, 10, {}],
        [HinnyUpgrades.loneWolf, 3, 12, {}],
        [HinnyUpgrades.elusive, 4, 14, {CHARGE: 2, RECHARGE: 1}],
        [HinnyUpgrades.marksmanship, 5, 16, {}],
        [HinnyUpgrades.seynMarana, 6, 18, {}]
    ]
];


const TIESA = [
    [
        [HinnyUpgrades.protonBombs, 2, 6, {CHARGE: 2, RECHARGE: 0}],
        [HinnyUpgrades.clusterMissiles, 3, 12, {ATTACK: 3, RANGE: MISSILE_RANGE.R12, CHARGE: 4}],
        [HinnyUpgrades.saturationSalvo, 4, 14, {}],
        [HinnyUpgrades.debrisGambit, 6, 15, {}],
        [HinnyUpgrades.protonTorpedoes, 6, 18, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnyUpgrades.munitionFailsafe, 7, 20, {}]
    ],
    [
        [HinnyUpgrades.plasmaTorpedoes, 2, 6, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnyUpgrades.connerNets, 3, 12, {CHARGE: 1}],
        [HinnyUpgrades.captainJonus, 4, 14, {}],
        [HinnyUpgrades.shieldUpgrade, 5, 16, {}],
        [HinnyUpgrades.diamondBoronMissiles, 6, 18, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 3}],
        [HinnyUpgrades.swarmTactics, 7, 20, {}]
    ],
    [
        [HinnyUpgrades.protonBombs, 2, 6, {CHARGE: 2}],
        [HinnyUpgrades.protonTorpedoes, 2, 10, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnyUpgrades.deathFire, 2, 10, {}],
        [HinnyUpgrades.skilledBombardier, 4, 14, {}],
        [HinnyUpgrades.electroProtonBomb, 4, 15, {CHARGE: 1}],
        [HinnyUpgrades.ruthless, 6, 17, {}]
    ],
    [
        [HinnyUpgrades.ionTorpedoes, 2, 6, {ATTACK: 4, RANGE: MISSILE_RANGE.R23, CHARGE: 2}],
        [HinnyUpgrades.proximityMines, 3, 12, {CHARGE: 2}],
        [HinnyUpgrades.skilledBombardier, 3, 13, {}],
        [HinnyUpgrades.connerNets, 4, 16, {CHARGE: 1}],
        [HinnyUpgrades.concussionMissiles, 5, 17, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 3}],
        [HinnyUpgrades.elusive, 6, 19, {}]
    ],
    [
        [HinnyUpgrades.clusterMissiles, 2, 6, {ATTACK: 3, RANGE: MISSILE_RANGE.R12, CHARGE: 4}],
        [HinnyUpgrades.majorRhymer, 3, 12, {}],
        [HinnyUpgrades.advancedProtonTorpedoes, 3, 13, {ATTACK: 5, RANGE: MISSILE_RANGE.R1, CHARGE: 1}],
        [HinnyUpgrades.bombletGenerator, 4, 15, {CHARGE: 3, RECHARGE: 1}],
        [HinnyUpgrades.marksmanship, 5, 17, {}],
        [HinnyUpgrades.shieldUpgrade, 6, 19, {}]
    ],
    [
        [HinnyUpgrades.barrageMissiles, 2, 6, {ATTACK: 3, RANGE: MISSILE_RANGE.R23, CHARGE: 5}],
        [HinnyUpgrades.munitionFailsafe, 2, 10, {}],
        [HinnyUpgrades.swarmTactics, 3, 12, {}],
        [HinnyUpgrades.advancedProtonTorpedoes, 4, 13, {ATTACK: 5, RANGE: MISSILE_RANGE.R1, CHARGE: 1}],
        [HinnyUpgrades.proximityMines, 4, 15, {CHARGE: 2}],
        [HinnyUpgrades.trickShot, 5, 17, {}]
    ]
];

//todo Hinny did not list ini and xps for despoiler, the values were eye-balled
const VT49 = [
    [
        [HinnyUpgrades.despoiler, 1, 19, {}],
        [HinnyUpgrades.veteranTurretGunner, 2, 21, {}],
        [HinnyUpgrades.deathTroopers, 2, 23, {}],
        [HinnyUpgrades.captainOicunn, 3, 25, {}],
        [HinnyUpgrades.ruthless, 4, 27, {}],
        [HinnyUpgrades.protonBombs, 4, 29, {CHARGE: 2}]
    ],
    [
        [HinnyUpgrades.despoiler, 1, 19, {}],
        [HinnyUpgrades.veteranTurretGunner, 2, 21, {}],
        [HinnyUpgrades.deathTroopers, 2, 23, {}],
        [HinnyUpgrades.captainOicunn, 3, 25, {}],
        [HinnyUpgrades.ruthless, 4, 27, {}],
        [HinnyUpgrades.protonBombs, 4, 29, {CHARGE: 2}]
    ],
];

//todo use or remove
/*const skillVars = Object.freeze(
    {
        CHARGE: "charge",
        RECHARGE: "recharge rate",
        ATTACK: "attack",
        RANGE: "attack range"

    }
);*/

