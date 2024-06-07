import React from 'react'
import Container from '../../Layout/Container'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <Container>
                <Flex className="innerFooterm justify-between ">
                    <Flex className="justify-between items-center">
                        <MinTitle text="Copyright - 2024" />
                        <MinTitle text="Bontox" className="!text-primary" />
                        <MinTitle text="-All Rights Reserved" className="!text-primary" />
                    </Flex>
                    <div className="menu">
                        <nav className='w-[100%]  text-primary  py-4 px-9 text-base     font-semibold tracking-sm'>
                            <div className="menu  flex  gap-x-8">
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