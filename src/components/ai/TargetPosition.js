import React from "react";

import TargetPositionDiagram from "./TargetPositionDiagram";
import SquadManeuverDisplay from "./SquadManeuver";

export function TargetPosition(props) {

    return (
        <div>
            <TargetPositionDiagram shipType={props.shipType} setTargetPosition={props.setTargetPosition} stressed={props.stressed} aiEngine={props.aiEngine}/>
            <SquadManeuverDisplay />,
        </div>
    )
}
