import React, {useState} from "react";
import SquadActions from "./SquadActions";
import SquadTargetSelection from "./SquadTargetSelection";
import SquadAttack from "./SquadAttack";
import SquadManeuver from "./SquadManeuver";

export default function ActionsCarousel(props) {
    const aiEngine = props.aiEngine;
    const shipType = props.shipType;

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const content = [
        <SquadTargetSelection aiEngine={aiEngine} shipType={shipType}/>,
        <SquadManeuver aiEngine={aiEngine} shipType={shipType} position={props.position} randNum={props.randNum}
                       stressed={props.stressed} setAiEngine={props.setAiEngine} handleStress={props.handleStress}/>,
        <SquadActions aiEngine={aiEngine} shipType={shipType}/>,
        <SquadAttack aiEngine={aiEngine} shipType={shipType}/>
    ];
    const headline = [
        <h3>Select target:</h3>,
        <h3>Perform maneuver:</h3>,
        <h3>Select and perform action:</h3>,
        <h3>Select target and attack:</h3>
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
        <div className="carousel">
                {headline[currentSlideIndex]}
                {content[currentSlideIndex]}
            <div id="carousel-indicators-container" className="align-middle">
                <Arrow direction={DIRECTIONS.LEFT} handleArrowClick={() => handleArrowClick(DIRECTIONS.LEFT)}
                       glyph="<"/>
                <ul>
                    {content.map((item, index) => {
                        if (index === currentSlideIndex) return <li key={index} className="indicator active"></li>
                        return <li key={index} className="indicator"></li>
                    })}
                </ul>
                <Arrow direction={DIRECTIONS.RIGHT} handleArrowClick={() => handleArrowClick(DIRECTIONS.RIGHT)}
                       glyph=">"/>
            </div>
        </div>
    )
};

const Arrow = ({direction, handleArrowClick, glyph}) => (
    <div className={"slide-arrow " + direction} onClick={() => handleArrowClick(direction)}>
        {glyph}
    </div>
);

const DIRECTIONS = Object.freeze({
        LEFT: "left",
        RIGHT: "right",
    }
);