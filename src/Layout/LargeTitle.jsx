import React from 'react'

const LargeTitle = ({className , text}) => {
  return (
    <div className={`text-2xl sm:text-3xl md:text-4l lg:text-5xl  text-primary font-semibold ${className}`}>{text}</div>
  )
}

export default LargeTitle