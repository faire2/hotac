import React, {useState} from "react";
import {Button} from "react-bootstrap";

import {Ships, Stats} from "../../data/Ships";
import ShipActions from "../../data/ShipActions";
import ShipTargetting from "../../data/ShipTargetting";
import ShipManeuverImages from "../../data/ShipManeuverImages";
import {PSN, TargetButtons} from "./TargetButtons";
import Maneuvers from "../../data/Maneuvers";

import ShipVariables from "./ShipVariables";
import {ShipStats} from "./ShipStats";

export function AiShip(props) {
    const shipType = props.shipType;
    const maxShields = Ships[shipType][Stats.shields];
    const maxHull = Ships[shipType][Stats.hull];
    const squadId = props.squadId;

    const [targetPosition, setTargetPosition] = useState([PSN.FARFRONT]);
    const [tokenIds, setTokenIds] = useState([3, 4]); //todo remove initial values

    function handleTokenIdChange(value, index) {
        const tTokenIds = [...tokenIds];
        tTokenIds.splice(index, 1, value);
        setTokenIds(tTokenIds);
    };


    return (
        <div>
            <h1>{Ships[props.shipType][Stats.name]}</h1>
            <div className="row">
                <div className="col-6">
                    <ShipStats shipType={shipType}/>
                    <div className="row ">
                        <div className="col-4">
                            <h3>ID:</h3>
                        </div>
                        <div className="col-4">
                            <h3>Shields:</h3>
                        </div>
                        <div className="col-4">
                            <h3>Hull:</h3>
                        </div>
                    </div>
                    {
                        tokenIds.map( (tokenId) =>
                             <ShipVariables key={tokenIds.indexOf(tokenId)} maxShields={maxShields} maxHull={maxHull}
                                           tokenIdIndex={tokenIds.indexOf(tokenId)}
                                           handleTokenIdChange={handleTokenIdChange}/>)
                    }
                    <br/>
                    <button className="btn btn-primary btn-sm">Add a ship</button>
                    <h2>Select target:</h2>
                    <ShipTargetting shipType={shipType}/>

                    <h2>Perform maneuver:</h2>
                    <Maneuvers shipType={shipType} position={targetPosition}/>

                    <h2>Select and perform action:</h2>
                    <ShipActions shipType={shipType}/>
                </div>
                <div className="col-5 position-relative">
                    <ShipManeuverImages shipType={shipType}/>
                    <TargetButtons setTargetPosition={setTargetPosition}/>
                    <div className="d-flex flex-row">
                        <Button className="btnRemoveShip" variant="danger" size="sm"
                                onClick={e => props.handleShipRemoval(squadId)}>Remove ship</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}