import React from 'react'
import Flex from '../../Layout/Flex'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { TbArrowLeftFromArc, TbArrowRightToArc } from 'react-icons/tb'
import { BsBoxArrowRight } from 'react-icons/bs'

const BoxAction = ({ title , link , className}) => {
    return (
        <div>
            <Link to={link} >
                <Flex className={`group worksWith cursor-pointer justify-between items-center  group transition  delay-1000 ${className}`}>
                    <MinTitle text={title} className="group-hover:text-theme  " />
                    <BsBoxArrowRight className='dark:text-primary text-secondary text-2xl group-hover:text-theme ' />
                </Flex>
            </Link>
        </div>
    )
}

export default BoxAction