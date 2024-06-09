import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import { HiMiniArrowUpRight } from 'react-icons/hi2'

const SecondaryButton = () => {
  return (
    <button class="bg-theme text-primary font-bold w-[35px] h-[35px] md:w-[50px] md:h-[50px]  lg:w-[50px] lg:h-[50px] rounded-full  flex items-center justify-center relative  overflow-hidden rotate-[42deg] ">
    <span class="absolute inset-0 flex items-center justify-center transition-transform transform group-hover:-translate-y-full rotate-[-90deg]">
      <FaArrowRightLong className='text-xl extra-bold'/>
    </span>
    <span class="absolute inset-0 flex items-center justify-center transition-transform transform translate-y-full group-hover:translate-y-0 text-xl extra-bold rotate-[-90deg]">
    <FaArrowRightLong/>
    </span>
</button>
  )
}

export default SecondaryButton