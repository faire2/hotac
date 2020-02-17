import React from "react";

import TargetPositionDiagram from "./TargetPositionDiagram";
import SquadManeuver from "./SquadManeuver";

export function TargetPosition(props) {

    return (
        <div>
            <TargetPositionDiagram shipType={props.shipType} setTargetPosition={props.setTargetPosition} stressed={props.stressed} aiEngine={props.aiEngine}/>
            <SquadManeuver aiEngine={props.aiEngine} shipType={props.shipType} position={props.position} randNum={props.randNum}
                           stressed={props.stressed} setAiEngine={props.setAiEngine} handleStress={props.handleStress}/>,
        </div>
    )
}
