import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import { GoMoveToEnd } from 'react-icons/go'
import MinTitle from '../../Layout/MinTitle'
import { MdDoubleArrow } from 'react-icons/md'
 const myExprienceData = [
  {
    title : "2021-2022 // HEXA-CODE"
  },
  {
    title : "2022-2023 // Levanao"
  },
  {
    title : "2023 // Now - Object"
  },
 ]
const MyExprience = () => {
  return (
    <div>
        <MidTitle text="My Exprience"/>
        {
          myExprienceData.map((item) => (

        <Flex className="mt-6 gap-4 items-center">
            <MdDoubleArrow className='text-xl  text-theme opacity-[0.7]'/>
            <MinTitle text ={item.title} className="!text-textSecondary"/>
        </Flex>
          ))
        }
    </div>
  )
}

export default MyExprience