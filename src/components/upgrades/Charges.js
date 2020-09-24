import React, {useState} from "react";
import styled from "styled-components";

import {colors, RoundButton} from "../../styled";

export function Charges(props) {
    const [charges, setCharges] = useState(props.charges);

    function handleChangeCharges(value) {
        if (value >= 0 && value <= props.charges) {
            setCharges(value)
        }
    }

    return (
        <Container>
            <RoundButton color={colors.ORANGE} onClick={() => handleChangeCharges(charges - 1)}>
                -
            </RoundButton>
            <i className="xwi x-charge"/>{charges}
            {props.recharge === 1 && <i className="xwi x-recurring"/>}
            {props.recharge === 2 && <i className="xwi x-doublerecurring"/>}
            <RoundButton color={colors.ORANGE} onClick={() => handleChangeCharges(charges + 1)}>
                +
            </RoundButton>
        </Container>
    )
}

const Container = styled.div`
    color: ${colors.ORANGE};
    display: flex;
    flex-flow: row;
    align-items: center;
    font-size: 20px;
`;