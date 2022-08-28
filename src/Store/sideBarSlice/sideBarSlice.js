import { createSlice } from "@reduxjs/toolkit";
import fire, { db, auth } from "../../firebaseConfig/firebaseConfig";

const sideBarSlice = createSlice({
    name: 'sideBarState',
    initialState: {
        selectedServiceID: null
    },
    reducers: {
        setSelectedServiceID(state, action) {
            state.selectedServiceID = action.payload
        }
    }
})


export const sideBarActions = sideBarSlice.actions;
export default sideBarSlice
