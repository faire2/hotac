import styled from "styled-components";

export const colors = Object.freeze({
    LIGHT_BLUE: "#007bff",
    RED: "#ff4955",
    ORANGE: "#ffa600",
});

export const BlueRow = styled.div`
    display: flex;
    flex-flow: row;
    background-color: ${colors.LIGHT_BLUE};
    color: white;
    border-radius: 5px;
`;

export const FlexItem = styled.div`
    display: flex;
    flex: 1 1 0px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;

export const Row = styled.div`
    display: flex;
    flex-flow: row;
`;

export const Column = styled.div`
    display: flex;
    flex-flow: column;
`;

export const RoundButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    width: 30px;
    height: 30px;
    margin: 0 5px 0 5px;
    background-color: ${props => props.color};
    color: white;
    cursor: pointer;
    transition: 0.3s;
    
    &:hover {
        opacity: 0.6;
    }
`;
