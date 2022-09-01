import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Image from '../../Assets/Images/loginImage.jpg'
import { loginActions } from '../../Store/loginSlice/loginSlice'
import './Login.css'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        try {
            e.preventDefault()
            console.log(userName, password)
            if (userName == 'aaa' && password == 'aaa') {
                dispatch(loginActions.setLoggedIn(true))
                navigate('/')
            }
            else {
                alert('password galt hai')
            }
            // const user = await userService.login(userName, password)
            // if (user) {
            //     window.location = '/'
            // } else {
            //     setMessageModal('Invalid Username or Password')
            //     setShowModal(true)
            // }

        } catch (error) {
            console.log(error)
            // setMessageModal('Something went wrong')
            // setShowModal(true)
        }
    }
    const LoginContainerCss = {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5%',
        height: '80%'
    }

    return (

        <div className='containers d-flex justify-content-center align-items-center height-100 width-100'>
            <div className='card shadow-lg p-5 height-80 width-70'>
                <div className='row h-100 w-100'>
                    <div className='col-md-7 col-xl-6 col-xxl-6 h-100 px-md-2 px-lg-5 d-none d-md-block'>
                        <img src={Image} className='width-100 height-100 rounded-2 shadow-lg'></img>
                    </div>
                    <div className='col-md-5  col-xxl-4 offset-xxl-1 p-3'>
                        <div style={{ marginTop: '30%' }}>

                            <h6 className='mt-6 mb-6 fs-4'>
                                Welcome to <b className='text-primary'>Globo Live 3d</b>
                            </h6>
                            <h2 className='mb-5'>
                                <b>Hey, <br /> Login Now.</b>
                            </h2>
                            <form onSubmit={handleSubmit}>

                                <div className="input-group mb-3">
                                    <span className="input-group-text">@</span>
                                    <input type="text" className="form-control" placeholder="Username" aria-label="username" aria-describedby="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text px-3 ">*</span>
                                    <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary btn-sm" disabled={!userName || !password} >
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login