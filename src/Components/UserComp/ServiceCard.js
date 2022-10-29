import React,{ useState , useEffect} from "react";
import Swal from "sweetalert2";
import { GetImage } from "../../Store/storeHelper";

// import 'swiper/css/bundle';
// import 'swiper/css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, EffectCoverflow, Navigation } from "swiper";

const ServiceCard = (props) => {

    const {serviceData, serviceName} = props;

    const [serviceObj, setServiceObj] = useState();

    useEffect(() => {
        let ignore = false;

        const setData = async() => {
            try {    
                const Images = [];
                if (serviceData.Images && serviceData.Images.length > 0) {
                    let imageFolder = serviceName;
                    for (const imageName of serviceData.Images) {                        
                        if (imageFolder != 'Venues' && imageFolder != 'Photographer') {
                            if(imageFolder === "Beauticians" || imageFolder === "Mehndi-artist")
                                imageFolder = 'service';
                            else
                                imageFolder = imageFolder.substring(0, imageFolder.length - 1)                                                        
                        }                     

                        const imageUrl = await GetImage(`${imageFolder.toLowerCase()}-images/${imageName}`);
                        Images.push(imageUrl)
                    }

                }
                serviceData.Images = Images;
                serviceData.ServiceType = serviceName;

                setServiceObj(serviceData, );
            }
            catch (error) {
                Swal.fire({
                    icon : 'error',
                    titleText : 'Something went wrong',
                });
            }
        }

        if(!ignore && !!serviceData) setData();

        return () => ignore = true;   
    },[serviceData])

    return ( <>
        <div className='card-body overflow-auto col-12 px-2 py-1 '>
            { (!!serviceObj) && (<>
                {/* <div className="shadow-lg rounded-2 overflow-auto" key={serviceObj.ID}> */}
                <div className="custom-shadow rounded-2 overflow-auto" key={serviceObj.ID}>

                    {/* <div className='card-image-top'>
                        {serviceObj.Images.length > 0 &&
                            <Swiper
                                lazy={true} navigation={true}
                                modules={[Navigation, Autoplay, EffectCoverflow]}
                                slidesPerView={1}
                                 //onSlideChange={() => console.log('slide change')}
                                //onSwiper={(swiper) => console.log(swiper)}
                                className="mySwiper"
                            >
                                {serviceObj.Images.map((images, index) => {
                                    return (<SwiperSlide key={index}>
                                        <img src={images} className='card-image-top h-225px h-md-300px h-lg-350px w-100' />
                                    </SwiperSlide>)
                                })}

                            </Swiper>
                        }
                    </div> */}
                    <div className="card-body overflow-auto p-3">
                        <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Name :
                                <span className='text-gray-700 fs-5 fw-light text-hover-info'>  {serviceObj.Title}  </span>
                            </div>
                        </div>
                        {/* <div className="ms-1 mb-3 fs-6">

                            <div className='fw-bold'> Overview :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.Overview}  </span>
                            </div>
                        </div> */}

                        {serviceObj.ServiceType && (<>
                            <div className="ms-1 mb-3 fs-6">
                                <div className='fw-bold'> Service Type :
                                    <span className='text-gray-700 fs-5 fw-light text-hover-info'>  {serviceObj.ServiceType}  </span>
                                </div>
                            </div>
                        </>)}

                        <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Address :
                                <span className='text-gray-700 fs-5 fw-light text-hover-info'>  {serviceObj.Address}  </span>
                            </div>
                        </div>
                        {/* <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Max Capacity :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.MaxCapacity}  </span>
                            </div>
                        </div>
                        <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Min Capacity :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.MinCapacity}  </span>
                            </div>
                        </div> */}
                        {/* <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Host Name :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.HostName}  </span>
                            </div>
                        </div>
                        <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> About :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.About}  </span>
                            </div>
                        </div>
                        <div className="ms-1 mb-3 fs-6">
                            <div className='fw-bold'> Contact :
                                <span className='text-gray-700 fs-6 fw-light text-hover-info'>  {serviceObj.Contact}  </span>
                            </div>
                        </div> */}

                    
                    </div>
                </div>
            </>)
            }

        </div>
    </>)
}

export default ServiceCard