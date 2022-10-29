import React,{useEffect, useState} from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Swal from 'sweetalert2';
import userImg from '../../Assets/Images/defaultProfile.png';

import { getUserDataByID, getServicesByHostID } from '../../Store/storeHelper';

import Loader from '../Loader/Loader';
import ServiceCard from './ServiceCard';

const ShowServiceCard = (props) => {
    const {serviceobj, service} = props;

    var serviceArr =  serviceobj[service];

    return(<>
        {serviceArr.map((data, i)=> {
            return <ServiceCard key={i} serviceName={service} serviceData={data} />
        })}
    </>);
}


const UserComp = (props) => {
    const { onModalClose, selectedUserId } = props;

    const [selectedVendor, setSelectedVendor] =  useState();

    useEffect(() => {
        let ignore = false;

        //FETCH USER DATA
        //const fetchData = () => dispatch( fetchUserData(selectedUserId) )
        const fetchData = async() => {
            try {        
                const dbRes = await getUserDataByID(selectedUserId);
                if(!dbRes)  return;
                const allServices = await getServicesByHostID(selectedUserId);                
                setSelectedVendor({...dbRes, Services: allServices});                           
            }
            catch (error) {
                Swal.fire({
                    icon : 'error',
                    titleText : 'Something went wrong',
                });
            }
        }

        if(!ignore) fetchData();

        return () => ignore = true;   
    },[selectedUserId])

    return (<>
        <div className="modal fade show" id="kt_modal_add_payment" tabIndex="-1" style={{display:"block"}} aria-modal="true" role="dialog">									
            <div className="modal-dialog mw-1000px">    
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className=""> User Details </h4>
                        <div id="kt_modal_add_payment_close" className="btn btn-icon btn-sm btn-active-icon-primary" onClick={onModalClose}>
                            <FontAwesomeIcon icon={faTimes} fontSize={"20px"} />
                        </div>
                    </div>
                    <div className="modal-body scroll-y mx-4 my-7">

                        {(!selectedVendor ? (<>
                            <Loader />
                        </>):(
                            <div className="post d-flex flex-column-fluid" id="kt_post">
                                <div id="kt_content_container" className="container-xxl">

                                    <div className="d-flex flex-row ">
                                        
                                        {/* User Card */}
                                        <div className="flex-column flex-lg-row-auto w-xl-250px ">
                                            <div className="card shadow-lg border-0 mt-5">
                                                <div className="card-body p-4">
                                                    <div className="d-flex flex-center flex-column mb-0">
                                                        <div className="symbol symbol-100px symbol-circle mb-2">
                                                            <img src={selectedVendor.ProfileImage ? selectedVendor.ProfileImage : userImg} alt="image" />
                                                        </div>
                                                        <span className="fs-4 text-gray-800 text-hover-primary fw-bolder mb-1"> {selectedVendor.Firstname + " " + selectedVendor.Lastname} </span>
                                                        {/* <div className="fs-5 fw-bold text-muted mb-0">Software Enginer</div>					 */}
                                                    </div>
                                                    
                                                    <div className="separator separator-dashed my-3"></div>
                                                    <div id="kt_customer_view_details" className="collapse show" >
                                                        <div className="py-4 fs-6">						
                                                            <div className="fw-bolder  mt-4"> Email </div>
                                                            <div className="text-gray-600">
                                                                <a href="#" className="text-gray-600 text-hover-primary"> {selectedVendor.Email} </a>
                                                            </div>
                                                            <div className="fw-bolder  mt-4"> Contact </div>
                                                            <div className="text-gray-600"> {selectedVendor.Phone} </div>
                                                          
                                                            {/* <div className="fw-bolder  mt-4">Tax ID</div>
                                                            <div className="text-gray-600">TX-8674</div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* User Services */}
                                        <div className="flex-lg-row-fluid ms-4">
                                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-3">                                            
                                                <li className="nav-item">
                                                    <span className="nav-link text-active-primary fs-5 pt-0 pb-1 active" data-bs-toggle="tab" > All Services </span>
                                                </li>
                                                {/* <li className="nav-item"></li> */}
                                                {/* <li className="nav-item ms-auto"></li>			 */}
                                            </ul>

                                            <div className="tab-content" id="myTabContent">	
                                                <div className="tab-pane fade active show" id="user_services" role="tabpanel">
                                                    
                                                    <div className="card mb-6 mb-xl-9 shadow-lg border-0">
                                                        {/* <div className="card-header border-0 minHeight-50">
                                                            <div className="card-title">
                                                                <h4> Services </h4>
                                                            </div>
                                                        </div> */}
                                                        <div className="card-body py-0 px-4 pt-3 oweflow-hidden ">                                                            
                                                          {Object.keys(selectedVendor.Services).length > 0 ? (<>                                                            
                                                            {Object.keys(selectedVendor.Services).map((serviceName, i) => {        
                                                               return <ShowServiceCard key={i} serviceobj ={selectedVendor.Services} service = {serviceName}/>
                                                            })}
                                                          </>) : (<div className='my-3'>
                                                                <h4 className='text-muted text-center'> No Services ..! </h4>
                                                          </div>)}                                                             
                                                        </div>
                                                    </div>
                                                </div>		
                                            </div>
                                        </div>
                                
                                    </div>     
                                                                
                                </div>
                            </div>
                        ))}                                
                    </div>
                </div>
            </div>  
        </div>
        <div className="modal-backdrop fade show"></div>
    </>)
}

export default UserComp