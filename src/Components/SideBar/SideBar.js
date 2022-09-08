import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { setServiceAcceptOrReject } from '../../Store/storeHelper'
import { getDataTableData } from '../../Store/datatableSlice/datatableSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, EffectCoverflow, Navigation } from "swiper";

import "./SideBar.css"
import Loader from '../Loader/Loader'
import { sideBarActions } from '../../Store/sideBarSlice/sideBarSlice'
const SideBar = (props) => {
    const selectedData = useSelector(state => state.sideBarReducer.selectedData)
    const sideBarLoader = useSelector(state => state.sideBarReducer.sideBarLoader)
    const searchedService = useSelector(state => state.dataTableReducer.searchedService)
    const MySwal = withReactContent(Swal)
    const dispatch = useDispatch()


    const closeSideBarHandler = () => {

        if (window.innerWidth <= '425') {
            console.log('mobile')
            props.sideBarRef.current.style.right = '-100%'
        }
        else if (window.innerWidth > '425' && window.innerWidth <= '1024') {
            console.log('tablet')
            props.sideBarRef.current.style.right = '-90%'

        }
        else if (window.innerWidth > '1024' && window.innerWidth <= '1440') {
            console.log('lg-laptop')
            props.sideBarRef.current.style.right = '-80%'
        }
        else if (window.innerWidth > '1440' && window.innerWidth < '2560') {
            console.log('xl-laptop')
            props.sideBarRef.current.style.right = '-70%'
        }
    }
    const serviceAcceptAndRejectHandler = (e) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You wont be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "yes,do it"
        }).then(async function (result) {

            if (result.value) {
                let serviceName = searchedService == '' ? 'Venues' : searchedService
                const response = await setServiceAcceptOrReject(e.target.value, e.target.dataset.serviceid, serviceName)
                if (response) {
                    MySwal.fire({
                        icon: 'success',
                        title: `${serviceName} Updated Successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    dispatch(getDataTableData(serviceName))
                }
            }
        })
    }
    useEffect(() => {
        if (Object.keys(selectedData).length > 0) {
            console.log('hi')
            dispatch(sideBarActions.setSideBarLoader())
        }
    }, [selectedData])

    return (

        <div className='sideBar h-100' ref={props.sideBarRef} >
            <div className='card h-100'>
                <div className='card-header'>
                    <h3 className="card-title fw-bolder text-gray-700">{searchedService == '' ? 'Venues ' : searchedService} Details</h3>
                    <h3 className='card-title fw-bolder text-warning text-gray-700 cursor-pointer btn btn-icon btn-sm btn-active-light-warning mt-3' onClick={closeSideBarHandler}>X</h3>
                </div>
                {sideBarLoader ? <Loader /> :

                    <div className='card-body overflow-auto'>
                        {Object.keys(selectedData).length > 0 &&
                            <div className=" shadow-lg rounded-2 overflow-auto" key={selectedData.ID}>

                                <div className='card-image-top'>

                                    {
                                        selectedData.ImagesURL.length > 0 &&
                                        <Swiper
                                            lazy={true}
                                            navigation={true}
                                            modules={[Navigation, Autoplay, EffectCoverflow]}
                                            slidesPerView={1}
                                            onSlideChange={() => console.log('slide change')}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            className="mySwiper"
                                        >
                                            {selectedData.ImagesURL.map((images, index) => {
                                                return (<SwiperSlide key={index}>
                                                    <img src={images} className='card-image-top h-225px h-md-300px h-lg-350px w-100' />
                                                </SwiperSlide>)
                                            })}

                                        </Swiper>

                                    }


                                </div>
                                <div className="card-body overflow-auto">
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> {searchedService == '' ? 'Venues ' : searchedService} Title:
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.Title}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">

                                        <div className='fw-bold'> Overview :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.Overview}  </span>
                                        </div>
                                    </div>

                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Address :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.Address}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Max Capacity :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.MaxCapacity}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Min Capacity :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.MinCapacity}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Host Name :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.HostName}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> About :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.About}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Contact :
                                            <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {selectedData.Contact}  </span>
                                        </div>
                                    </div>
                                    <div className="ms-1 mb-3 fs-6">
                                        <div className='fw-bold'> Action :
                                            <button className={`ms-2 btn ${selectedData.Active == 'Y' ? 'btn-danger' : 'btn-success'} btn-sm`}
                                                value={selectedData.Active == 'Y' ? 'reject' : 'accept'}
                                                data-serviceid={selectedData.ID}
                                                onClick={serviceAcceptAndRejectHandler}>{selectedData.Active == 'Y' ? 'Reject' : 'Accept'}</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        }

                    </div>

                }
            </div>
        </div >
    )
}

export default SideBar