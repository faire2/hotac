import {configureStore} from "@reduxjs/toolkit";
import {campaignSlice} from "./reducers";

export const store = configureStore({
    reducer: campaignSlice.reducer
});

