import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Container from '../../Layout/Container'
import PrimaryButton from '../../Layout/PrimaryButton'
import { ImCross, ImMenu } from 'react-icons/im'
import PrimaryLogo from '../../Components/Logo/PrimaryLogo'

export const Links = [
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
    name: "FAQ",
    link: "/faq"
  },
  {
    name: "Contact",
    link: "/contact"
  },
]
const Header = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
    console.log(open);
  }
  return (

    <div className='mb-[80px] md:mb-[850px] lg:mb-[105px] '>
      <Container className="">
        <nav className={`md:flex justify-between items-center  dark:text-primary text-secondary py-4 md:py-4  px-6 text-base dark:backdrop-blur-[150px] dark:bg-transparent bg-senary   border-[1px] dark:border-tertiary border-opacity-[0.6] font-semibold  fixed w-[85%] z-50 md:rounded-lg shadow-primary-shadow lg:shadow-header-shadow ${open ? ' rounded-t-lg' : 'rounded-lg '} `} >
          <div className="w-[62%] lg:w-[30%]" >
            <NavLink to={"/"} > <PrimaryLogo className="" /> </NavLink>
          </div>
          <div onClick={handleClick} className='absolute top-[25%]  right-[6%] cursor-pointer md:hidden text-md text-theme    rounded-sm font-extrabold p-1 '>
            {
              open ? <ImCross /> : <ImMenu />
            }
          </div>
          <ul className={`menu  md:flex md:justify-end items-center gap-x-8 md:py-0 py-6   transition-all duration-300 else-in md:static absolute   w-full md:w-auto md:pl-0 md:bg-transparent bg-senary pl-5 top-[100%] md:top-[0] rounded-b-lg ${open ? `right-[0%] md:right-0 opacity-100  border-[1px] border-tertiary border-opacity-[0.6] shadow-header-shadow` : `right-[-100%] opacity-0  md:opacity-100 `}  `}>
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


