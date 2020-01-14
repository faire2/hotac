import {Stats, Ships} from "../../data/Ships";
import {Button} from "react-bootstrap";
import React from "react";

export const ShipStats = (props) =>
    <div className="row">
        <div className="col-4">
            <div className="row">
                <div className="col-6">
                    <p>Initiative: </p>
                    <p>Attack: </p>
                    <p>Agility: </p>
                </div>
                <div className="col-6">
                    <p>{Ships[props.shipType][Stats.initiative]}</p>
                    <p>{Ships[props.shipType][Stats.attack]}</p>
                    <p>{Ships[props.shipType][Stats.agility]}</p>
                </div>
            </div>
        </div>
        <div className="col-8">
            <div className="row">
                <div className="col-6">
                    <p>Shields:</p>
                    <p>Hull:</p>
                </div>
                <div className="col-6">
                    <p id="shields">
                        <Button onClick={e => props.handlePropertyDecrease(e, true)} size="sm"> - </Button>
                        <span className="value"> {props.currShields} </span>
                        <Button onClick={e => props.handlePropertyIncrease(e, false)} size="sm"> + </Button>
                    </p>
                    <p id="hull">
                        <Button onClick={e => props.handlePropertyDecrease(e, true)} size="sm"> - </Button>
                        <span className="value"> {props.currHull} </span>
                        <Button onClick={e => props.handlePropertyIncrease(e, false)} size="sm"> + </Button>
                    </p>
                </div>
            </div>
        </div>
    </div>;