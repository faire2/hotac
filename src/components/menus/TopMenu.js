import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import React, {useContext} from "react";
import styled from "styled-components";
import Select from "react-select";
import {Ships, Stats} from "../../data/Ships";
import {GlobalContext} from "../../context/Contexts";

export const TopMenu = () => {
    const globalContext = useContext(GlobalContext);

    const playerRankOptions = [1, 2, 3, 4, 5, 6, 7];

    let newSquadShipOptions = [];
    for (let ship of Object.keys(Ships)) {
        newSquadShipOptions.push({value: Ships[ship][Stats.id], label: Ships[ship][Stats.name]});
    }
    // sort by name
    newSquadShipOptions.sort((a, b) => a.label.localeCompare(b.label));

    return (
    <Container>
        <TopMenuItem><h3>New squadron:</h3></TopMenuItem>
        <TopMenuItem>
            <TopMenuSelect options={newSquadShipOptions}
                           onChange={e => globalContext.handleNewShipSelection(e.value)}/>
        </TopMenuItem>
        <TopMenuItem>Set players' rank:</TopMenuItem>
        <ToggleButtonGroup type="radio" name="radio" value={globalContext.playersRank}
                           onChange={e => globalContext.handleSetPlayersRank(e)}>
            {playerRankOptions.map((number) => <ToggleButton value={number}>{number}</ToggleButton> )}
        </ToggleButtonGroup>
    </Container>
    )
};

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: #007bff;
    padding-left: 10px;
    color: white;
    height: 50px;
    top: 0;
    z-index: 2;
`;

const TopMenuItem = styled.div`
    margin-right: 10px;
`;

const TopMenuSelect = styled(Select)`
    width: 200px;
    color: black;
`;