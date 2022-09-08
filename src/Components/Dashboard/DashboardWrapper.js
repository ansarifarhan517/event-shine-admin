import React from 'react'
import MainContent from '../MainContent/MainContent'

const DashboardWrapper = (props) => {

    return (
        <div className="d-flex flex-column bg-dark h-100 w-74 w-m-77 w-md-90 w-xl-92 w-xxl-93 overflow-hidden" >
            <MainContent sideBarRef={props.sideBarRef} />
        </div>
    )
}

export default DashboardWrapper