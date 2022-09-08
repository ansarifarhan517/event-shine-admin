import { createSlice } from '@reduxjs/toolkit'
import firebase from 'firebase';
import fire, { auth } from '../../firebaseConfig/firebaseConfig';
import { getUserDataByID } from '../storeHelper';
import swal from "sweetalert2";

const authSlice = createSlice({
    name: 'authState',
    initialState: {
        currentUser: false,
        loading: false
    },
    reducers: {
        setUserData(state, action) {
            state.currentUser = action.payload;
        },
        setLoading(state, action) {
            state.loading = action.payload
        }
    }

})
// Action Creators ---->
export const postLogin = (params) => {
    return async (dispatch) => {
        const { data } = params;
        try {
            const { Email, Password } = data;
            //Logout when tab is closed -->
            await fire.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
            const authState = await auth.signInWithEmailAndPassword(Email, Password);
            console.log(authState)
            let userData = await getUserDataByID(authState.user.uid);
            console.log(userData)
            if (userData) {
                dispatch(authSlice.actions.setUserData(userData));
                localStorage.setItem('auth', JSON.stringify(userData))
            }
            else {
                localStorage.removeItem('auth')
            }


        } catch (err) {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-not-found":
                    swal.fire({
                        icon: 'error',
                        title: 'Please Signup',
                        text: 'User not found!',
                    })
                    break;
                case "auth/wrong-password":
                    swal.fire({
                        icon: 'error',
                        title: 'Invalid Password',
                        text: 'Check your password!',
                    })
                    break;
                default: {
                    swal.fire({
                        icon: 'error',
                        title: 'Something Went Wrong',
                        text: 'Please try after sometime!',
                    })
                    console.log('first')
                }
            }
            dispatch(authSlice.actions.setUserData(false))
            localStorage.removeItem('auth')

        }
        dispatch(authActions.setLoading(false))
    }
}


export const authActions = authSlice.actions
export default authSlice