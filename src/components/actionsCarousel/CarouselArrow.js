import React from "react";

export const CarouselArrow = ({direction, handleArrowClick, glyph}) => (
    <div className={"slide-arrow " + direction} onClick={() => handleArrowClick(direction)}>
        {glyph}
    </div>
);

export const DIRECTIONS = Object.freeze({
        LEFT: "left",
        RIGHT: "right",
    }
);