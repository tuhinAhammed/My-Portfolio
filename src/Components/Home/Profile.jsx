import React from 'react'
import Button from '../../Layout/Button'
import ProfileImg from "../../assets/profile.jpeg"
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="innerLeftProfile">
      <div className="profileImage ">
        <img src={ProfileImg} alt="" className='rounded-full' />
      </div>
      <Link to ="/about">
      <Button text="I'am Tuhin" className="text-xl font-semibold !py-1 rounded-lg m-auto flex my-[9px]" />
      </Link>
      <Link to="/about">
        <Flex className="bigoraphy cursor-pointer  justify-between items-center group transition  delay-1000">
          <MinTitle text="Biography" className="group-hover:text-theme   " />
          <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme' />
        </Flex>
      </Link>
    </div>
  )
}

export default Profile