import React from 'react'
import "./SideBar.css"
const SideBar = () => {
    return (
        //  <div id="kt_engage_demos" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'350px', 'lg': '475px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_engage_demos_toggle" data-kt-drawer-close="#kt_engage_demos_close">
        //     <div className="card shadow-none rounded-0 w-100">
        //         <div className="card-header" id="kt_engage_demos_header">
        //             <h3 className="card-title fw-bolder text-gray-700">Explore</h3>
        //             <div className="card-toolbar">
        //                 <button type="button" className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6" id="kt_engage_demos_close">
        //                     <span className="svg-icon svg-icon-2">
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        //                             <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
        //                             <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
        //                         </svg>
        //                     </span>
        //                 </button>
        //             </div>
        //         </div>
        //         <div className="card-body" id="kt_engage_demos_body">
        //             <div id="kt_explore_scroll" className="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_engage_demos_body" data-kt-scroll-dependencies="#kt_engage_demos_header" data-kt-scroll-offset="5px">
        //                 <div className="mb-0">
        //                     <div className="mb-7">
        //                         <div className="d-flex flex-stack">
        //                             <h3 className="mb-0">Metronic Licenses</h3>
        //                             <a href="https://themeforest.net/licenses/standard" className="fw-bold" target="_blank">License FAQs</a>
        //                         </div>
        //                     </div>
        //                     <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
        //                         <div className="d-flex flex-stack">
        //                             <div className="d-flex flex-column">
        //                                 <div className="d-flex align-items-center mb-1">
        //                                     <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Regular License</div>
        //                                     <i className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="popover" data-bs-custom-classname="popover-dark" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Use, by you or one client in a single end product which end users are not charged for"></i>
        //                                 </div>
        //                                 <div className="fs-7 text-muted">For single end product used by you or one client</div>
        //                             </div>
        //                             <div className="text-nowrap">
        //                                 <span className="text-muted fs-7 fw-bold me-n1">$</span>
        //                                 <span className="text-dark fs-1 fw-bolder">39</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
        //                         <div className="d-flex flex-stack">
        //                             <div className="d-flex flex-column">
        //                                 <div className="d-flex align-items-center mb-1">
        //                                     <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Extended License</div>
        //                                     <i className="text-gray-400 fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="popover" data-bs-custom-classname="popover-dark" data-bs-trigger="hover" data-bs-placement="top" data-bs-content="Use, by you or one client, in a single end product which end users can be charged for."></i>
        //                                 </div>
        //                                 <div className="fs-7 text-muted">For single SaaS app with paying users</div>
        //                             </div>
        //                             <div className="text-nowrap">
        //                                 <span className="text-muted fs-7 fw-bold me-n1">$</span>
        //                                 <span className="text-dark fs-1 fw-bolder">939</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
        //                         <div className="d-flex flex-stack">
        //                             <div className="d-flex flex-column">
        //                                 <div className="d-flex align-items-center mb-1">
        //                                     <div className="fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1">Custom License</div>
        //                                 </div>
        //                                 <div className="fs-7 text-muted">Reach us for custom license offers.</div>
        //                             </div>
        //                             <div className="text-nowrap">
        //                                 <a href="https://keenthemes.com/contact/" className="btn btn-sm btn-success" target="_blank">Contact Us</a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <a href="https://1.envato.market/EA4JP" className="btn btn-primary mb-15 w-100">Buy Now</a>
        //                     <div className="mb-0">
        //                         <h3 className="fw-bolder text-center mb-6">Metronic Demos</h3>
        //                         <div className="row g-5">
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo1.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo1" className="btn btn-sm btn-success shadow">Demo 1</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo2.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo2" className="btn btn-sm btn-success shadow">Demo 2</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo3.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo3" className="btn btn-sm btn-success shadow">Demo 3</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo4.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo4" className="btn btn-sm btn-success shadow">Demo 4</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo5.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo5" className="btn btn-sm btn-success shadow">Demo 5</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo6.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo6" className="btn btn-sm btn-success shadow">Demo 6</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo7.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo7" className="btn btn-sm btn-success shadow">Demo 7</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo8.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo8" className="btn btn-sm btn-success shadow">Demo 8</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo9.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo9" className="btn btn-sm btn-success shadow">Demo 9</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo10.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo10" className="btn btn-sm btn-success shadow">Demo 10</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo11.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo11" className="btn btn-sm btn-success shadow">Demo 11</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo12.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo12" className="btn btn-sm btn-success shadow">Demo 12</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo13.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo13" className="btn btn-sm btn-success shadow">Demo 13</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo14.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo14" className="btn btn-sm btn-success shadow">Demo 14</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo15.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo15" className="btn btn-sm btn-success shadow">Demo 15</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo16.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo16" className="btn btn-sm btn-success shadow">Demo 16</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo17.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo17" className="btn btn-sm btn-success shadow">Demo 17</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo18.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo18" className="btn btn-sm btn-success shadow">Demo 18</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo19.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo19" className="btn btn-sm btn-success shadow">Demo 19</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo20.png" alt="demo" className="w-100" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <a href="https://preview.keenthemes.com/metronic8/demo20" className="btn btn-sm btn-success shadow">Demo 20</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo21.png" alt="demo" className="w-100 opacity-25" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo22.png" alt="demo" className="w-100 opacity-25" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo23.png" alt="demo" className="w-100 opacity-25" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                             <div className="col-6">
        //                                 <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
        //                                     <div className="overlay-wrapper">
        //                                         <img src="assets/media/demos/demo24.png" alt="demo" className="w-100 opacity-25" />
        //                                     </div>
        //                                     <div className="overlay-layer bg-dark bg-opacity-10">
        //                                         <div className="badge badge-white px-6 py-4 fw-bold fs-base shadow">Coming soon</div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div> 
        // </div> 
        <div className='sideBar'>
            <div className='card'>
                <div className='card-header'>
                   <h3 className="card-title fw-bolder text-gray-700">Explore</h3>

                </div>
                <div className='card-body'>

                </div>
            </div>
        </div>
    )
}

export default SideBar