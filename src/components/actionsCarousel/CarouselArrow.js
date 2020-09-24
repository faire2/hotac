import React from "react";
import styled from "styled-components"

export const CarouselArrow = ({direction, handleArrowClick, glyph}) => (
    <SlideArrow className={"slide-arrow " + direction} onClick={() => handleArrowClick(direction)}>
        {glyph}
    </SlideArrow>
);

export const DIRECTIONS = Object.freeze({
        LEFT: "left",
        RIGHT: "right",
    }
);

const SlideArrow = styled.div`
    font-size: 0px;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: 45%;
    height: 100%;
    user-select: none;
    display: flex;
`;