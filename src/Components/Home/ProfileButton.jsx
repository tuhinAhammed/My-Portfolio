import React from 'react'
import Button from '../../Layout/Button'
import { TiLocationArrowOutline } from 'react-icons/ti'
import { CiLocationArrow1 } from 'react-icons/ci'
import MinTitle from '../../Layout/MinTitle'
import { TbLocationCode } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const ProfileButton = () => {
    return (
        <div className='py-5 '>
            <Link to ="/about">
            <button className={`group text-md text-primary px-4 py-1 md:px-6 md:py-3 lg:px-4 lg:py-2 rounded-lg border-2 border-theme bg-theme   transition-all duration-300 flex items-center justify-between m-auto gap-x-2`}>
                <MinTitle text ="I am Tuhin"/>
                <span><TbLocationCode className='inline-block text-xl  group-hover:ml-[10px] animate-pulse'/></span>
            </button>
            </Link>
        </div>
    )
}

export default ProfileButton