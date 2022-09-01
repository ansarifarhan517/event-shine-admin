import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataTableData } from '../../Store/datatableSlice/datatableSlice'
import { setServiceAcceptOrReject } from '../../Store/storeHelper'
import './MainContent.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { sideBarActions } from '../../Store/sideBarSlice/sideBarSlice'
const MainContent = (props) => {
  const dispatch = useDispatch()
  const dataTableData = useSelector(state => state.dataTableReducer.dataTableData)
  const searchedService = useSelector(state => state.dataTableReducer.searchedService)
  const MySwal = withReactContent(Swal)

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
  const openDetailServicePage = (e) => {
    console.log(e.target.dataset.serviceid)
    dispatch(sideBarActions.setSelectedServiceID(e.target.dataset.serviceid))
    console.log(props.sideBarRef.current)
    props.sideBarRef.current.style.right = '0%'
  }


  useEffect(() => {
    if (searchedService === '') {
      dispatch(getDataTableData('Venues'))
    } else {
      dispatch(getDataTableData(searchedService))
    }
  }, [searchedService])



  return (
    <div className='mainContent'>
      <div className={`card m-2 shadow-lg`}>
        {/* begin::Header */}
        <div className='card-header border-0 pt-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label fw-light fs-2 mb-1'>{searchedService == '' ? 'Venues' : searchedService}</span>
          </h3>
          <div className='card-toolbar'>
            <ul className='nav'>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-warning active fw-bolder px-4 me-1'
                  data-bs-toggle='tab'
                  href='#pending'>
                  Pending
                </a>
              </li>
              <li className='nav-item'>

                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-success fw-bolder px-4 me-1'
                  data-bs-toggle='tab'
                  href='#Accepted'
                >
                  Accepted
                </a>

              </li>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-danger fw-bolder px-4'
                  data-bs-toggle='tab'
                  href='#rejected'
                >
                  Rejected
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className='card-body py-3'>
          <div className='tab-content'>
            {/* begin::Tap pane pending starts */}
            <div className='tab-pane fade show active' id='pending'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                  {/* begin::Table head */}
                  <thead className='text-center'>
                    <tr className="fw-bolder text-muted bg-light" >
                      <th className="rounded-start ps-2">ID</th>
                      <th className="">Title</th>
                      <th className="">Address</th>
                      <th className="">City</th>
                      <th className="rounded-end">Action</th>
                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin:: pending Table body starts */}
                  <tbody>
                    {
                      Object.keys(dataTableData).length > 0 && dataTableData.pending.map((element, index) => {
                        return (
                          <tr key={element.ID} >
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{index + 1}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6' data-serviceid={element.ID} onClick={openDetailServicePage}>{element.Title}</td>
                            <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.Address}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.City}</td>
                            <td >
                              <div className="d-flex justify-content-center align-items-center">
                                <button type="button" className="btn btn-success btn-sm d-flex align-items-center" value="accept" data-serviceid={element.ID} onClick={serviceAcceptAndRejectHandler}><i className="fa fa-check ps-1"></i></button>
                                <button type="button" className="ms-2 btn btn-danger btn-sm d-flex align-items-center" value="reject" data-serviceid={element.ID} onClick={serviceAcceptAndRejectHandler} ><i className="fa fa-times ps-1"></i></button>
                              </div>
                            </td>

                          </tr>
                        )
                      })
                    }

                  </tbody>
                  {/* end:: pending Table body ends  */}
                </table>
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane  pending ends*/}

            {/* begin::Tap pane Accepted */}
            <div className='tab-pane fade' id='Accepted'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                  {/* begin::Table head */}
                  <thead className='text-center'>
                    <tr className="fw-bolder text-muted bg-light">
                      <th className="ps-2 rounded-start ">ID</th>
                      <th className="">Title</th>
                      <th className="">Address</th>
                      <th className="">City</th>
                      <th className="">Action</th>

                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>
                    {
                      Object.keys(dataTableData).length > 0 &&
                      dataTableData.accepted.map((element, index) => {
                        return (
                          <tr key={index}>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{index + 1}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'
                            data-serviceid={element.ID} onClick={openDetailServicePage}>{element.Title}</td>
                            <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.Address}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.City}</td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <button type="button" className="ms-2 btn btn-danger btn-sm d-flex align-items-center" value="reject" data-serviceid={element.ID} onClick={serviceAcceptAndRejectHandler} ><i className="fa fa-times ps-1"></i></button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                  {/* end::Table body */}
                </table>
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane Accepted */}



            {/* begin::Tap pane Rejected*/}
            <div className='tab-pane fade' id='rejected'>
              {/* begin::Table container */}
              <div className='table-responsive'>
                {/* begin::Table */}
                <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                  {/* begin::Table head */}
                  <thead className='text-center'>
                    <tr className="fw-bolder text-muted bg-light">
                      <th className="ps-2 rounded-start ">ID</th>
                      <th className="">Title</th>
                      <th className="">Address</th>
                      <th className="">City</th>
                      <th className="">Action</th>


                    </tr>
                  </thead>
                  {/* end::Table head */}
                  {/* begin::Table body */}
                  <tbody>

                    {Object.keys(dataTableData).length > 0 &&
                      dataTableData.rejected.map((element, index) => {
                        return (
                          <tr key={index}>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{index + 1}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'
                            data-serviceid={element.ID} onClick={openDetailServicePage}>{element.Title}</td>
                            <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.Address}</td>
                            <td className='text-center text-dark fw-bolder text-hover-primary mb-1 fs-6'>{element.City}</td>
                            <td>
                              <div className="d-flex justify-content-center align-items-center">
                                <button type="button" className="ms-2 btn btn-success btn-sm d-flex align-items-center" value="accept" data-serviceid={element.ID} onClick={serviceAcceptAndRejectHandler} ><i className="fa fa-times ps-1"></i></button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                  {/* end::Table body */}
                </table>
              </div>
              {/* end::Table */}
            </div>
            {/* end::Tap pane Rejcted */}


          </div>
        </div>
        {/* end::Tables*/}
      </div>
    </div>

  )
}

export default MainContent