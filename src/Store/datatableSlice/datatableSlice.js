import { createSlice } from "@reduxjs/toolkit";
import fire, { db, auth } from "../../firebaseConfig/firebaseConfig";
import { getUserDataByID, getServicesByHostID, getServiceByID } from "../storeHelper";

const dataTableSlice = createSlice({
    name: 'dataTableState',
    initialState: {
        dataTableData: {},
        searchedService: '',
        //selectedVendor : false,
    },
    reducers: {
        setDataTableData(state, action) {
            state.dataTableData = action.payload
        },
        setSearchedService(state, action) {
            state.searchedService = action.payload
        },
        // setSelectedVendor(state, action){        
        //     state.selectedVendor = action.payload        
        // },
    }
})

// ------------------------------>Action Creators

export const getDataTableData = (serviceName) => {
    return async (dispatch) => {
        try {

            let dataTableData = [], response = [], temp = []
            if (serviceName === "Users") {
                response = await db.collection(serviceName).where("Usertype", "==", "host").get();
            }
            else {
                response = await db.collection(serviceName).get()
            }

            response.forEach(i => dataTableData.push(i.data()))
            let dataTableDatas = {
                pending: [],
                accepted: [],
                rejected: [],
                data: []
            }

            // if (serviceName == 'Users') {
            //     console.log(dataTableData);
            // }

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
                else if (serviceName == 'FeaturedService') {
                    obj.serviceId = i.serviceId
                    obj.serviceName = i.serviceName
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
                else {
                    temp.push(obj)
                }

            })
            if (serviceName == 'FeaturedService') {
                let promiseArray = temp.map(async (i) => {
                    return getServiceByID(i.serviceName, i.serviceId)
                })
                Promise.all(promiseArray).then(values => {
                    dataTableDatas.data = values
                    dispatch(dataTableSlice.actions.setDataTableData(dataTableDatas))
                })
                return
            }
            dispatch(dataTableSlice.actions.setDataTableData(dataTableDatas))
        }
        catch (error) {
            console.log(error)
        }

    }
}

// export  const fetchUserData = (userId) => {
//     return async (dispatch) => {
//         try {        
//            const dbRes = await getUserDataByID(userId);
//            if(!dbRes)  return;

//            const allServices = await getServicesByHostID(userId);

//            dispatch(dataTableSlice.actions.setSelectedVendor({...dbRes, Services: allServices}));           
//         }
//         catch (error) {
//             console.log(error)
//         }
//     }
// }

export const dataTableActions = dataTableSlice.actions;
export default dataTableSlice
