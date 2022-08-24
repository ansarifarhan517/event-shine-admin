import React from 'react'
import userImage from "../../Assets/Images/150-26.jpg"
const Header = () => {
    return (
        <div id="kt_header" className="header align-items-stretch w-100 bg-secondary">
            <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1 w-100">
                <div className="d-flex align-items-stretch justify-content-end flex-shrink-0 w-100">
                    <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                        <div className="cursor-pointer symbol symbol-30px symbol-md-40px me-2" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <img src={userImage} alt="user" />
                        </div>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                            <div className="menu-item px-3">
                                <div className="menu-content d-flex align-items-center px-3">
                                    <div className="symbol symbol-50px me-5">
                                        <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                            <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                        <a href="#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-5">
                                <a href="../../demo1/dist/account/overview.html" className="menu-link px-5">My Profile</a>
                            </div>
                            <div className="menu-item px-5">
                                <a href="../../demo1/dist/apps/projects/list.html" className="menu-link px-5">
                                    <span className="menu-text">My Projects</span>
                                    <span className="menu-badge">
                                        <span className="badge badge-light-danger badge-circle fw-bolder fs-7">3</span>
                                    </span>
                                </a>
                            </div>
                            <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                                <a href="#" className="menu-link px-5">
                                    <span className="menu-title">My Subscription</span>
                                    <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/referrals.html" className="menu-link px-5">Referrals</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/billing.html" className="menu-link px-5">Billing</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">Payments</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/statements.html" className="menu-link d-flex flex-stack px-5">Statements
                                            <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="View your statements"></i></a>
                                    </div>
                                    <div className="separator my-2"></div>
                                    <div className="menu-item px-3">
                                        <div className="menu-content px-3">
                                            <label className="form-check form-switch form-check-custom form-check-solid">
                                                <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue="1" defaultChecked="defaultChecked" name="notifications" />
                                                <span className="form-check-label text-muted fs-7">Notifications</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item px-5">
                                <a href="../../demo1/dist/account/statements.html" className="menu-link px-5">My Statements</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-5" data-kt-menu-trigger="hover" data-kt-menu-placement="left-start">
                                <a href="#" className="menu-link px-5">
                                    <span className="menu-title position-relative">Language
                                        <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">English
                                            <img className="w-15px h-15px rounded-1 ms-2" src="assets/media/flags/united-states.svg" alt="" /></span></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5 active">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="assets/media/flags/united-states.svg" alt="" />
                                            </span>English</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="assets/media/flags/spain.svg" alt="" />
                                            </span>Spanish</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="assets/media/flags/germany.svg" alt="" />
                                            </span>German</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="assets/media/flags/japan.svg" alt="" />
                                            </span>Japanese</a>
                                    </div>
                                    <div className="menu-item px-3">
                                        <a href="../../demo1/dist/account/settings.html" className="menu-link d-flex px-5">
                                            <span className="symbol symbol-20px me-4">
                                                <img className="rounded-1" src="assets/media/flags/france.svg" alt="" />
                                            </span>French</a>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item px-5 my-1">
                                <a href="../../demo1/dist/account/settings.html" className="menu-link px-5">Account Settings</a>
                            </div>
                            <div className="menu-item px-5">
                                <a href="../../demo1/dist/authentication/flows/basic/sign-in.html" className="menu-link px-5">Sign Out</a>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-5">
                                <div className="menu-content px-5">
                                    <label className="form-check form-switch form-check-custom form-check-solid pulse pulse-success" htmlFor="kt_user_menu_dark_mode_toggle">
                                        <input className="form-check-input w-30px h-20px" type="checkbox" defaultValue="1" name="mode" id="kt_user_menu_dark_mode_toggle" data-kt-url="../../demo1/dist/index.html" />
                                        <span className="pulse-ring ms-n1"></span>
                                        <span className="form-check-label text-gray-600 fs-7">Dark Mode</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                        <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px" id="kt_header_menu_mobile_toggle">
                            <span className="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z" fill="black" />
                                    <path opacity="0.3" d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z" fill="black" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header