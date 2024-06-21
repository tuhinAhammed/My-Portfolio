import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import { GoMoveToEnd } from 'react-icons/go'
import MinTitle from '../../Layout/MinTitle'
import { MdDoubleArrow } from 'react-icons/md'
const data = [
    {
        title: "FrontEnd"
    },
    {
        title: "BackEnd"
    },
    {
        title: "MERN Stack"
    },
    {
        title: "Mobile App"
    },
]
const WhatIDo = () => {
    return (
        <div>
            <MidTitle text="What I Do" />
            {
                data.map((item) => (
                    <Flex className="mt-6 gap-4 items-center">
                        <MdDoubleArrow className='text-xl  text-theme opacity-[0.7]' />
                        <MinTitle text={item.title} className="!text-textSecondary" />
                    </Flex>
                ))
            }
        </div>
    )
}

export default WhatIDo