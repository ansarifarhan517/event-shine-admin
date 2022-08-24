import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import MainContent from '../MainContent/MainContent'

const DashboardWrapper = () => {

    return (

        <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

            <Header />
            <MainContent />

        </div>
    )
}

export default DashboardWrapper