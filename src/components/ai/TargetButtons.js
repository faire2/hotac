import React from "react";
import {Button} from "react-bootstrap";

export const TargetButtons = () =>
    <div>
        <Button variant="success" className="d-button far-front"> target </Button>
        <Button variant="success" className="d-button far-front-side"> target </Button>
        <Button variant="success" className="d-button far-back"> target </Button>
        <Button variant="success" className="d-button far-back-side"> target </Button>
        <Button variant="danger" className="d-button near-front"> target </Button>
        <Button variant="danger" className="d-button near-front-side"> target </Button>
        <Button variant="danger" className="d-button near-back"> target </Button>
        <Button variant="danger" className="d-button near-back-side"> target </Button>
    </div>;
