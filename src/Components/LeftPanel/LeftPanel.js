import React, { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dataTableActions } from '../../Store/datatableSlice/datatableSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBowlFood, faHotel, faCamera, faFan, faPalette, faHandSparkles } from '@fortawesome/free-solid-svg-icons'

import './LeftPanel.css'
const LeftPanel = () => {
    const [services] = useState([
        { name: 'Venues', icon: faHotel },
        { name: 'Caterers', icon: faBowlFood },
        { name: 'Photographer', icon: faCamera },
        { name: 'Decorators', icon: faFan },
        { name: 'Beauticians', icon: faPalette },
        { name: 'Mehndi-artist', icon: faHandSparkles }
    ])
    const dispatch = useDispatch()
    const menuItem = useRef([])
    //Indside Ref array menuItem creating multiple refs = [{current:div#},{current:div#}]   
    menuItem.current = services.map((service, index) => menuItem.current[index] ?? React.createRef())


    const servicesClickHandler = (currentService) => {
        menuItem.current.forEach((service, index) => {
            if (service.current.id != currentService) {
                service.current.className = 'menu-item py-1 mx-2 mx-md-3 mb-4'
            }
            else service.current.className = 'menu-item py-1 mx-2 mx-md-3 mb-4 clicked'
        })
        dispatch(dataTableActions.setSearchedService(currentService))
    }


    return (

        <div id="" className="leftPanel overflow-auto">
            <div className='overflow-y-auto mx-xl-2' style={{ marginTop: '70px' }} >
                {services.map((service, index) => {
                    return (<div ref={menuItem.current[index]} id={service.name} className={`menu-item py-1 mx-2 mx-md-3 mb-4 ${service.name == 'Venues' ? 'clicked' : ''}`} key={index} onClick={() => servicesClickHandler(service.name)}>
                        <div className={`menu-link menu-center`}>
                            <span className="menu-icon me-0 flex-column">
                                <FontAwesomeIcon icon={service.icon} size='xl' />
                                <span className="menu-title">{service.name}</span>
                            </span>
                        </div>
                    </div>)
                })}
            </div>
        </div>

    )
}

export default LeftPanel