import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        loggedIn: false
    },
    reducers: {
        setLoggedIn(state, action) {
            state.loggedIn = action.payload
        },
        setLoggedOut(state, action) {
            state.loggedIn = action.payload
        }
    }
})



export const loginActions = loginSlice.actions
export default loginSlice