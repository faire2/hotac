import {Abi, Ships} from "../../data/Ships";
import React from "react";

export const InnerShip = (shipId) => (
    <div>
        <h3>{Ships[shipId][Abi.name]}</h3>
        <div>Initiative: {Ships[shipId][Abi.initiative]}</div>
        <div>Attack: {Ships[shipId][Abi.attack]}</div>
        <div>Agility:  {Ships[shipId][Abi.agility]}</div>
        <div>Shields: {Ships[shipId][Abi.shields]}</div>
        <div>Hull: {Ships[shipId][Abi.hull]}</div>
        <h4>Select target:</h4>
        <ol>
            {Ships[shipId][Abi.selTarget].map((instruction) =>
                <li>{instruction}</li>
            )}
        </ol>
    </div>
);