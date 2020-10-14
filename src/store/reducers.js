import {createSlice} from "@reduxjs/toolkit";

export const campaignSlice = createSlice({
    name: "campaignSettings",
    initialState: {
        numberOfPlayers: 0,
    },
    reducers: {
        setCampaignValues: state => state,
    }
});
