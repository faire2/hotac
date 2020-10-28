import React, {useContext} from "react";

import TargetPositionDiagram from "./TargetPositionDiagram";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import {TargetPositionContext} from "../../context/Contexts";
import SquadManeuverGenerator from "./SquadManeuverGenerator";
import {AI} from "../../enums";
import {Ships} from "../../data/Ships";

export function TargetPosition() {
    const positionContext = useContext(TargetPositionContext);
    const shipType = positionContext.shipType;
    return (
        <div className="d-flex flex-column justify-content-center">
            <h3>Maneuvers:</h3>
            {/* toggle buttons show only AI that supports that ship type */}
            <ToggleButtonGroup type="radio" name="radio" value={positionContext.aiEngine}
                               onChange={e => positionContext.setAiEngine(e)}>
                {Ships[shipType].ai.includes(AI.FGA) && <ToggleButton value={AI.FGA}>{AI.FGA}</ToggleButton>}
                {Ships[shipType].ai.includes(AI.HINNY) && <ToggleButton value={AI.HINNY}>{AI.HINNY}</ToggleButton>}
                {Ships[shipType].ai.includes(AI.SEPARATISTS) && <ToggleButton value={AI.SEPARATISTS}>{AI.SEPARATISTS}</ToggleButton>}
            </ToggleButtonGroup>

            {/*  Handles visibility of the check-box according to selected Ai engine */
                positionContext.aiEngine !== AI.HINNY &&
                <label>
                    <input type="checkbox" value={positionContext.stressed}
                           onChange={e => positionContext.handleStress(e)}/>
                    Is ship stressed?
                </label>}
            <TargetPositionDiagram/>
            <SquadManeuverGenerator />
        </div>
    )
}