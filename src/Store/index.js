import { configureStore } from '@reduxjs/toolkit';
import dataTableSlice from './datatableSlice/datatableSlice';
import loginSlice from './loginSlice/loginSlice';
import sideBarSlice from './sideBarSlice/sideBarSlice';


const store = configureStore({
    reducer: {
        dataTableReducer: dataTableSlice.reducer,
        sideBarReducer: sideBarSlice.reducer,
        loginReducer: loginSlice.reducer
    }
})

export default store