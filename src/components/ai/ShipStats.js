import {Ships, Stats} from "../../data/Ships";
import React from "react";

export const ShipStats = (props) =>
    <div>
        <div className="row">
            <div className="col-4">
                <h3>Initiative:</h3>
            </div>
            <div className="col-4">
                <h3>Attack:</h3>
            </div>
            <div className="col-4">
                <h3>Agility:</h3>
            </div>
        </div>
        <div className="row text-center">
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
