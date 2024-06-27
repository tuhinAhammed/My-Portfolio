import React from 'react'
import Flex from './Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const PrimaryButton = ({ text, className, link }) => {

  return (
    <div className={`${className} `}>
      <Link to={link} className='group duration-2000'>
        <Flex className="gap-x-2">
          <button className="text-primary px-4 py-1 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-full border-2 border-theme bg-theme active:bg-transparent hover:bg-opacity-[0.5]">{text}</button>
          <button class="bg-theme text-primary font-bold w-[35px] h-[35px] md:w-[50px] md:h-[50px]  lg:w-[50px] lg:h-[50px] rounded-full  flex items-center justify-center relative  overflow-hidden rotate-[42deg] ">
            <span class="absolute inset-0 flex items-center justify-center transition-transform transform group-hover:-translate-y-full rotate-[-90deg]">
              <FaArrowRightLong className='text-xl extra-bold animate-pulse ' />
            </span>
            <span class="absolute inset-0 flex items-center justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xl extra-bold rotate-[-90deg] ">
              <FaArrowRightLong />
            </span>
          </button>
        </Flex>
      </Link>


    </div>
  )
}

export default PrimaryButton
