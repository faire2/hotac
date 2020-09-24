import styled from "styled-components";

export const Indicator = styled.div`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    color: white;
    background-color: ${props => props.active ? "#2a8cff" : "#9f9f9f"};
    transition: all 0.6s ease;
    margin: 27px 4px 0 4px;
`;


