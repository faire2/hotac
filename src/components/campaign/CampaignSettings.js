import React, {useContext} from "react"
import {Row} from "../../styled";
import {useDispatch, useSelector} from "react-redux";
import {campaignSlice} from "../../store/reducers";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import {GlobalContext} from "../../context/Contexts";
import {numOfPlayersOptions} from "../../constants";

export const CampaignSettings = () => {
    const globalContext = useContext(GlobalContext);
    const numOfPlayers = useSelector(state => state.numberOfPlayers);
    const dispatch = useDispatch();

    return (
        <div>
            <Row>
                <div>
                    Campaign:
                </div>
                <div>
                    Republic
                </div>
            </Row>
            <Row>
                <div>
                    Numbers of players:
                </div>
                <ToggleButtonGroup type="radio" name="radio" value={globalContext.playersRank}
                                   onChange={e => dispatch(campaignSlice.actions.setCampaignValues, e)}>
                    {numOfPlayersOptions.map((number, i) => <ToggleButton value={number} key={i}>{number}</ToggleButton> )}
                </ToggleButtonGroup>
            </Row>
            <Row>
                {numOfPlayers}
            </Row>
        </div>
    )
};