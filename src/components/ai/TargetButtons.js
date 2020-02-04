import React from "react";
import {Button} from "react-bootstrap";
import {PSN} from "../../data/Ships";

/*todo: fix bug (last button returns non-def)*/
export const TargetButtons = (props) =>
    <div className="d-button-container">
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R4FRONT)}
                className="d-button far-front"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R4FRONTSIDE)}
                className="d-button far-front-side"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R4REARSIDE)}
                className="d-button far-back"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R4REAR)}
                className="d-button far-back-side"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R3FRONT)}
                className="d-button far-front"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R3FRONTSIDE)}
                className="d-button far-front-side"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R3REARSIDE)}
                className="d-button far-back"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.R3REAR)}
                className="d-button far-back-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.R1FRONT)}
                className="d-button near-front"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.R1FRONTSIDE)}
                className="d-button near-front-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.R1REARSIDE)}
                className="d-button near-back"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.R1REAR)}
                className="d-button near-back-side"> target </Button>
    </div>;
