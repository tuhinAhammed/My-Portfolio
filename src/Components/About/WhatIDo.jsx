import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import { GoMoveToEnd } from 'react-icons/go'
import MinTitle from '../../Layout/MinTitle'

const WhatIDo = () => {
  return (
    <div>
        <MidTitle text="What I Do"/>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="FrontEnd" className="!text-textSecondary"/>
        </Flex>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="BackEnd" className="!text-textSecondary"/>
        </Flex>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="MERN Stack" className="!text-textSecondary"/>
        </Flex>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="Mobile App" className="!text-textSecondary"/>
        </Flex>
    </div>
  )
}

export default  WhatIDo