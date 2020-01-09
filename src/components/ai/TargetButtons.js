import React from "react";
import {Button} from "react-bootstrap";

/*todo: fix bug (last button returns non-def)*/
export const TargetButtons = (props) =>
    <div>
        <Button variant="success" onClick={() => props.setTargetPosition(POSITIONS["FAR-FRONT"])}
                className="d-button far-front"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(POSITIONS["FAR-FRONT-SIDE"])}
                className="d-button far-front-side"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(POSITIONS["FAR-BACL"])}
                className="d-button far-back"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(POSITIONS["FAR-BACK-SIDE"])}
                className="d-button far-back-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(POSITIONS["NEAR-FRONT"])}
                className="d-button near-front"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(POSITIONS["NEAR-FRONT-SIDE"])}
                className="d-button near-front-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(POSITIONS["NEAR-BACK"])}
                className="d-button near-back"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(POSITIONS["NEAR-BACK-SIDE"])}
                className="d-button near-back-side"> target </Button>
    </div>;

export const POSITIONS = Object.freeze({
    "FAR-FRONT": "far-front",
    "FAR-FRONT-SIDE": "far-front-side",
    "FAR-BACK-SIDE": "far-back-side",
    "FAR-BACK": "far-back",
    "NEAR-FRONT": "near-front",
    "NEAR-FRONT-SIDE": "near-front-side",
    "NEAR-BACK-SIDE": "near-back-side",
    "NEAR-BACK": "near-back",
});
