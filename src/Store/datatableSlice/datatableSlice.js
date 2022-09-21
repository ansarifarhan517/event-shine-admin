import { createSlice } from "@reduxjs/toolkit";
import fire, { db, auth } from "../../firebaseConfig/firebaseConfig";

const dataTableSlice = createSlice({
    name: 'dataTableState',
    initialState: {
        dataTableData: {},
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
            let dataTableDatas = {
                pending: [],
                accepted: [],
                rejected: []
            }
            if (serviceName == 'Users') {
                console.log(dataTableData);
            }
            dataTableData.map(i => {
                let obj = {}

                if (serviceName == 'Users') {
                    obj.Email = i.Email
                    obj.Firstname = i.Firstname
                    obj.Lastname = i.Lastname
                    obj.Phone = i.Phone
                    obj.Usertype = i.Usertype
                    obj.Active = i.Active
                    obj.ID = i.ID

                }
                else {
                    obj.City = i.City == 'Xtz2LLmd8w9QMOOHcM9C' ? 'Mumbai' : i.City == 'Amvl3PCMbn4wSjiEcxNT' ? 'Thane' : i.City == '8NmEc5YN82ShZw47NPCy' ? 'Thane' : ''
                    obj.Address = i.Address
                    obj.Title = i.Title
                    obj.Active = i.Active
                    obj.Contact = i.Contact
                    obj.HostName = i.HostName
                    obj.MaxCapacity = i.MaxCapacity
                    obj.MinCapacity = i.MinCapacity
                    obj.Overview = i.Overview
                    obj.About = i.About
                    obj.Images = i.Images
                    obj.ID = i.ID
                }
                if (i.Active === 'Y') {
                    dataTableDatas.accepted.push(obj)
                }
                else if (i.Active === 'N') {
                    dataTableDatas.pending.push(obj)
                }
                else if (i.Active === 'R') {
                    dataTableDatas.rejected.push(obj)
                }

            })
            console.log(dataTableDatas)
            dispatch(dataTableSlice.actions.setDataTableData(dataTableDatas))
        }
        catch (error) {
            console.log(error)
        }

    }
}

export const dataTableActions = dataTableSlice.actions;
export default dataTableSlice
