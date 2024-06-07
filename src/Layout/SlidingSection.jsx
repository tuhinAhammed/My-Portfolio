import React from 'react'
import Sliding from "../assets/Logo.png"
const SlidingSection = ({className , children , text , img , direction}) => {
  return (
    <div className={` text-primary ${className}`}>
        <marquee behavior="scroll"  direction={direction} scrolldelay="5"  className="">
            <div className="mar flex items-center gap-2">
            <p>{text}</p>
            {children}
            </div>
        </marquee>
        
    </div>
  )
}

export default SlidingSection