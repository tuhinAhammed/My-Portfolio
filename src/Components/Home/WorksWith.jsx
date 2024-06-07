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
const WorksWith = ({className}) => {
  return (
    <div className={`color-primary ${className}`}>
    <MidTitle text="Works with &" className="group-hover:text-theme duration-300" />
    <MidTitle text="Object" className="text-right" />
    <Flex className=" py-4  justify-center gap-4 itmes-center">
        <a href="https://github.com/tuhinAhammed/" target="_blank">
          <LuGithub  className='text-primary text-7xl p-4  border-2 border-tertiary rounded-full hover:text-theme' />
        </a>
        <a href="https://vercel.com/tuhin-ahammeds-projects" target="_blank">
          <TbView360  className='text-primary text-7xl p-4  border-2 border-tertiary rounded-full hover:text-theme' />
        </a>
      </Flex>
    <Flex className="worksWith cursor-pointer mt-[13px]  justify-between items-center  group transition  delay-1000">
        <MinTitle text="Get In Touth" className="group-hover:text-theme  " />
        <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme ' />
    </Flex>
</div>
  )
}

export default WorksWith