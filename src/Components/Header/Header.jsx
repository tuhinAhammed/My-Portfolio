import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from "../../assets/Logo.png"
import Button from '../../Layout/Button'
import Container from '../../Layout/Container'
import SecondaryButton from '../../Layout/SecondaryButton'
import Flex from '../../Layout/Flex'
import PrimaryButton from '../../Layout/PrimaryButton'
const Links = [
  {
    name : "Home",
    link : "/"
  },
  {
    name : "About",
    link : "/about"
  },
  {
    name : "Services",
    link : "/services"
  },
  {
    name : "Project",
    link : "/project"
  },
  {
    name : "Pages",
    link : "/pages"
  },
  {
    name : "Contact",
    link : "/contact"
  }
]
const Header = () => {
  return (
    <div className=''>
      <Container className="">
        <nav className=' lg:flex justify-between items-center  text-primary py-6 lg:py-4  px-6 text-base bg-quaternary  border-2 border-tertiary font-semibold fixed w-[85%]  z-[9999]'>
          <div className="">
            <NavLink to={"/"} > <img src={Logo} className="w-[120px]" alt="" /> </NavLink>
          </div>
          <ul className="menu  lg:flex lg:justify-end items-center gap-x-8 lg-py-0 py-0 lg:mt-0 mt-6">
            {
              Links.map((link , index) => (
            <li className='lg:py-0 py-2'><NavLink to={link.link} className="hover:text-theme"> {link.name} </NavLink></li>

              ))
            }
          <li className="lg:mt-0 mt-5">
          <NavLink ><PrimaryButton link = "contact" text="Let's Talk"/></NavLink>
          </li>
            
          </ul>

        </nav>
      </Container>
    </div>
  )
}

export default Header


// const Header = () => {
//   return (
//     <div className=''>
//       <Container className="">
//         <nav className='w-[100%] flex justify-between items-center text-primary  py-4 px-9 text-base bg-quaternary rounded-2xl border-2 border-tertiary font-semibold tracking-sm'>
//           <div className="logo w-[25%]">
//             <NavLink to={"/"} > <img src={Logo} className="w-[120px]" alt="" /> </NavLink>
//           </div>
//           <div className="menu w-[50%] flex justify-end gap-x-8">
//             <NavLink to={"/"} className="hover:text-theme"> Home </NavLink>
//             <NavLink to={"/about"} className="hover:text-theme"> About </NavLink>
//             <NavLink to={"/project"} className="hover:text-theme"> Project </NavLink>
//             <NavLink to={"/pages"} className="hover:text-theme"> Pages </NavLink>
//             <NavLink to={"/services"} className="hover:text-theme"> Services </NavLink>
//             <NavLink to={"/contact"} className="hover:text-theme"> Contact </NavLink>
//           </div>
//           <div className="contact w-[25%] flex justify-end items-center gap-x-2">
//             <Link to={"/contact"} className="group">
//               <Flex className="items-center gap-x-2">
//               <Button text="Let's Talk"/> 
//               <SecondaryButton/>
//               </Flex>
//             </Link>
//           </div>
//         </nav>
//       </Container>
//     </div>
//   )
// }

// export default Header


