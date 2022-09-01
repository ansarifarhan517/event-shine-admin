import React, { useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardWrapper from '../Dashboard/DashboardWrapper'
import LeftPanel from '../LeftPanel'
import SideBar from '../SideBar/SideBar'

const ProtectedRoutes = () => {
    const sideBar = useRef()
    return (
        <div className="d-flex flex-row h-100 position-r
        elative overflow-hidden">
            <Routes>
                <Route path='/' element={
                    <>
                        <LeftPanel />
                        <DashboardWrapper sideBarRef={sideBar} />
                        <SideBar sideBarRef={sideBar} />
                    </>}></Route>
            </Routes>

        </div >
    )
}

export default ProtectedRoutes