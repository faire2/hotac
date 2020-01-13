import React from "react";

export default function Maneuver(props) {
    console.log("Maneuver: " + props.maneuver)
    switch (props.maneuver) {
        case ManeuversEnum.STRAIGHT1:
            return <span>1<i className="xwm x-straight"/></span>;
        case ManeuversEnum.STRAIGHT2:
            return <span>2<i className="xwm x-straight"/></span>;
        case ManeuversEnum.STRAIGHT3:
            return <span>3<i className="xwm x-straight"/></span>;
        case ManeuversEnum.STRAIGHT4:
            return <span>4<i className="xwm x-straight"/></span>;
        case ManeuversEnum.STRAIGHT5:
            return <span>5<i className="xwm x-straight"/></span>;
        case ManeuversEnum.BANK1:
            return <span>1<i className="xwm x-bankright"/></span>;
        case ManeuversEnum.BANK2:
            return <span>2<i className="xwm x-bankright"/></span>;
        case ManeuversEnum.BANK3:
            return <span>3<i className="xwm x-bankright"/></span>;
        case ManeuversEnum.TURN1:
            return <span>1<i className="xwm x-turnright"/></span>;
        case ManeuversEnum.TURN2:
            return <span>2<i className="xwm x-turnright"/></span>;
        case ManeuversEnum.TURN3:
            return <span>3<i className="xwm x-turnright"/></span>;
        case ManeuversEnum.TURNOPPOSITE2:
            return <span>2<i className="xwm x-turnleft"/> </span>;
        case ManeuversEnum.TURNOPPOSITE3:
            return <span>3<i className="xwm x-turnleft"/> </span>;
        case ManeuversEnum.SEGNOR3:
            return <span>3<i className="xwm x-sloopright"/> </span>;
        case ManeuversEnum.TALLON3:
            return <span>3<i className="xwm x-trollright"/> </span>;
        case ManeuversEnum.KOIOGRAN3:
            return <span>3<i className="xwm x-kturn"/> </span>;
        case ManeuversEnum.KOIOGRAN4:
            return <span>4<i className="xwm x-kturn"/> </span>;
        case ManeuversEnum.STATIONARY:
            return <span><i className="xwm x-stop"/> </span>;
        case ManeuversEnum.REVERSESTRAIGHT1:
            return <span>1<i className="xwm x-reversestraight"/> </span>;
        case ManeuversEnum.REVERSEBANK1:
            return <span>1<i className="xwm x-reversebankright"/> </span>;
        case ManeuversEnum.REVERSEBANK2:
            return <span>2<i className="xwm x-reversebankright"/> </span>;
        default:
            console.log("Component ShipActions didn't recognize shipId: " + props.maneuver);
    }
}

export const ManeuversEnum = Object.freeze({
        STRAIGHT1: "STRAIGHT1",
        STRAIGHT2: "STRAIGHT2",
        STRAIGHT3: "STRAIGHT3",
        STRAIGHT4: "STRAIGHT4",
        STRAIGHT5: "STRAIGHT5",
        BANK1: "BANK1",
        BANK2: "BANK2",
        BANK3: "BANK3",
        TURN1: "TURN1",
        TURN2: "TURN2",
        TURN3: "TURN3",
        TURNOPPOSITE2: "TURNOPPOSITE2",
        TURNOPPOSITE3: "TURNOPPOSITE3",
        SEGNOR3: "SEGNOR3",
        TALLON3: "TALLON3",
        KOIOGRAN3: "KOIOGRAN3",
        KOIOGRAN4: "KOIOGRAN4",
        STATIONARY: "STATIONARY",
        REVERSESTRAIGHT1: "REVERSESTRAIGHT1",
        REVERSEBANK1: "REVERSEBANK1",
        REVERSEBANK2: "REVERSEBANK2",
    });

