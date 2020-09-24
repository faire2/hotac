import React, {useContext} from "react";
import styled from "styled-components"
import {Ships, Stats} from "../../data/Ships";
import Select from "react-select";
import {countExtraHullAndShield} from "../../App";
import {ShipHandlingContext} from "../../context/Contexts";
import {colors, FlexItem, RoundButton} from "../../styled";

export default function Variables(props) {
    let ship = props.ship;
    const squadId = props.squadId;
    const shipHandlingContext = useContext(ShipHandlingContext);
    const shipType = shipHandlingContext.squadrons[squadId].shipType;

    const idOptions = [
        {value: 0, label: 0},
        {value: 1, label: 1},
        {value: 2, label: 2},
        {value: 3, label: 3},
        {value: 4, label: 4},
        {value: 5, label: 5},
        {value: 6, label: 6},
        {value: 7, label: 7},
        {value: 8, label: 8},
        {value: 9, label: 9},

    ];

    function handleShipVarChange(variable, value) {
        const tShip = {...props.ship};
        const extraHullAndShield = countExtraHullAndShield(shipHandlingContext.squadrons[squadId].upgrades);

        switch (variable) {
            case Stats.shields:
                if (value >= 0 && value <= Ships[shipType].shields + extraHullAndShield.extraShield) {
                    tShip.shields = value;
                }
                break;
            case Stats.hull:
                if (value >= 0 && value <= Ships[shipType].hull + extraHullAndShield.extraHull) {
                    tShip.hull = value;
                }
                break;
            case Stats.tokenId:
                tShip.tokenId = value;
                break;
            default:
                console.log("Function handleShipVarChange in Variables didn't recognize variable: " + variable);
        }
        shipHandlingContext.handleShipChange(tShip, props.keyIndex, squadId);
    }

    return (
        <Container>
            <FlexItem>
                    <Select options={idOptions} onChange={e => handleShipVarChange(Stats.tokenId, e.value)}
                            value={{label: props.ship.tokenId, value: props.ship.tokenId}}/>
            </FlexItem>
            <FlexItem>
                <RoundButton color={colors.LIGHT_BLUE}
                             onClick={() => handleShipVarChange(Stats.shields, ship.shields - 1)}>
                    -
                </RoundButton>
                {ship.shields}
                <RoundButton color={colors.LIGHT_BLUE} className="btn btn-primary btn-increment"
                        onClick={() => handleShipVarChange(Stats.shields, ship.shields + 1)}>
                    +
                </RoundButton>
            </FlexItem>
            <FlexItem>
                <RoundButton color={colors.LIGHT_BLUE}
                        onClick={() => handleShipVarChange(Stats.hull, ship.hull - 1)}>
                    -
                </RoundButton>
                {ship.hull}
                <RoundButton color={colors.LIGHT_BLUE} onClick={() => handleShipVarChange(Stats.hull, ship.hull + 1)}>
                    +
                </RoundButton>
            </FlexItem>

            <AbsoluteButton id="btn-remove_ship" color={colors.RED}
                            onClick={() => shipHandlingContext.handleShipRemoval(props.keyIndex, squadId)}>x
            </AbsoluteButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-flow: row;
    align-items: center;
`;

// button is put outside of container flow to allow for proper column alignment
const AbsoluteButton = styled(RoundButton)`
    position: absolute;
    right: 10px;
`;
