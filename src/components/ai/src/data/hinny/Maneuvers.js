import {Ships} from "../Ships";
import {MVRS, PSN} from "../Maneuvers";


/* MANEUVERS are kept as arrays so that random number can be used as the array index */
export const hinnyManeuvers = Object.freeze({
    [Ships.TIELN.id]: {
        [PSN.R3FRONT]: [MVRS.STRAIGHT5, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.R3FRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN1],
        [PSN.R3REARSIDE]: [MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN1],
        [PSN.R3REAR]: [MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN2, MVRS.TURN1],
        [PSN.R1FRONT]: [MVRS.KOIOGRAN4RED, MVRS.KOIOGRAN4RED, MVRS.STRAIGHT2, MVRS.BANK2, MVRS.BANK2, MVRS.TURN1],
        [PSN.R1FRONTSIDE]: [MVRS.KOIOGRAN4RED, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.R1REARSIDE]: [MVRS.KOIOGRAN4RED, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.R1REAR]: [MVRS.STRAIGHT5, MVRS.KOIOGRAN4RED, MVRS.KOIOGRAN4RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN3],
    },
    [Ships.TIEIN.id]: {
        [PSN.R3FRONT]: [MVRS.STRAIGHT5, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.R3FRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN1],
        [PSN.R3REARSIDE]: [MVRS.KOIOGRAN4RED, MVRS.KOIOGRAN4RED, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN1],
        [PSN.R3REAR]: [MVRS.KOIOGRAN4RED, MVRS.SEGNOR3REDOPPOSITE, MVRS.SEGNOR3RED, MVRS.SEGNOR3RED, MVRS.TURN2, MVRS.TURN1],
        [PSN.R1FRONT]: [MVRS.KOIOGRAN4RED, MVRS.SEGNOR3REDOPPOSITE, MVRS.STRAIGHT2, MVRS.BANK2, MVRS.BANK2, MVRS.TURN1],
        [PSN.R1FRONTSIDE]: [MVRS.SEGNOR3REDOPPOSITE, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.R1REARSIDE]: [MVRS.SEGNOR3RED, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.TURN1, MVRS.TURN1],
        [PSN.R1REAR]: [MVRS.STRAIGHT5, MVRS.KOIOGRAN4RED, MVRS.KOIOGRAN4RED, MVRS.SEGNOR3REDOPPOSITE, MVRS.SEGNOR3RED, MVRS.TURN3],
    },
    [Ships.TIESA.id]: {
        [PSN.R3FRONT]: [MVRS.STRAIGHT4, MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.BANK2],
        [PSN.R3FRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2],
        [PSN.R3REARSIDE]: [MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2],
        [PSN.R3REAR]: [MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN3, MVRS.TURN2],
        [PSN.R1FRONT]: [MVRS.KOIOGRAN5RED, MVRS.STRAIGHT2, MVRS.STRAIGHT1, MVRS.STRAIGHT1, MVRS.BANK1, MVRS.BANK1],
        [PSN.R1FRONTSIDE]: [MVRS.KOIOGRAN5RED, MVRS.TURN2, MVRS.TURN2, MVRS.BANK2, MVRS.BANK1, MVRS.BANK1],
        [PSN.R1REARSIDE]: [MVRS.KOIOGRAN3RED, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1],
        [PSN.R1REAR]: [MVRS.KOIOGRAN5RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.KOIOGRAN3RED, MVRS.TURN3],
    },
    [Ships.VT49.id]: {
        [PSN.R3FRONT]: [MVRS.STRAIGHT4, MVRS.STRAIGHT3, MVRS.BANK3, MVRS.BANK3, MVRS.STRAIGHT2, MVRS.BANK2],
        [PSN.R3FRONTSIDE]: [MVRS.BANK3, MVRS.BANK3, MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2],
        [PSN.R3REARSIDE]: [MVRS.TURN3, MVRS.TURN3, MVRS.BANK2, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1],
        [PSN.R3REAR]: [MVRS.TURN3, MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.TURN2OPPOSITE, MVRS.BANK1],
        [PSN.R1FRONT]: [MVRS.STRAIGHT4, MVRS.TURN3, MVRS.TURN3, MVRS.TURN3OPPOSITE, MVRS.BANK3, MVRS.BANK3OPPOSITE],
        [PSN.R1FRONTSIDE]: [MVRS.TURN3, MVRS.BANK2, MVRS.TURN2OPPOSITE, MVRS.TURN2, MVRS.BANK1, MVRS.TURN1RED],
        [PSN.R1REARSIDE]: [MVRS.TURN3, MVRS.TURN2, MVRS.TURN2, MVRS.BANK1, MVRS.BANK1, MVRS.TURN1RED],
        [PSN.R1REAR]: [MVRS.TURN3OPPOSITE, MVRS.TURN3, MVRS.TURN2OPPOSITE, MVRS.TURN2, MVRS.BANK1, MVRS.TURN1RED],
    },

});



