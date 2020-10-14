import React from "react";
import styled from "styled-components"
import {ButtonLink} from "../styled";
import {Locations} from "../enums";

export const MainMenu = () => {
    return (
        <Container>
            <h1>X-wing AI control</h1>
            <ButtonLink to={Locations.SQUADRONS}>Sandbox</ButtonLink>
            <ButtonLink to={Locations.SQUADRONS}>Sandbox</ButtonLink>
        </Container>
    )
};

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
`;
