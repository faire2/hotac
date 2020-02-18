import React from "react";

function PilotCard(props) {

}

function Skill(props) {
    return (
        <div className="skillContainer">
            <div className="headline">
                {props.headline}
            </div>
            <div className="difficulty">
                {props.initiative}
                {props.xp}
            </div>
            <div className="content">
                {props.content}
            </div>
            <div className="variables">
                {props.variables}
            </div>
        </div>
    )
}