import React, {useState} from "react";
import {AI} from "../../data/Ships";
import {PSN} from "../../data/Maneuvers";

export default function TargetPositionDiagram(props) {
    const [test, setTest] = useState("-");
    const strokeWidth = 2;


    const RANGE = Object.freeze({
        1: 1,
        23: 23,
        4: 4
    });

    /* BULLSEYE */
    const bullsEyeWidth = 30;

    /* RANGE 1 */
    let arc1Width = 0;
    const arc1StrokeColor = "#00C1FF";
    const arc1FillColor = "#22A3FF";

    /* RANGE 2-3 */
    let arc23width = 0;
    const arc23FillColor = "#2777ff";

    /* RANGE 4 */
    let arc4width = 0;
    const arc4FillColor = "#0f53ff";

    /* Sets non-zero values for the arcs that shall be displayed */
    switch (props.aiEngine) {
        case AI.HINNY:
            arc1Width = arc23width = 105;
            break;
        case AI.FGA:
            if (props.stressed) {
                arc1Width = 210;
            } else {
                arc1Width = arc23width = arc4width = 40;
            }
            break;
        default:
            console.log("Ai engine not recognized in component TargetPositionDiagram: " + props.aiEngine);
    }

    function handleSetPosition(range, position) {
        if (props.stressed) {
            console.log("stressed active");
            switch (position) {
                case 0:
                    props.setTargetPosition(PSN.STRSFRONT);
                    break;
                case 1:
                    props.setTargetPosition(PSN.STRSFRONTSIDE);
                    break;
                case 2:
                    props.setTargetPosition(PSN.STRSREARSIDE);
                    break;
                case 3:
                    props.setTargetPosition(PSN.STRSREAR);
                    break;
                case "B":
                    props.setTargetPosition(PSN.STRSBULL);
                    break;
                default:
                    console.log("Position not recognized in component TargetPositionDiagram: " + range + ", " + position);
            }
        } else {
            switch (range) {
                case 1:
                    switch (position) {
                        case 0:
                            props.setTargetPosition(PSN.R1FRONT);
                            break;
                        case 1:
                            props.setTargetPosition(PSN.R1FRONTSIDE);
                            break;
                        case 2:
                            props.setTargetPosition(PSN.R1REARSIDE);
                            break;
                        case 3:
                            props.setTargetPosition(PSN.R1REAR);
                            break;
                        case "B":
                            props.setTargetPosition(PSN.R1BULL);
                            break;
                        default:
                            console.log("Position not recognized in component TargetPositionDiagram: " + range + ", " + position);
                    }
                    break;
                case 2:
                    switch (position) {
                        case 0:
                            props.setTargetPosition(PSN.R3FRONT);
                            break;
                        case 1:
                            props.setTargetPosition(PSN.R3FRONTSIDE);
                            break;
                        case 2:
                            props.setTargetPosition(PSN.R3REARSIDE);
                            break;
                        case 3:
                            props.setTargetPosition(PSN.R3REAR);
                            break;
                        case "B":
                            props.setTargetPosition(PSN.R3BULL);
                            break;
                        default:
                            console.log("Position not recognized in component TargetPositionDiagram: " + range + ", " + position);
                    }
                    break;
                case 4:
                    switch (position) {
                        case 0:
                            props.setTargetPosition(PSN.R4FRONT);
                            break;
                        case 1:
                            props.setTargetPosition(PSN.R4FRONTSIDE);
                            break;
                        case 2:
                            props.setTargetPosition(PSN.R4REARSIDE);
                            break;
                        case 3:
                            props.setTargetPosition(PSN.R4REAR);
                            break;
                        case "B":
                            props.setTargetPosition(PSN.R4BULL);
                            break;
                        default:
                            console.log("Position not recognized in component TargetPositionDiagram: " + range + ", " + position);
                    }
                    break;
                default:
                    console.log("Position not recognized in component TargetPositionDiagram: " + range + ", " + position);
            }
        }
    }

    function generateArcs() {
        let arcs = [];

        for (let i = 0; i < 4; i++) {
            const transform = i * 45;
            arcs.push(<path d={getSegment(arc1Width, arc23width + arc4width)} stroke={arc1StrokeColor}
                            strokeWidth={strokeWidth} fill={arc1FillColor} key={"R1" + i}
                            onClick={() => handleSetPosition(1, i)}
                            transform={"rotate(" + transform + ", 0, " + (arc1Width + arc23width + arc4width) + ")"}/>)
        }

        for (let i = 0; i < 4; i++) {
            const transform = i * 45;
            arcs.push(<path d={getArc(arc23width, arc1Width, arc4width)} stroke={arc1StrokeColor}
                            strokeWidth={strokeWidth} fill={arc23FillColor} key={"R23" + i}
                            onClick={() => handleSetPosition(2, i)}
                            transform={"rotate(" + transform + ", 0, " + (arc1Width + arc23width + arc4width) + ")"}/>)
        }

        for (let i = 0; i < 4; i++) {
            const transform = i * 45;
            arcs.push(<path d={getArc(arc4width, arc1Width + arc23width, 0)} stroke={arc1StrokeColor}
                            strokeWidth={strokeWidth} fill={arc4FillColor} key={"R4" + i}
                            onClick={() => handleSetPosition(4, i)}
                            transform={"rotate(" + transform + ", 0, " + (arc1Width + arc23width + arc4width) + ")"}/>)
        }
        return arcs;
    }


    return (
        <div id="arcs_container">
            <svg width={bullsEyeWidth} height={2 * (arc1Width + arc23width + arc4width)}>
                <rect x="0" y={arc23width + arc4width} width={bullsEyeWidth} height={arc1Width} fill={arc1FillColor}
                      stroke={arc1StrokeColor}
                      strokeWidth={strokeWidth} onClick={() => handleSetPosition(1, "B")}/>
                <rect x="0" y={arc4width} width={bullsEyeWidth} height={arc23width} fill={arc23FillColor}
                      stroke={arc1StrokeColor}
                      strokeWidth={strokeWidth} onClick={() => handleSetPosition(2, "B")}/>
                <rect x="0" y="0" width={bullsEyeWidth} height={arc4width} fill={arc4FillColor} stroke={arc1StrokeColor}
                      strokeWidth={strokeWidth} onClick={() => handleSetPosition(4, "B")}/>
            </svg>
            <svg width={arc1Width + arc23width + arc4width} height={(arc1Width + arc23width + arc4width) * 2}>
                {generateArcs().map((item) => item)}
            </svg>
        </div>
    )
}

