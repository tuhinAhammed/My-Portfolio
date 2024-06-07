import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import Flex from "../../Layout/Flex"
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go';
const SocialProfile = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Flex className=" pb-10 justify-center gap-4 itmes-center">
        <a href="https://www.linkedin.com/in/tuhin-ahammed/" target="_blank">
          <CiLinkedin className='text-primary text-8xl p-6  border-2 border-tertiary rounded-full hover:text-theme' />
        </a>
        <a href="mailto:tuhinahamed2030@gmail.com" target="_blank">
          <CgMail className='text-primary text-8xl p-6  border-2 border-tertiary rounded-full hover:text-theme' />
        </a>
      </Flex>
      <Flex className="justify-between cursor-pointer items-end group transition  delay-1000">
        <MinTitle text="Social Profile" className="group-hover:text-theme   " />
        <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme' />
      </Flex>
    </div>
  )
}

export default SocialProfile