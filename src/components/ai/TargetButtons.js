import React from "react";
import {Button} from "react-bootstrap";

/*todo: fix bug (last button returns non-def)*/
export const TargetButtons = (props) =>
    <div>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.FARFRONT)}
                className="d-button far-front"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.FARFRONTSIDE)}
                className="d-button far-front-side"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.FARREARSIDE)}
                className="d-button far-back"> target </Button>
        <Button variant="success" onClick={() => props.setTargetPosition(PSN.FARREAR)}
                className="d-button far-back-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.NEARFRONT)}
                className="d-button near-front"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.NEAFRONTSIDE)}
                className="d-button near-front-side"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.NEARREARSIDE)}
                className="d-button near-back"> target </Button>
        <Button variant="danger" onClick={() => props.setTargetPosition(PSN.NEARREAR)}
                className="d-button near-back-side"> target </Button>
    </div>;

export const PSN = Object.freeze({
        FARFRONT: "FAR FRONT",
        FARFRONTSIDE: "FAR FRONT SIDE",
        FARREARSIDE: "FAR REAR SIDE",
        FARREAR: "FAR REAR",
        NEARFRONT: "NEAR FRONT",
        NEAFRONTSIDE: "NEAR FRONT SIDE",
        NEARREARSIDE: "NEAR REAR SIDE",
        NEARREAR: "NEAR REAR",
});
