import React from 'react'
import Container from '../../Layout/Container'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import { NavLink } from 'react-router-dom'
import {Links} from "../Header/Header"
const Footer = () => {
    return (
        <div className='mt-6'>
            <Container>
                <div className="innerFooterm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  py-6">
                    <MinTitle text="Copyright - 2024 Object -All Rights Reserved" className="text-center  lg:text-left" />
                    <div className="menu grid grid-cols-3 gap-x-4 gap-y-2 lg:flex justify-center lg:justify-end lg:gap-6 lg:mt-0 mt-5">
                        {
                            Links.map((link, index) => (
                                    <NavLink to={link.link} key={index} className="hover:text-theme text-primary lg:text-left text-center"> {link.name} </NavLink>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer