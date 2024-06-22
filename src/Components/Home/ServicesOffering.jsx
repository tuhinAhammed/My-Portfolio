import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import LargeTitle from '../../Layout/LargeTitle'
import SkiledItem from '../../Layout/SkiledItem'
import Frontend from "../../assets/frontend.png"
import Backend from "../../assets/backend.png"
import Api from "../../assets/api.png"
import App from "../../assets/app.png"

import BoxAction from './BoxAction'
import { BiSolidLike } from 'react-icons/bi'
import MinTitle from '../../Layout/MinTitle'
const serviceData = [
    {
        title: "Frontend",
        image: Frontend
    },
    {
        title: "Backend",
        image: Backend
    },
    {
        title: "Api Dev",
        image: Api
    },
    {
        title: "Mobile App",
        image: App
    },
]
const ServicesOffering = () => {
    return (
        <div className="service">
            <MidTitle text="Services Offering" className=" duration-300" />

            <Flex className="pt-8  gap-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center">
                {
                    serviceData.map((item) => (
                        <div className='m-auto'>
                            <img src={item.image} alt="" className='w-[70px]  rounded-lg ' />
                            <MinTitle text={item.title} className="text-center mt-2" />
                        </div>
                    ))
                }
            </Flex>

            <Flex className="goodAt items-center gap-4 py-4 group">
                <MidTitle text="Things I'am good at" className="!text-[30px]" />
                <BiSolidLike className='text-5xl text-theme group-hover:ml-6 duration-300 animate-leftToRight' />
            </Flex>
            <BoxAction title="All Services" link="/services" />
        </div>
    )
}

export default ServicesOffering