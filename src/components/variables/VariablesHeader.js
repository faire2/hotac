import React from "react";
import styled from "styled-components";
import {FlexItem, Row} from "../../styled";

export const VariablesHeader = () => (
    <CenteredTextRow>
        <FlexItem>
            <h3>ID:</h3>
        </FlexItem>
        <FlexItem>
            <h3>Shields:</h3>
        </FlexItem>
        <FlexItem>
            <h3>Hull:</h3>
        </FlexItem>
    </CenteredTextRow>
);

const CenteredTextRow = styled(Row)`
    text-align: center;
`;

