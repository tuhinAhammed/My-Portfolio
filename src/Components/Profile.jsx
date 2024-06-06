import React from 'react'
import Button from '../Layout/Button'
import ProfileImg from "../assets/profile.jpeg"
import MinTitle from '../Layout/MinTitle'

const Profile = () => {
  return (
    <div className="innerLeftProfile">
    <div className="profileImage ">
      <img src={ProfileImg} alt="" className='rounded-full' />
    </div>
    <Button text="I'am Tuhin" className="text-xl font-semibold !py-1 rounded-lg m-auto flex my-6" />
    <div className="bigoraphy flex justify-between items-center">
      <MinTitle text="Bigoraphy" />
      <MinTitle text="icon" />
    </div>
    </div>
  )
}

export default Profile