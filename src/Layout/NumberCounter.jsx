import React from 'react'
import CountUp from "react-countup"
const NumberCounter = ({numberEnd}) => {
  return (
    <div>
        <CountUp className='text-2xl sm:text-3xl md:text-4l lg:text-5xl  text-primary font-semibold ' start={0} end={numberEnd} delay={1} duration={3}/> <span className='text-2xl sm:text-3xl md:text-4l lg:text-5xl  text-primary font-semibold'>+</span>
    </div>
  )
}

export default NumberCounter