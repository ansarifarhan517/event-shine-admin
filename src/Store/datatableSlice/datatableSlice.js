import { createSlice } from "@reduxjs/toolkit";
import fire, { db, auth } from "../../firebaseConfig/firebaseConfig";

const dataTableSlice = createSlice({
    name: 'dataTableState',
    initialState: {
        dataTableData: [],
        searchedService: '',
    },
    reducers: {
        setDataTableData(state, action) {
            state.dataTableData = action.payload
        },
        setSearchedService(state, action) {
            state.searchedService = action.payload
        }
    }
})

// ------------------------------>Action Creators

export const getDataTableData = (serviceName) => {
    return async (dispatch) => {
        try {

            let dataTableData = []
            const response = await db.collection(serviceName).get()
            response.forEach(i => dataTableData.push(i.data()))
            console.log(dataTableData)
            let data = []
            dataTableData.map(i => {
                let obj = {}
                obj.City = i.City
                obj.Address = i.Address
                obj.Title = i.Title
                obj.Active = i.Active
                data.push(obj)
            })
            dispatch(dataTableSlice.actions.setDataTableData(data))
        }
        catch (error) {
            console.log(error)
        }

    }
}

export const dataTableActions = dataTableSlice.actions;
export default dataTableSlice
