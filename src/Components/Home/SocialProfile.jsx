import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import Flex from "../../Layout/Flex"
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go';
import SocialHover from "../../assets/social-hover.png"
import { Link } from 'react-router-dom';
import BoxAction from './BoxAction';

const SocialProfile = ({ className, actionClassName }) => {
  return (
    <div className={`${className}`}>
      <Flex className=" pb-10 justify-center gap-4 itmes-center">
        <a href="https://www.linkedin.com/in/tuhin-ahammed/" target="_blank" className='relative group transition-transform '>
          <div className='w-[121%] lg:top-[-10px] lg:left-[-10px] sm:top-[-7px] sm:left-[-7px] top-[-7px] left-[-7px] absolute  '>
            <img src={SocialHover} alt="" className='rounded-full  group-hover:rotate-[50deg] duration-500 animate-spin-slow group-hover:animate-none ' />
          </div>
          <div className=''>
          <CiLinkedin className='text-primary text-7xl lg:text-8xl p-4 lg:p-6  group-hover:text-theme' />
          </div>
        </a>
        <a href="mailto:tuhinahamed2030@gemail.com" target="_blank" className='relative group transition-transform '>
          <div className='w-[121%] lg:top-[-10px] lg:left-[-10px] sm:top-[-7px] sm:left-[-7px] top-[-7px] left-[-7px] absolute  '>
            <img src={SocialHover} alt="" className='rounded-full  group-hover:rotate-[50deg] duration-500 animate-spin-slow group-hover:animate-none' />
          </div>
          <div className=''>
          <CgMail className='text-primary text-7xl lg:text-8xl p-4 lg:p-6  group-hover:text-theme' />
          </div>
        </a>
      </Flex>
      <BoxAction title="Social Profile" link="/contact"/>

    </div>
  )
}

export default SocialProfile