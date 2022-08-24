import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import $ from 'jquery'
import { getDataTableData } from '../../Store/datatableSlice/datatableSlice'
const MainContent = () => {
  const dataTableData = useSelector(state => state.dataTableReducer.dataTableData)
  const searchedService = useSelector(state => state.dataTableReducer.searchedService)
  const dispatch = useDispatch()

  useEffect(() => {
    if (searchedService === '') {
      dispatch(getDataTableData('Venues'))
    } else {
      console.log()
      dispatch(getDataTableData(searchedService))
    }

  }, [searchedService])

  useEffect(() => {
    if (dataTableData.length > 0) {
      console.log(dataTableData)
      $('#kt_datatable_zero_configuration').DataTable()
    }

  }, [dataTableData])

  // $("#kt_datatable_zero_configuration").DataTable();

  return (
    <table id="kt_datatable_zero_configuration" className="table table-row-bordered gy-5">
      <thead>
        <tr className="fw-semibold fs-6 text-muted">
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
        </tr>
        <tr>
          <td>Ashton Cox</td>
          <td>Junior Technical Author</td>
          <td>San Francisco</td>
          <td>66</td>
          <td>2009/01/12</td>
          <td>$86,000</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
          <button id="kt_engage_demos_toggle" className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0" title="Check out 20 more demos" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">
            <span id="kt_engage_demos_label">Demos</span>
          </button>
        </tr>
      </tfoot>
    </table>
  )
}

export default MainContent