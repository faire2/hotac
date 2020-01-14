import {Abi, Ships} from "../../data/Ships";
import {Button} from "react-bootstrap";
import React from "react";

export const ShipStats = (props) =>
    <div>
        <h3>{Ships[props.shipId][Abi.name]}</h3>
        <div>Initiative: {Ships[props.shipId][Abi.initiative]}</div>
        <div>Attack: {Ships[props.shipId][Abi.attack]}</div>
        <div>Agility: {Ships[props.shipId][Abi.agility]}</div>
        <div id="shields">
            <span>Shields: </span>
            <Button onClick={e => props.handlePropertyDecrease(e, true)} size="sm"> - </Button>
            <span className="value"> {props.currShields} </span>
            <Button onClick={e => props.handlePropertyIncrease(e, false)} size="sm"> + </Button>
        </div>
        <div id="hull">
            <span>Hull: </span>
            <Button onClick={e => props.handlePropertyDecrease(e, true)} size="sm"> - </Button>
            <span className="value"> {props.currHull} </span>
            <Button onClick={e => props.handlePropertyIncrease(e, false)} size="sm"> + </Button>
        </div>
    </div>;