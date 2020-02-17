import React from "react";

import TargetPositionDiagram from "./TargetPositionDiagram";

export function TargetPosition(props) {

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
