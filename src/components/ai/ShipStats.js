import {Ships, Stats} from "../../data/Ships";
import React from "react";

export const ShipStats = (props) =>
    <div>
        <div className="row">
            <div className="col-4">
                <div>Initiative:</div>
            </div>
            <div className="col-4">
                <div>Attack:</div>
            </div>
            <div className="col-4">
                <div>Agility:</div>
            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <div>{Ships[props.shipType][Stats.initiative]}</div>
            </div>
            <div className="col-4">
                <div>{Ships[props.shipType][Stats.attack]}</div>
            </div>
            <div className="col-4">
                <div>{Ships[props.shipType][Stats.agility]}</div>
            </div>
        </div>
    </div>;
