import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataTableActions } from '../../Store/datatableSlice/datatableSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faHotel, faCamera, faFan, faPalette, faHandSparkles, faUser, faUsersRectangle } from '@fortawesome/free-solid-svg-icons'
import { Accordion } from 'react-bootstrap'

import './LeftPanel.css'
const LeftPanel = () => {
    const [services] = useState([
        { name: 'Venues', icon: faHotel },
        { name: 'Caterers', icon: faBowlFood },
        { name: 'Photographer', icon: faCamera },
        { name: 'Decorators', icon: faFan },
        { name: 'Beauticians', icon: faPalette },
        { name: 'Mehndi-artist', icon: faHandSparkles },
        { name: 'Users', icon: faUsersRectangle }
    ]);

    const dispatch = useDispatch()
    const menuItem = useRef([])
    //Indside Ref array menuItem creating multiple refs = [{current:div#},{current:div#}]   
    menuItem.current = services.map((service, index) => menuItem.current[index] ?? React.createRef())


    const servicesClickHandler = (currentService) => {
        menuItem.current.forEach((service, index) => {
            if (service.current.id != currentService) {
                service.current.className = 'menu-item'
            }
            else service.current.className = 'menu-item clicked'
        })
        dispatch(dataTableActions.setSearchedService(currentService))
    }


    return (
        <div id="" className="leftPanel overflow-auto">
            <div className='overflow-y-auto mx-xl-2'>

                <Accordion defaultActiveKey="0" flush >
                    <Accordion.Item eventKey="0" className="menu-item mt-3">
                        <Accordion.Header className="menu-content pb-2 text-hover-dark" > 
                            <span className="menu-section text-muted text-uppercase fs-6  ls-1"> Services </span>
                        </Accordion.Header>
                        
                        <Accordion.Body>
                            {services.map((service, index) => {
                                if(service.name !== "Users"){
                                    return (
                                        <div className={`menu-item ${service.name == 'Venues' ? 'clicked' : ''}`} key={index} onClick={() => servicesClickHandler(service.name)}
                                            ref={menuItem.current[index]} id={service.name}>
                                            <div className="menu-link" >
                                                <span className="menu-icon">
                                                    <span className="svg-icon-2">
                                                        <FontAwesomeIcon className='iconColor' icon={service.icon} size='xl' />
                                                    </span>
                                                </span>
                                                <span className="menu-title text-blue">{service.name}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="menu-item mt-3">
                        <Accordion.Header className="menu-content pb-2 text-hover-dark" > 
                            <span className="menu-section text-muted text-uppercase fs-6  ls-1"> Profiles </span>
                        </Accordion.Header>
                        
                        <Accordion.Body>
                            {services.map((service, index) => {
                                if(service.name === "Users"){
                                    return (
                                        <div className={`menu-item ${service.name == 'Venues' ? 'clicked' : ''}`} key={index} onClick={() => servicesClickHandler(service.name)}
                                            ref={menuItem.current[index]} id={service.name}>
                                            <div className="menu-link" >
                                                <span className="menu-icon">
                                                    <span className="svg-icon-2">
                                                        <FontAwesomeIcon className='iconColor' icon={service.icon} size='xl' />
                                                    </span>
                                                </span>
                                                <span className="menu-title text-blue"> All Users </span>
                                                {/* <span className="menu-title text-blue">{service.name}</span> */}
                                            </div>
                                        </div>
                                    )
                                } 
                            })}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
        </div>

    )
}

export default LeftPanel