import React from 'react'
import { useDispatch } from 'react-redux'
import userImage from "../../Assets/Images/150-26.jpg"
import { loginActions } from '../../Store/loginSlice/loginSlice'
import './Header.css'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <div id="kt_header" className="header bg-dark align-items-stretch w-100">
            <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1 w-100">
                <div className="d-flex align-items-stretch justify-content-end flex-shrink-0 w-100">
                    <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                        <button className='btn btn-danger btn-sm me-3' onClick={()=>{
                           dispatch(loginActions.setLoggedOut(false)) 
                        }}>Logout</button>
                        {/* <div className="cursor-pointer symbol symbol-30px symbol-md-40px me-2" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <img src={userImage} alt="user" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header