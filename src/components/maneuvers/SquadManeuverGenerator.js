import React, {useContext} from "react";
import {hinnyManeuvers} from "../../data/hinny/Maneuvers"
import {fgaManeuvers} from "../../data/fga/Maneuvers"
import {mvrs} from "../../data/Maneuvers";
import {TargetPositionContext} from "../../context/Contexts";
import {AI} from "../../enums";
import {sepaManeuvers} from "../../data/separatists/sepaManeuvers";

export default function SquadManeuverGenerator() {
    const positionContext = useContext(TargetPositionContext);
    let maneuvers;
    switch (positionContext.aiEngine) {
        case AI.HINNY:
            maneuvers = hinnyManeuvers;
            break;
        case AI.FGA:
            maneuvers = fgaManeuvers;
            break;
        case AI.SEPARATISTS:
            maneuvers = sepaManeuvers;
            break;
        default:
            console.log("Unknown AI engine in SquadManeuver: " + positionContext.aiEngine)
    }
    console.log(("Type, position, number: " + positionContext.shipType + ", "  + positionContext.targetPosition + ", "  + positionContext.maneuverRandNum));
    const maneuver = maneuvers[positionContext.shipType][positionContext.targetPosition][positionContext.maneuverRandNum];

    switch (maneuver) {
        case mvrs.STRAIGHT1:
            return <div className="xw-man">1<i className="xwm x-straight"/></div>;
        case mvrs.STRAIGHT1BLUE:
            return <div className="xw-man">1<i className="xwmb x-straight"/></div>;
        case mvrs.STRAIGHT2:
            return <div className="xw-man">2<i className="xwm x-straight"/></div>;
        case mvrs.STRAIGHT2BLUE:
            return <div className="xw-man">2<i className="xwmb x-straight"/></div>;
        case mvrs.STRAIGHT3:
            return <div className="xw-man">3<i className="xwm x-straight"/></div>;
        case mvrs.STRAIGHT3BLUE:
            return <div className="xw-man">3<i className="xwmb x-straight"/></div>;
        case mvrs.STRAIGHT4:
            return <div className="xw-man">4<i className="xwm x-straight"/></div>;
        case mvrs.STRAIGHT4BLUE:
            return <div className="xw-man">4<i className="xwmb x-straight"/></div>;
        case mvrs.STRAIGHT5:
            return <div className="xw-man">5<i className="xwm x-straight"/></div>;
        case mvrs.STRAIGHT5BLUE:
            return <div className="xw-man">5<i className="xwmb x-straight"/></div>;
        case mvrs.BANK1:
            return <div className="xw-man">1<i className="xwm x-bankright"/></div>;
        case mvrs.BANK1OPPOSITE:
            return <div className="xw-man">1<i className="xwm x-bankleft"/></div>;
        case mvrs.BANK1BLUE:
            return <div className="xw-man">1<i className="xwmb x-bankright"/></div>;
        case mvrs.BANK1BLUEOPPOSITE:
            return <div className="xw-man">1<i className="xwmb x-bankleft"/></div>;
        case mvrs.BANK2:
            return <div className="xw-man">2<i className="xwm x-bankright"/></div>;
        case mvrs.BANK2OPPOSITE:
            return <div className="xw-man">2<i className="xwm x-bankleft"/></div>;
        case mvrs.BANK2BLUE:
            return <div className="xw-man">2<i className="xwmb x-bankright"/></div>;
        case mvrs.BANK2BLUEOPPOSITE:
            return <div className="xw-man">2<i className="xwmb x-bankleft"/></div>;
        case mvrs.BANK3:
            return <div className="xw-man">3<i className="xwm x-bankright"/></div>;
        case mvrs.BANK3RED:
            return <div className="xw-man">3<i className="xwmr x-bankright"/></div>;
        case mvrs.BANK3OPPOSITE:
            return <div className="xw-man">3<i className="xwm x-bankleft"/></div>;
        case mvrs.TURN1:
            return <div className="xw-man">1<i className="xwm x-turnright"/></div>;
        case mvrs.TURN1RED:
            return <div className="xw-man">1<i className="xwmr x-turnright"/></div>;
        case mvrs.TURN2:
            return <div className="xw-man">2<i className="xwm x-turnright"/></div>;
        case mvrs.TURN2RED:
            return <div className="xw-man">2<i className="xwmr x-turnright"/></div>;
        case mvrs.TURN2BLUE:
            return <div className="xw-man">2<i className="xwmb x-turnright"/></div>;
        case mvrs.TURN2BLUEOPPOSITE:
            return <div className="xw-man">2<i className="xwmb x-turnleft"/></div>;
        case mvrs.TURN3:
            return <div className="xw-man">3<i className="xwm x-turnright"/></div>;
        case mvrs.TURN3RED:
            return <div className="xw-man">3<i className="xwmr x-turnright"/></div>;
        case mvrs.TURN2OPPOSITE:
            return <div className="xw-man">2<i className="xwm x-turnleft"/> </div>;
        case mvrs.TURN3OPPOSITE:
            return <div className="xw-man">3<i className="xwm x-turnleft"/> </div>;
        case mvrs.SEGNOR3RED:
            return <div className="xw-man">3<i className="xwmr x-sloopright"/> </div>;
        case mvrs.SEGNOR3REDOPPOSITE:
            return <div className="xw-man">3<i className="xwmr x-sloopleft"/> </div>;
        case mvrs.TALLON2RED:
            return <div className="xw-man">2<i className="xwmr x-trollright"/> </div>;
        case mvrs.TALLON2REDOPPOSITE:
            return <div className="xw-man">2<i className="xwmr x-trollleft"/> </div>;
        case mvrs.TALLON3RED:
            return <div className="xw-man">2<i className="xwmr x-trollright"/> </div>;
        case mvrs.TALLON3REDOPPOSITE:
            return <div className="xw-man">3<i className="xwmr x-trollleft"/> </div>;
        case mvrs.KOIOGRAN1RED:
            return <div className="xw-man">1<i className="xwmr x-kturn"/> </div>;
        case mvrs.KOIOGRAN3RED:
            return <div className="xw-man">3<i className="xwmr x-kturn"/> </div>;
        case mvrs.KOIOGRAN4:
            return <div className="xw-man">4<i className="xwm x-kturn"/> </div>;
        case mvrs.KOIOGRAN4RED:
            return <div className="xw-man">4<i className="xwmr x-kturn"/> </div>;
        case mvrs.KOIOGRAN5RED:
            return <div className="xw-man">5<i className="xwmr x-kturn"/> </div>;
        case mvrs.STATIONARYRED:
            return <div className="xw-man"><i className="xwmr x-stop"/> </div>;
        case mvrs.REVERSESTRAIGHT1RED:
            return <div className="xw-man">1<i className="xwmr x-reversestraight"/> </div>;
        case mvrs.REVERSEBANK1RED:
            return <div className="xw-man">1<i className="xwmr x-reversebankright"/> </div>;
        case mvrs.REVERSEBANK2RED:
            return <div className="xw-man">2<i className="xwmr x-reversebankright"/> </div>;
        default:
            console.log("Component Maneuvers didn't recognize maneuver: " + positionContext.maneuver);
    }
}