import React, {useState} from "react";
import styled from "styled-components";
import SquadActions from "./SquadActions";
import SquadTargetSelection from "./SquadTargetSelection";
import SquadAttack from "./SquadAttack";
import {CarouselArrow, DIRECTIONS} from "./CarouselArrow";

export default function SquadActionsCarousel(props) {
    const aiEngine = props.aiEngine;
    const shipType = props.shipType;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const content = [
        <SquadTargetSelection aiEngine={aiEngine} shipType={shipType}/>,
        <SquadActions aiEngine={aiEngine} shipType={shipType}/>,
        <SquadAttack aiEngine={aiEngine} shipType={shipType}/>
    ];
    const headline = [
        <h3>Target for maneuver:</h3>,
        <h3>Select and perform action:</h3>,
        <h3>Target for attack:</h3>
    ];

    function handleArrowClick(direction) {
        let newIndex = currentSlideIndex;
        if (direction === DIRECTIONS.LEFT) {
            newIndex = (currentSlideIndex < 1) ? content.length - 1 : currentSlideIndex - 1;
        } else if (direction === DIRECTIONS.RIGHT) {
            newIndex = (currentSlideIndex > content.length - 2) ? 0 : currentSlideIndex + 1;
        } else {
            console.log("Unknown direction in function handleArrowClick: " + direction)
        }
        setCurrentSlideIndex(newIndex);
        console.log("New image index is: " + newIndex);
    }

    return (
        <div>
            {headline[currentSlideIndex]}
            <Carousel>
            <IndicatorsContainer>
                <ul>
                    {content.map((item, index) => {
                        if (index === currentSlideIndex) return <li key={index} className="indicator active"></li>
                        return <li key={index} className="indicator"></li>
                    })}
                </ul>
            </IndicatorsContainer>

                {content[currentSlideIndex]}
                <CarouselArrow direction={DIRECTIONS.LEFT} handleArrowClick={() => handleArrowClick(DIRECTIONS.LEFT)}
                       glyph="<"/>
                <CarouselArrow direction={DIRECTIONS.RIGHT} handleArrowClick={() => handleArrowClick(DIRECTIONS.RIGHT)}
                       glyph=">"/>
            </Carousel>

        </div>
    )
};

const Carousel = styled.div`
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    width: 100%;
    overflow-y: auto;
`;

const IndicatorsContainer = styled.div`
    width: 100%;
    height: 25px;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`