import { configureStore } from '@reduxjs/toolkit';
import dataTableSlice from './datatableSlice/datatableSlice';
import sideBarSlice from './sideBarSlice/sideBarSlice';


const store = configureStore({
    reducer: {
        dataTableReducer: dataTableSlice.reducer,
        sideBarReducer: sideBarSlice.reducer
    }
})

export default store