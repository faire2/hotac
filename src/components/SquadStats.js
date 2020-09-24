import React from "react";
import styled from "styled-components";

import {Ships, Stats} from "../data/Ships";
import {BlueRow, FlexItem} from "../styled";

export const SquadStats = (props) =>
    <Container>
        <BlueRow>
                <FlexItem>Init.:</FlexItem>
                <FlexItem>Attack:</FlexItem>
                <FlexItem>Agility:</FlexItem>
                <FlexItem>XP:</FlexItem>
        </BlueRow>
        <StatsContainer>
            <FlexItem>
                {props.upgrades[props.upgrades.length -1][1]}
            </FlexItem>
            <FlexItem>
                {Ships[props.shipType][Stats.attack].map((a, index) =>
                    <span key={index}>
                        {a.attack}{a.damage}
                    </span>)}
            </FlexItem>
            <FlexItem>
                {Ships[props.shipType][Stats.agility]}
            </FlexItem>
            <FlexItem>
                {props.upgrades[props.upgrades.length - 1][2]}
            </FlexItem>
        </StatsContainer>
    </Container>;

const Container = styled.div`
    font-size: large;
`;

const StatsContainer = styled.div`
    display: flex;
    flex-flow: row;
`;
