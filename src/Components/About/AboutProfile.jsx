import React from 'react'
import ProfileImg from "../../assets/profile.png"

const AboutProfile = () => {
  return (
    <div className="profileImageWrapper relative w-[200px] h-[200px] flex justify-center items-center  m-auto">
    <div className="profileImage bg-theme w-[200px] h-[200px] rounded-full m-auto overflow-hidden ">
      <img src={ProfileImg} alt="Profile" className="w-full h-full object-cover" />
    </div>
  </div>
  )
}

export default AboutProfile