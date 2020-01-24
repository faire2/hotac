import React from "react";
import ShipManeuverImages from "../../data/hinny/ShipManeuverImages";
import {TargetButtons} from "./TargetButtons";

export const SquadTargetSelection = (props) => (
    <div>
        <ShipManeuverImages shipType={props.shipType}/>
        <TargetButtons setTargetPosition={props.setTargetPosition}/>
        <div className="d-flex flex-row">
            <button className="btn btn-danger btn-sm btnRemoveShip"
                    onClick={() => props.handleShipRemoval(props.squadId)}>
                <span>Remove squadron</span>
            </button>
        </div>
    </div>
);
