import { useDispatch, useSelector } from 'react-redux'
import Image from '../../Assets/Images/loginImage.jpg'
import { postLogin } from '../../Store/auth/authSlice'
import { authActions } from '../../Store/auth/authSlice'
import { loginActions } from '../../Store/loginSlice/loginSlice'
import './Login.css'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'

const Login = () => {

    const dispatch = useDispatch()
    const showPassword = useSelector(state => state.loginReducer.showPassword)
    const LoginValidation = (values) => {
        const { Email, Password } = values;
        console.log(values)
        let errors = {}
        if (!Email) {
            errors.Email = 'Email Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            errors.Email = 'Invalid email format'
        }
        if (!Password) {
            errors.Password = 'Password Required'
        } else if (Password.length < 6) {
            errors.Password = 'Min 6 Characters'
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: { Email: '', Password: '' },
        validate: LoginValidation,
        onSubmit: async (values) => {
            const { Email, Password } = values;
            dispatch(authActions.setLoading(true))
            dispatch(await postLogin({ data: { Email: Email, Password: Password } }))
        }
    });

    const setShowPassword = () => dispatch(loginActions.showPassword());

    return (

        <div className='containers d-flex justify-content-center align-items-center height-100 width-100'>
            <div className='card shadow-lg p-5 height-80 width-70'>
                <div className='row h-100 w-100'>
                    <div className='col-md-6 col-xl-6 col-xxl-6 h-100 px-md-2 px-lg-5 d-none d-md-block'>
                        <img src={Image} className='width-100 height-100 rounded-2 shadow-lg'></img>
                    </div>
                    <div className='col-md-6  col-xxl-4 offset-xxl-1 p-3'>
                        <div style={{ marginTop: '30%' }}>

                            <h6 className='mt-6 mb-6 fs-4'>
                                Welcome to <b className='text-warning'>Event Shine </b>
                            </h6>
                            <h2 className='mb-5'>
                                <b>Hey, <br /> Login Now.</b>
                            </h2>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='mb-3'>

                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            id='Email'
                                            name='Email'
                                            placeholder="Email"
                                            value={formik.values.Email}
                                            className={`form-control ${formik.errors.Email && 'is-invalid'}`}
                                            onChange={formik.handleChange}
                                        />
                                        <span className="input-group-text">@</span>
                                    </div>
                                    {formik.errors.Email && (<div className="error-message"> {formik.errors.Email} </div>)}
                                </div>
                                <div className='mb-3'>
                                    <div className="input-group mb-3">
                                        <input
                                            type={!showPassword ? "password" : "text"}
                                            id="Password"
                                            name="Password"
                                            className={`form-control ${formik.errors.Password && 'is-invalid'}`}
                                            placeholder="Your password"
                                            value={formik.values.Password}
                                            onChange={formik.handleChange}
                                        />
                                        <span className="input-group-text px-3 "><span className="cursor-pointer" onClick={setShowPassword}>
                                            {!showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                                        </span></span>

                                    </div>
                                    {formik.errors.Password && (<div className="error-message"> {formik.errors.Password} </div>)}
                                </div>

                                <div className="d-grid gap-2">
                                    <button type='submit' className="btn btn-warning btn-sm" >
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