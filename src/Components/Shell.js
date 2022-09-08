import React, { useLayoutEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { authActions } from '../Store/auth/authSlice'
import { loginActions } from '../Store/loginSlice/loginSlice'
import Loader from './Loader/Loader'
import OpenRoutes from './Routes/OpenRoutes'
import ProtectedRoutes from './Routes/ProtectedRoutes'

const Shell = () => {
    const loggedIn = useSelector(state => state.loginReducer.loggedIn)
    const loading = useSelector(state => state.authReducer.loading)
    const currentUser = useSelector(state => state.authReducer.currentUser)
    const dispatch = useDispatch()

    useLayoutEffect(() => {
        const isAuthenticated = async () => {
            const auth = JSON.parse(localStorage.getItem('auth'))
            if (auth) {
                dispatch(loginActions.setLoggedIn(true))
            }
            else {
                dispatch(loginActions.setLoggedIn(false))
            }
        }
        isAuthenticated()

    }, [currentUser])



    return (
        <BrowserRouter>
            {
                loading ? <Loader /> :
                    loggedIn ? <ProtectedRoutes /> : <OpenRoutes />
            }
        </BrowserRouter>
    )
}

export default Shell