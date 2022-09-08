import { createSlice } from "@reduxjs/toolkit";
import fire, { db, auth } from "../../firebaseConfig/firebaseConfig";

const sideBarSlice = createSlice({
    name: 'sideBarState',
    initialState: {
        selectedData: {},
        sideBarLoader: false
    },
    reducers: {
        setSelectedData(state, action) {
            state.selectedData = action.payload
        },
        setSideBarLoader(state) {
            state.sideBarLoader = !state.sideBarLoader
        }

    }
})


export const sideBarActions = sideBarSlice.actions;
export default sideBarSlice
