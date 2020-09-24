import {Ships} from "../Ships";
import {mvrs, PSN} from "../Maneuvers";


/* MANEUVERS are kept as arrays so that random number can be used as the array index */
export const hinnyManeuvers = Object.freeze({
    [Ships.TIELN.id]: {
        [PSN.R3FRONT]: [mvrs.STRAIGHT5, mvrs.STRAIGHT4, mvrs.STRAIGHT3, mvrs.BANK3, mvrs.BANK3, mvrs.BANK2],
        [PSN.R3FRONTSIDE]: [mvrs.BANK3, mvrs.BANK3, mvrs.TURN3, mvrs.BANK2, mvrs.TURN2, mvrs.TURN1],
        [PSN.R3REARSIDE]: [mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN3, mvrs.TURN2, mvrs.TURN2, mvrs.TURN1],
        [PSN.R3REAR]: [mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN2, mvrs.TURN1],
        [PSN.R1FRONT]: [mvrs.KOIOGRAN4RED, mvrs.KOIOGRAN4RED, mvrs.STRAIGHT2, mvrs.BANK2, mvrs.BANK2, mvrs.TURN1],
        [PSN.R1FRONTSIDE]: [mvrs.KOIOGRAN4RED, mvrs.TURN2, mvrs.TURN2, mvrs.BANK2, mvrs.TURN1, mvrs.TURN1],
        [PSN.R1REARSIDE]: [mvrs.KOIOGRAN4RED, mvrs.TURN2, mvrs.TURN2, mvrs.BANK2, mvrs.TURN1, mvrs.TURN1],
        [PSN.R1REAR]: [mvrs.STRAIGHT5, mvrs.KOIOGRAN4RED, mvrs.KOIOGRAN4RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN3],
    },
    [Ships.TIEIN.id]: {
        [PSN.R3FRONT]: [mvrs.STRAIGHT5, mvrs.STRAIGHT4, mvrs.STRAIGHT3, mvrs.BANK3, mvrs.BANK3, mvrs.BANK2],
        [PSN.R3FRONTSIDE]: [mvrs.BANK3, mvrs.BANK3, mvrs.TURN3, mvrs.BANK2, mvrs.TURN2, mvrs.TURN1],
        [PSN.R3REARSIDE]: [mvrs.KOIOGRAN4RED, mvrs.KOIOGRAN4RED, mvrs.TURN3, mvrs.TURN2, mvrs.TURN2, mvrs.TURN1],
        [PSN.R3REAR]: [mvrs.KOIOGRAN4RED, mvrs.SEGNOR3REDOPPOSITE, mvrs.SEGNOR3RED, mvrs.SEGNOR3RED, mvrs.TURN2, mvrs.TURN1],
        [PSN.R1FRONT]: [mvrs.KOIOGRAN4RED, mvrs.SEGNOR3REDOPPOSITE, mvrs.STRAIGHT2, mvrs.BANK2, mvrs.BANK2, mvrs.TURN1],
        [PSN.R1FRONTSIDE]: [mvrs.SEGNOR3REDOPPOSITE, mvrs.TURN2, mvrs.TURN2, mvrs.BANK2, mvrs.TURN1, mvrs.TURN1],
        [PSN.R1REARSIDE]: [mvrs.SEGNOR3RED, mvrs.TURN2, mvrs.TURN2, mvrs.BANK2, mvrs.TURN1, mvrs.TURN1],
        [PSN.R1REAR]: [mvrs.STRAIGHT5, mvrs.KOIOGRAN4RED, mvrs.KOIOGRAN4RED, mvrs.SEGNOR3REDOPPOSITE, mvrs.SEGNOR3RED, mvrs.TURN3],
    },
    [Ships.TIESA.id]: {
        [PSN.R3FRONT]: [mvrs.STRAIGHT4, mvrs.STRAIGHT4, mvrs.STRAIGHT3, mvrs.BANK3, mvrs.BANK3, mvrs.BANK2],
        [PSN.R3FRONTSIDE]: [mvrs.BANK3, mvrs.BANK3, mvrs.TURN3, mvrs.TURN3, mvrs.BANK2, mvrs.TURN2],
        [PSN.R3REARSIDE]: [mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN3, mvrs.TURN3, mvrs.TURN2, mvrs.TURN2],
        [PSN.R3REAR]: [mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN3, mvrs.TURN2],
        [PSN.R1FRONT]: [mvrs.KOIOGRAN5RED, mvrs.STRAIGHT2, mvrs.STRAIGHT1, mvrs.STRAIGHT1, mvrs.BANK1, mvrs.BANK1],
        [PSN.R1FRONTSIDE]: [mvrs.KOIOGRAN5RED, mvrs.TURN2, mvrs.TURN2, mvrs.BANK2, mvrs.BANK1, mvrs.BANK1],
        [PSN.R1REARSIDE]: [mvrs.KOIOGRAN3RED, mvrs.TURN3, mvrs.TURN2, mvrs.TURN2, mvrs.TURN2, mvrs.BANK1],
        [PSN.R1REAR]: [mvrs.KOIOGRAN5RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.KOIOGRAN3RED, mvrs.TURN3],
    },
    [Ships.VT49.id]: {
        [PSN.R3FRONT]: [mvrs.STRAIGHT4, mvrs.STRAIGHT3, mvrs.BANK3, mvrs.BANK3, mvrs.STRAIGHT2, mvrs.BANK2],
        [PSN.R3FRONTSIDE]: [mvrs.BANK3, mvrs.BANK3, mvrs.TURN3, mvrs.TURN3, mvrs.BANK2, mvrs.TURN2],
        [PSN.R3REARSIDE]: [mvrs.TURN3, mvrs.TURN3, mvrs.BANK2, mvrs.TURN2, mvrs.TURN2, mvrs.BANK1],
        [PSN.R3REAR]: [mvrs.TURN3, mvrs.TURN3, mvrs.TURN2, mvrs.TURN2, mvrs.TURN2OPPOSITE, mvrs.BANK1],
        [PSN.R1FRONT]: [mvrs.STRAIGHT4, mvrs.TURN3, mvrs.TURN3, mvrs.TURN3OPPOSITE, mvrs.BANK3, mvrs.BANK3OPPOSITE],
        [PSN.R1FRONTSIDE]: [mvrs.TURN3, mvrs.BANK2, mvrs.TURN2OPPOSITE, mvrs.TURN2, mvrs.BANK1, mvrs.TURN1RED],
        [PSN.R1REARSIDE]: [mvrs.TURN3, mvrs.TURN2, mvrs.TURN2, mvrs.BANK1, mvrs.BANK1, mvrs.TURN1RED],
        [PSN.R1REAR]: [mvrs.TURN3OPPOSITE, mvrs.TURN3, mvrs.TURN2OPPOSITE, mvrs.TURN2, mvrs.BANK1, mvrs.TURN1RED],
    },

});



