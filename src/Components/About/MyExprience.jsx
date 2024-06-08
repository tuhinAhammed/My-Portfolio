import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import { GoMoveToEnd } from 'react-icons/go'
import MinTitle from '../../Layout/MinTitle'

const MyExprience = () => {
  return (
    <div>
        <MidTitle text="My Exprience"/>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="2021 // Now - Object" className="!text-textSecondary"/>
        </Flex>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="2021 // Now - Object" className="!text-textSecondary"/>
        </Flex>
        <Flex className="mt-6 gap-4 items-center">
            <GoMoveToEnd className='text-xl text-primary'/>
            <MinTitle text ="2021 // Now - Object" className="!text-textSecondary"/>
        </Flex>
    </div>
  )
}

export default MyExprience