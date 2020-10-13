import React, {useContext} from "react";
import {GlobalContext} from "../../context/Contexts";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {Ships} from "../../data/Ships";
import {Skill} from "./Skill";
import {UpgradesSource} from "../../enums";

export default function UpgradesCard(props) {
    const globalValues = useContext(GlobalContext);
    const squadId = props.squadId;
    const squad = globalValues.squadrons[squadId];
    const isElite = squad.isElite;
    const columns = squad.upgrades.length < 2 ? "" : "columns2";

    // skills is an array with following structure: skill description, initiative, xps, optional object with additional information
    return (
        <div>
            <div className="d-flex justify-content-center">
                <ToggleButtonGroup type="radio" name="radio" value={squad.upgradesSource}
                                   onChange={e => globalValues.handleSetUpgradesSource(squadId, e)}>
                    {Ships[squad.shipType].upgrades.includes(UpgradesSource.COMMUNITY) &&
                        <ToggleButton value={UpgradesSource.COMMUNITY}>{UpgradesSource.COMMUNITY}</ToggleButton>}
                    {Ships[squad.shipType].upgrades.includes(UpgradesSource.HINNY) &&
                        <ToggleButton value={UpgradesSource.HINNY}>{UpgradesSource.HINNY}</ToggleButton>}
                    {Ships[squad.shipType].upgrades.includes(UpgradesSource.FGA) &&
                        <ToggleButton value={UpgradesSource.FGA}>{UpgradesSource.FGA}</ToggleButton>}
                    {Ships[squad.shipType].upgrades.includes(UpgradesSource.SEPARATIST) &&
                        <ToggleButton value={UpgradesSource.SEPARATIST}>{UpgradesSource.SEPARATIST}</ToggleButton>}
                </ToggleButtonGroup>
            </div>
            <label>
                <input type="checkbox" value={isElite} onChange={() => globalValues.handleSetIsElite(squadId, !isElite)}/>
                Is ship elite?
            </label>
            <div className={columns}>
                {squad.upgrades.map((skill, i) =>
                    <Skill skill={skill} key={i}/>
                )}
                <br/>
            </div>
        </div>
    )
}

