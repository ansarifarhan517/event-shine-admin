import React, { useRef } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboardWrapper from '../Dashboard/DashboardWrapper'
import Header from '../Header/Header'
import LeftPanel from '../LeftPanel/LeftPanel'
import SideBar from '../SideBar/SideBar'

const ProtectedRoutes = () => {
    const sideBar = useRef()
    return (
        <>
            <Header />
            <div className="mainContainer d-flex flex-row w-100 position-relative overflow-hidden" >
                <Routes>
                    <Route path='/' element={
                        <>
                            <LeftPanel />
                            <DashboardWrapper sideBarRef={sideBar} />
                            <SideBar sideBarRef={sideBar} />
                        </>}>

                    </Route>
                    <Route path='/login' element={<Navigate replace to='/' />} />

                </Routes>
            </div>
        </>



    )
}

export default ProtectedRoutes