import React from "react";

import {FgaPositionSelection} from "../../data/fga/FgaPositionSelection";
import {AI} from "../../data/Ships";
import {FgaStressedPositionSelection} from "../../data/fga/FgaStressedPositionSelection";
import {HinnyPositionSelection} from "../../data/hinny/HinnyPositionSelection";
import TargetPositionDiagram from "./TargetPositionDiagram";

export function TargetPosition(props) {
    const stressed = props.stressed? true : false;

    return (
        <div>
            <TargetPositionDiagram shipType={props.shipType} setTargetPosition={props.setTargetPosition} stressed={props.stressed} aiEngine={props.aiEngine}/>
            <div className="d-flex flex-row">
                <button className="btn btn-danger btn-sm btnRemoveShip"
                        onClick={() => props.handleShipRemoval(props.squadId)}>
                    <span>Remove squadron</span>
                </button>
            </div>
        </div>
    )
}
