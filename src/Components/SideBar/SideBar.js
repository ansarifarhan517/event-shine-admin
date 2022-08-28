import React from 'react'
import { useSelector } from 'react-redux'
import "./SideBar.css"
const SideBar = (props) => {
    const sideBarServiceId = useSelector(state => state.sideBarReducer.selectedServiceID)
    const dataTableData = useSelector(state => state.dataTableReducer.dataTableData)
    const searchedService = useSelector(state => state.dataTableReducer.searchedService)

    const closeSideBarHandler = () => {
        props.sideBarRef.current.style.right = '-50%'
    }

    return (
        <div className='sideBar h-100' ref={props.sideBarRef}>
            <div className='card h-100'>
                <div className='card-header'>
                    <h3 className="card-title fw-bolder text-gray-700">{searchedService == '' ? 'Venues ' : searchedService} Details</h3>
                    <h3 className='card-title fw-bolder text-gray-700 cursor-pointer' onClick={closeSideBarHandler}>X</h3>
                </div>
                <div className='card-body overflow-auto'>
                    {
                        Object.keys(dataTableData).map(key => {
                            return dataTableData[key].map(element => {
                                if (element.ID == sideBarServiceId) {
                                    return (
                                        <div className=" shadow-lg rounded-2 overflow-auto" key={sideBarServiceId}>
                                            <img src={element.VenueImages} className="card-img-top" alt="..." />
                                            <div className="card-body overflow-auto">

                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> {searchedService == '' ? 'Venues ' : searchedService} Title:
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.Title}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Overview :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.Overview}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Address :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.Address}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Max Capacity :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.MaxCapacity}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Min Capacity :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.MinCapacity}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Host Name :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.HostName}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> About :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.About}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Contact :
                                                        <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {element.Contact}  </span>
                                                    </div>
                                                </div>
                                                <div className="ms-1 mb-3 fs-6">
                                                    <div className='fw-bold'> Action :
                                                    <a href="#" className={`ms-2 btn ${element.Active == 'Y' ?'btn-danger' : 'btn-success'} btn-sm`} >{element.Active == 'Y' ? 'Reject' : 'Accept'}</a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>)
                                }
                            })
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default SideBar