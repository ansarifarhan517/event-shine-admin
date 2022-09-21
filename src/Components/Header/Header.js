import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import userImage from "../../Assets/Images/150-26.jpg"
import { loginActions } from '../../Store/loginSlice/loginSlice'
import Logo from '../../Assets/Images/EventShineLogo.jpeg'
import './Header.css'

const Header = () => {
    const dispatch = useDispatch()

    return (
        <nav className="navbar navbar-expand-lg fixed-top " style={{backgroundColor:'#125B50'}}>
            <div className="container-fluid">
                 <Link to={'/'}>
                     <img alt="Logo" src={Logo} className="h-30px logo navbar-brand cursor-pointer" />
                 </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".collapse" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-xs-3 mt-lg-0">
                        <li className="nav-item">
                            <button className='nav-link btn btn-dark btn-sm' onClick={() => {
                                dispatch(loginActions.setLoggedOut(false))
                                localStorage.removeItem('auth')
                            }}>Logout</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Header