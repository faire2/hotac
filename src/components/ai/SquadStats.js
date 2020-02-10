import {Ships, Stats} from "../../data/Ships";
import React from "react";

export const SquadStats = (props) =>
    <div>
        <div className="row">
            <div className="col-12">
                <h3 className="text-left"> Ship type: {Ships[props.shipType][Stats.name]}</h3>
            </div>
        </div>
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
                {Ships[props.shipType][Stats.attack].map((a, index) =>
                    <span key={index}>
                        {a.attack}{a.damage}
                    </span>)}
            </div>
            <div className="col-4">
                <div>{Ships[props.shipType][Stats.agility]}</div>
            </div>
        </div>
    </div>;
