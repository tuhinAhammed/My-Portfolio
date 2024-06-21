import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import { CgMail, CgWebsite } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubFilled, TbView360 } from 'react-icons/tb'
import { LuGithub } from 'react-icons/lu'
import SocialHover from "../../assets/social-hover.png"
import { Link } from 'react-router-dom'
import BoxAction from './BoxAction'

const WorksWith = ({className}) => {
  return (
    <div className={`color-primary ${className}`}>
    <MidTitle text="Works with &" className="group-hover:text-theme duration-300" />
    <MidTitle text="Object" className="text-right" />
    <Flex className=" py-4  justify-center gap-4 itmes-center">
    <Link to="https://github.com/tuhinAhammed/" target="_blank" className='relative group transition-transform '>
          <div className='w-[121%] lg:top-[-7px] lg:left-[-7px] sm:top-[-7px] sm:left-[-7px] top-[-7px] left-[-7px] absolute  '>
            <img src={SocialHover} alt="" className='rounded-full animate-spin-slow duration-500 ' />
          </div>
          <div className=''>
          <LuGithub className='text-primary text-6xl lg:text-7xl p-4 lg:p-5  rounded-full group-hover:text-theme group-hover:animate-pulse' />
          </div>
        </Link>
    <Link to="https://vercel.com/tuhin-ahammeds-projects" target="_blank" className='relative group transition-transform '>
          <div className='w-[121%] lg:top-[-7px] lg:left-[-7px] sm:top-[-7px] sm:left-[-7px] top-[-7px] left-[-7px] absolute  '>
            <img src={SocialHover} alt="" className='rounded-full animate-spin-slow duration-500 ' />
          </div>
          <div className=''>
          <TbView360 className='text-primary text-6xl lg:text-7xl p-4 lg:p-5  rounded-full group-hover:text-theme group-hover:animate-pulse' />
          </div>
        </Link>
        {/* <a href="https://github.com/tuhinAhammed/" target="_blank">
          <LuGithub  className='text-primary text-7xl p-4  border-2 border-tertiary rounded-full hover:text-theme' />
        </a>
        <a href="https://vercel.com/tuhin-ahammeds-projects" target="_blank">
          <TbView360  className='text-primary text-7xl p-4  border-2 border-tertiary rounded-full hover:text-theme' />
        </a> */}
      </Flex>
        <BoxAction title="Get in Touch" link="/contact" className="mt-[13px]"/>
</div>
  )
}

export default WorksWith