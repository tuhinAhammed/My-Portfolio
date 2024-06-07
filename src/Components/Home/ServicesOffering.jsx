import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import SlidingSection from '../../Layout/SlidingSection'
import HtmlIcon from "../../assets/Logo.png"

import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import LargeTitle from '../../Layout/LargeTitle'
import SkiledItem from '../../Layout/SkiledItem'
import Frontend from "../../assets/frontend.gif"
import Backend from "../../assets/backend.gif"
import Api from "../../assets/api.gif"
import App from "../../assets/app.gif"
import { BiSolidLike } from 'react-icons/bi'

const ServicesOffering = ({ className }) => {
    return (
        <div className={`${className}`}>
            <MidTitle text="Services Offering" className=" duration-300" />

                <Flex className="pt-8  gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center">
                    <SkiledItem text="Frontend" className="">
                    <div className=''>
                    <img src={Frontend} alt="" className='w-[100px] h-[60px] rounded-lg'/>
                    </div>
                    </SkiledItem>
                    <SkiledItem text="Backend">
                    <div className=''>
                    <img src={Backend} alt="" className='w-[100px] h-[60px] rounded-lg'/>
                    </div>
                    </SkiledItem>
                    <SkiledItem text="Mobile App">
                    <div className=''>
                    <img src={App} alt="" className='w-[100px] h-[60px] rounded-lg'/>
                    </div>
                    </SkiledItem>
                    <SkiledItem text="Api Dev">
                    <div className=''>
                    <img src={Api} alt="" className='w-[100px] h-[60px] rounded-lg'/>
                    </div>
                    </SkiledItem>
                </Flex>

            <Flex className="goodAt items-center gap-4 py-6">
                <MidTitle text="Things I'am good at" className="!text-[30px]" />
                <BiSolidLike className='text-5xl text-theme group-hover:ml-6 duration-300' />
            </Flex>
            <Flex className="action cursor-pointer justify-between items-center">
                <MinTitle text="All Services" className="group-hover:text-theme" />
                <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme' />
            </Flex>
        </div>
    )
}

export default ServicesOffering