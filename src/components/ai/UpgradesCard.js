import React from "react";

export default function UpgradesCard(props) {
    // skills is an array with following structure: skill description, initiative, xps, optional object with additional information
    return (
        <div>
            <div id="changeUpgradeLevelButtton" onClick={() => props.handleSetUpgradeLevel(-1)}>-</div>
            {props.upgradesOfLevel.map((skill, i) =>
                <Skill skill={skill} key={i}/>
            )}
            <div id="changeUpgradeLevelButtton" onClick={() => props.handleSetUpgradeLevel(1)}>+</div>
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
                    {skill[3].CHARGE > 0 && <Charges charges={skill[3].CHARGE} recharge={skill[3].RECHARGE} />}
                    {skill[3].ATTACK != null && <Attack attack={skill[3].ATTACK} range={skill[3].RANGE} />}
                </div>
            </div>
        </div>
    )
}

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