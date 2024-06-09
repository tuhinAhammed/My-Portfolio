import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from "../../assets/Logo.png"
import Button from '../../Layout/Button'
import Container from '../../Layout/Container'
import SecondaryButton from '../../Layout/SecondaryButton'
import Flex from '../../Layout/Flex'
const Header = () => {
  return (
    <div className=''>
      <Container className="">
        <nav className='w-[100%] flex justify-between items-center text-primary  py-4 px-9 text-base bg-quaternary rounded-2xl border-2 border-tertiary font-semibold tracking-sm'>
          <div className="logo w-[25%]">
            <NavLink to={"/"} > <img src={Logo} className="w-[120px]" alt="" /> </NavLink>
          </div>
          <div className="menu w-[50%] flex justify-end gap-x-8">
            <NavLink to={"/"} className="hover:text-theme"> Home </NavLink>
            <NavLink to={"/about"} className="hover:text-theme"> About </NavLink>
            <NavLink to={"/project"} className="hover:text-theme"> Project </NavLink>
            <NavLink to={"/pages"} className="hover:text-theme"> Pages </NavLink>
            <NavLink to={"/services"} className="hover:text-theme"> Services </NavLink>
            <NavLink to={"/contact"} className="hover:text-theme"> Contact </NavLink>
          </div>
          <div className="contact w-[25%] flex justify-end items-center gap-x-2">
            <Link to={"/contact"} className="group">
              <Flex className="items-center gap-x-2">
              <Button text="Let's Talk"/> 
              <SecondaryButton/>
              </Flex>
            </Link>
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Header