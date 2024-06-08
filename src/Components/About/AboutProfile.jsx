import React from 'react'
import ProfileImg from "../../assets/profile.jpeg"
import Resize from "../../assets/img-resize.png"

const AboutProfile = () => {
  return (
    <div className="profileImage relative py-1">
    <img src={Resize} alt="" className='absolute m-auto w-[90%] top-[-6px] left-[5%]' />
    <img src={ProfileImg} alt="" className='rounded-full m-auto w-[85%]  ' />
  </div>
  )
}

export default AboutProfile