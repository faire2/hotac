import React, {useContext} from "react";
import styled from "styled-components";
import Variables from "./Variables";
import {GlobalContext, SquadContext} from "../../context/Contexts";
import {VariablesHeader} from "./VariablesHeader";
import {Row} from "../../styled";

export function ShipsVariables(props) {
    const squadId = props.squadId;
    const shipHandlingContext = useContext(SquadContext);
    const ships = shipHandlingContext.squadrons[squadId].ships;

    for (let ship of ships) {
        console.log("Ships shields, hull: " + ship.shields + ", " + ship.hull);
    }

    return (
        <Container>
            <VariablesHeader/>
            {
                ships.map((ship, keyIndex) =>
                    <Variables key={keyIndex} keyIndex={keyIndex} ship={ship} squadId={squadId}/>)
            }
            <br/>
            <Row>
                <button className="btn btn-primary btn-sm" onClick={() => shipHandlingContext.handleAddShip(squadId)}>
                    Add a ship to squadron
            </button>
                <RemoveSquadButton squadId={squadId}/>
            </Row>
        </Container>
    )
}

const RemoveSquadButton = (squadId) => {
    const globalAiValuesContext = useContext(GlobalContext);
    return (
        <button className="btn btn-danger btn-sm"
                onClick={() => globalAiValuesContext.handleSquadRemoval(squadId)}>
            Remove whole squadron
        </button>
    )
};

const Container = styled.div`
    width: 90%;
    overflow: visible;
`;
