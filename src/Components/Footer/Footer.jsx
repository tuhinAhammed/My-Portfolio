import React from 'react'
import Container from '../../Layout/Container'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <Container>
                <Flex className="innerFooterm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between itrms-center py-4">
                        <MinTitle text="Copyright - 2024 Bontox -All Rights Reserved" className="text-center lg:col-span-1 sm:col-span-2 lg:text-left" />
                    <div className="menu lg:col-span-1 sm:col-span-2 ">
                        <nav className='w-[100%]  text-primary  text-base  text-right   font-semibold tracking-sm'>
                            <div className="menu  flex  gap-x-10 justify-end">
                                <NavLink to={"/"} className="hover:text-theme"> Home </NavLink>
                                <NavLink to={"/about"} className="hover:text-theme"> About </NavLink>
                                <NavLink to={"/project"} className="hover:text-theme"> Project </NavLink>
                                <NavLink to={"/pages"} className="hover:text-theme"> Pages </NavLink>
                                <NavLink to={"/contact"} className="hover:text-theme"> Contact </NavLink>
                            </div>
                        </nav>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default Footer