import React, {useState} from "react";

export default function TargetPositionDiagram(props) {
    /*  initially was used to select correct image with maneuvers*/
    const [test, setTest] = useState("nothing");

    const arc1Width = 170;
    const arc23width = 70;
    const arc4wifth = 70;

    const rotate = "rotate(45, 0, " + (arc1Width + arc23width);

    return (
        <div id="arcs_container">
            <h1>{test}</h1>

            <svg width="500px" height="800px">
                <path d={getSegment(arc1Width, arc23width + arc4wifth)} stroke="#000" strokeWidth="2"/>
                <path d={getSegment(arc1Width, arc23width + arc4wifth)} stroke="blue" strokeWidth="2"
                      transform={"rotate(45, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
                <path d={getSegment(arc1Width, arc23width + arc4wifth)} stroke="blue" strokeWidth="2"
                      transform={"rotate(90, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
                <path d={getSegment(arc1Width, arc23width + arc4wifth)} stroke="blue" strokeWidth="2"
                      transform={"rotate(135, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
                <path d={getArc4(arc23width, arc1Width, arc4wifth)} stroke="green" strokeWidth="5"/>
                <path d={getArc4(arc23width, arc1Width, arc4wifth)} stroke="green" strokeWidth="5" transform={"rotate(45, 0, " + (arc1Width + arc23width) + ")"}/>
                <path d={getArc4(arc23width, arc1Width, arc4wifth)} stroke="green" strokeWidth="5" transform={"rotate(90, 0, " + (arc1Width + arc23width) + ")"}/>
                <path d={getArc4(arc23width, arc1Width, arc4wifth)} stroke="green" strokeWidth="5" transform={"rotate(135, 0, " + (arc1Width + arc23width) + ")"}/>
                <path d={getArc4(arc4wifth, arc1Width + arc23width, 0)} stroke="red" strokeWidth="5"/>
                <path d={getArc4(arc4wifth, arc1Width + arc23width, 0)} stroke="red" strokeWidth="5" transform={"rotate(45, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
                <path d={getArc4(arc4wifth, arc1Width + arc23width, 0)} stroke="red" strokeWidth="5" transform={"rotate(90, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
                <path d={getArc4(arc4wifth, arc1Width + arc23width, 0)} stroke="red" strokeWidth="5" transform={"rotate(135, 0, " + (arc1Width + arc23width + arc4wifth) + ")"}/>
            </svg>
            <svg width="500px" height="400px">
                {/*<a onClick={e => setTest("success")}>
                    <rect x="0" y="0" width="30px" height="100px" fill="#80aaed"/>
                </a>*/}
                {/*<rect x="" y="100" width="30px" height="100px" fill="#568ce3" rx="0" ry="0" />
                <rect x="" y="200" width="30px" height="100px" fill="#285fb8" rx="0" ry="0" />*/}
            </svg>
        </div>
    )
}

function getSegment(radius, offset) {
    const x = Math.sqrt(radius * radius / 2);
    const y = radius - x;
    const array = [
        "M", 0, offset,
        "A", radius, radius, 0, 0, 1, x, y + offset,
        "L", 0, 200 + offset,
        "Z"
    ];
    return array.join(" ");
}

function getArc4(currentWidth, previousWidth, nextWidth) {
    const firstArcEnd = [Math.sqrt(previousWidth * previousWidth / 2), nextWidth + currentWidth + previousWidth - Math.sqrt(previousWidth * previousWidth / 2)];
    const lineEnd = [Math.sqrt(currentWidth * currentWidth / 2) + firstArcEnd[0], nextWidth + firstArcEnd[1] -  Math.sqrt(currentWidth * currentWidth / 2)];

    const array = [
        "M", 0, currentWidth + nextWidth,
        "A", previousWidth, previousWidth, 0, 0, 1, firstArcEnd[0], firstArcEnd[1],
        "L", lineEnd[0], lineEnd[1],
        "A", currentWidth + previousWidth, currentWidth + previousWidth, 0, 0, 0, 0, 0 + nextWidth,
    ];

    return array.join(" ");
}
