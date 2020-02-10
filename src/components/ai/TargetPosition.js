import React from "react";
import ShipManeuverImages from "../../data/hinny/ShipManeuverImages";
import {FgaPositionSelection} from "./targetPosition/FgaPositionSelection";
import {AI} from "../../data/Ships";
import {FgaStressedPositionSelection} from "./targetPosition/FgaStressedPositionSelection";
import {HinnyPositionSelection} from "./targetPosition/HinnyPositionSelection";

export function TargetPosition(props) {
    let targetPositionSelection;
    if (props.aiEngine === AI.FGA) {
        if (props.stressed) {
            targetPositionSelection = <FgaStressedPositionSelection setTargetPosition={props.setTargetPosition}/>
        } else {
            targetPositionSelection = <FgaPositionSelection setTargetPosition={props.setTargetPosition}/>
        }
    } else if (props.aiEngine === AI.HINNY) {
        targetPositionSelection = <HinnyPositionSelection setTargetPosition={props.setTargetPosition}/>
    }

    return (
        <div>
            <ShipManeuverImages shipType={props.shipType}/>
            {targetPositionSelection}
            <div className="d-flex flex-row">
                <button className="btn btn-danger btn-sm btnRemoveShip"
                        onClick={() => props.handleShipRemoval(props.squadId)}>
                    <span>Remove squadron</span>
                </button>
            </div>
        </div>
    )
}
