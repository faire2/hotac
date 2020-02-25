import React, {useContext} from "react";
import {GlobalSquadsValuesContext} from "../../../context/Contexts";

export default function UpgradesCard(props) {
    const globalValues = useContext(GlobalSquadsValuesContext);
    const isElite = globalValues.isElite[props.squadId];
    const upgrades = props.upgrades;

    // skills is an array with following structure: skill description, initiative, xps, optional object with additional information
    return (
        <div>
            <label>
                <input type="checkbox" value={isElite} onChange={() => globalValues.handleSetIsElite(props.squadId, !isElite)}/>
                Is ship elite?
            </label>
            {upgrades.map((skill, i) =>
                <Skill skill={skill} key={i}/>
            )}
        </div>
    )

}

function Skill(props) {
    const skill = props.skill;
    return (
        <div className="skillContainer ">
            <div className="headline text-center">
                {skill[0].skillName}
            </div>
            <div className="d-flex flex-row">
                <div className="content">
                    {skill[0].skillDescription}
                </div>
                <div className="variables d-flex flex-column justify-content-center">
                    {skill[0].CHARGE !== undefined && <Charges charges={skill[0].CHARGE} recharge={skill[0].RECHARGE} />}
                    {skill[0].ATTACK !== undefined && <Attack attack={skill[0].ATTACK} range={skill[0].RANGE} />}
                </div>
            </div>
        </div>
    )
}

//todo: buttons for changing number of charges
const Charges = (props) =>
    <div className="charge">
        <i className="xwi x-charge"/>{props.charges}
        {props.recharge === 1 && <i className="xwi x-recurring" />}
        {props.recharge === 2 && <i className="xwi x-doublerecurring" />}
    </div>;

const Attack = (props) =>
    <div className="attack">
        <div>
            <i className="xwi x-frontarc" />{props.attack}
        </div>
        <div className="range">
            <i className="xwi x-rangebonusindicator"/><span className="blackFontColor"> {props.range}</span>
        </div>
    </div>;