import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
        loggedIn: false,
        showPassword: false,
    },
    reducers: {
        setLoggedIn(state, action) {
            state.loggedIn = action.payload
        },
        setLoggedOut(state, action) {
            state.loggedIn = action.payload
        },
        showPassword(state) {
            state.showPassword = !state.showPassword;
        }
    }
})



export const loginActions = loginSlice.actions
export default loginSlice