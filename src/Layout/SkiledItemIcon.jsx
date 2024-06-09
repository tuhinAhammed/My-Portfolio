import React, { Children } from 'react'
import MinTitle from './MinTitle'
import SocialHover from "../assets/social-hover.png"
import { FiPhoneCall, FiPhoneForwarded } from 'react-icons/fi'
import { CgMail } from 'react-icons/cg'
import { LuPhoneCall } from 'react-icons/lu'
const SkiledItemIcon = ({ className,  children , directLink }) => {
    return (
        <div className="inline-block">
                       <a href={directLink} target="_blank" className='relative group transition-transform '>
  <div className='w-[121%] top-[-7px] left-[-7px]  absolute   '>
    <img src={SocialHover} alt="" className='rounded-full opacity-0 group-hover:opacity-100 group-hover:rotate-[50deg] duration-500 '/>
  </div>
  <div className='text-primary text-xl sm:text-2xl md:text-2xl lg:text-3xl  border-2 border-tertiary rounded-full group-hover:text-theme p-4'>
  {children}
  </div>
</a>
        </div>
        // <div className={` text-center icon text-theme text-4xl border-2 border-tertiary py-4 rounded-full ${className}`}>
        //     {children}
        // </div>
    )
}

export default SkiledItemIcon