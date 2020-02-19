import {Ships, Stats} from "../../data/Ships";
import React from "react";

export const SquadStats = (props) =>
    <div>
        <div className="row">
            <div className="col-2">
                <h3>Init.:</h3>
            </div>
            <div className="col-3">
                <h3>Attack:</h3>
            </div>
            <div className="col-3">
                <h3>Agility:</h3>
            </div>
            <div className="col-2">
                <h3>XP:</h3>
            </div>
            <div className="col-2">
                <h3>Level:</h3>
            </div>
        </div>
        <div className="row text-center ship-stats">
            <div className="col-2">
                <div>{props.iniative}</div>
            </div>
            <div className="col-3">
                {Ships[props.shipType][Stats.attack].map((a, index) =>
                    <span key={index}>
                        {a.attack}{a.damage}
                    </span>)}
            </div>
            <div className="col-3">
                <div>{Ships[props.shipType][Stats.agility]}</div>
            </div>
            <div className="col-2">
                <div>{props.xp}</div>
            </div>
            <div className="col-2">
                <div>{props.upgradeLevel}</div>
            </div>
        </div>
    </div>;
