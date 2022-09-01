import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import OpenRoutes from './Routes/OpenRoutes'
import ProtectedRoutes from './Routes/ProtectedRoutes'

const Shell = () => {
    const loggedIn = useSelector(state => state.loginReducer.loggedIn)
    return (
        <BrowserRouter>
            {
                // checkingStatus ? <NavSpinner /> :
                loggedIn ? <ProtectedRoutes /> : <OpenRoutes />
            }
        </BrowserRouter>
    )
}

export default Shell