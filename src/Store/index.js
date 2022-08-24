import { configureStore } from '@reduxjs/toolkit';
import dataTableSlice from './datatableSlice/datatableSlice';


const store = configureStore({
    reducer : {
        dataTableReducer : dataTableSlice.reducer
    }
})

export default store