/* Creates circle segments for R1 */
function getSegment(radius, offset) {
    const x = Math.sqrt(radius * radius / 2);
    const y = radius - x;
    const array = [
        "M", 0, offset,
        "A", radius, radius, 0, 0, 1, x, y + offset,
        "L", 0, radius + offset,
        "Z"
    ];
    return array.join(" ");
}

/* Creates arcs for R23 and R4 */
function getArc(currentWidth, previousWidth, nextWidth) {
    const firstArcEnd = [Math.sqrt(previousWidth * previousWidth / 2), nextWidth + currentWidth + previousWidth - Math.sqrt(previousWidth * previousWidth / 2)];
    const lineEnd = [Math.sqrt((currentWidth + previousWidth) * (currentWidth + previousWidth) / 2), nextWidth + previousWidth + currentWidth - Math.sqrt((currentWidth + previousWidth) * (currentWidth + previousWidth) / 2)];

    const array = [
        "M", 0, currentWidth + nextWidth,
        "A", previousWidth, previousWidth, 0, 0, 1, firstArcEnd[0], firstArcEnd[1],
        "L", lineEnd[0], lineEnd[1],
        "A", currentWidth + previousWidth, currentWidth + previousWidth, 0, 0, 0, 0, 0 + nextWidth,
    ];
    return array.join(" ");
}
