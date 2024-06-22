import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Logo from "../../assets/Logo.png"
import Button from '../../Layout/Button'
import Container from '../../Layout/Container'
import SecondaryButton from '../../Layout/SecondaryButton'
import Flex from '../../Layout/Flex'
import PrimaryButton from '../../Layout/PrimaryButton'
import { RiMenuUnfold4Line2 } from 'react-icons/ri'
import { ImCross, ImMenu } from 'react-icons/im'
import { HiMenuAlt1, HiOutlineMenuAlt1 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import { TiThMenu } from 'react-icons/ti'
const Links = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Services",
    link: "/services"
  },
  {
    name: "Project",
    link: "/project"
  },
  {
    name: "Contact",
    link: "/contact"
  },
  {
    name: "FAQ",
    link: "/faq"
  },
]
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
    console.log(open);
  }
  return (

    <div className='mb-[80px] md:mb-[100px] lg:mb-[108px]'>
      <Container className="">
        <nav className={`md:flex justify-between items-center  text-primary py-4 md:py-4  px-6 text-base backdrop-blur-[200px]   border-[1px] border-tertiary font-semibold shadow-xl fixed w-[85%] z-50 md:rounded-lg shadow-[0_10px_15px_rgba(0,0,0,0.3),_0_4px_6px_rgba(0,0,0,0.1)] ${open ? ' rounded-t-lg' : 'rounded-lg '} `} >
          <div className="" >
            <NavLink to={"/"} > <img src={Logo} className="w-[80px] md:w-[120px]" alt="" /> </NavLink>
          </div>
          <div onClick={handleClick} className='absolute top-3 right-6 cursor-pointer md:hidden text-md text-theme    rounded-sm font-extrabold p-1 '>
            {
              open ? <ImCross /> : <ImMenu />
            }
          </div>
          <ul className={`menu  md:flex md:justify-end items-center gap-x-8 md:py-0 py-6   transition-all duration-300 else-in md:static absolute   w-full md:w-auto md:pl-0 md:bg-transparent  bg-senary pl-5 top-[100%] md:top-[0] rounded-b-lg ${open ? `right-[0%] md:right-0 opacity-100  border-[1px] border-tertiary` : `right-[-100%] opacity-0  md:opacity-100 `}  `}>
            {
              Links.map((link, index) => (
                <li className='md:py-0 py-2' key={index}>
                  <NavLink to={link.link} className="hover:text-theme"> {link.name} </NavLink>
                </li>
              ))
            }
            <li className="md:mt-0 mt-5">
              <NavLink ><PrimaryButton link="contact" text="Let's Talk" /></NavLink>
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


