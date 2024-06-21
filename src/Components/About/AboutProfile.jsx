import React from 'react'
import ProfileImg from "../../assets/profile.png"
import Resize from "../../assets/img-resize.png"

const AboutProfile = () => {
  return (
    <div className="profileImage w-[90%] m-auto relative  bg-[#eee] rounded-full overflow-hidden">
    {/* <img src={Resize} alt="" className='absolute m-auto w-[90%] top-[-6px] left-[5%]' /> */}
    <img src={ProfileImg} alt="" className=' m-auto w-full  overflow-hidden' />
  </div>
  )
}

export default AboutProfile