import React from "react";
import styled from "styled-components"

import {Charges} from "./Charges";
import {colors, Column} from "../../styled";
import {Attack} from "./Attack";

export function Skill(props) {
    const skill = props.skill;
    return (
        <div>
            <SkillHeadline>
                {skill[0].skillName}
            </SkillHeadline>
            <Column>
                <SkillDescription>
                    {skill[0].skillDescription}
                </SkillDescription>
                <ChargesContainer>
                    {skill[0].CHARGE !== undefined &&
                        <Charges charges={skill[0].CHARGE} recharge={skill[0].RECHARGE}/>}
                    {skill[0].ATTACK !== undefined &&
                        <Attack attack={skill[0].ATTACK} range={skill[0].RANGE} bullsEye={skill[0].BULLSEYE}/>}
                </ChargesContainer>
            </Column>
        </div>
    )
}

const SkillHeadline = styled.div`
    text-align: center;
    color: white;
    background-color: ${colors.LIGHT_BLUE};
`;

const SkillDescription = styled.div`
    display: block;
    overflow: auto;
`;

const ChargesContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    color: ${colors.ORANGE};
`;

