import React from 'react'

const MidTitle = ({className , text}) => {
  return (
    <div className={`text-lg sm:text-lg md:text-xl lg:text-2xl dark:text-primary text-secondary font-semibold  duration-300 ${className}`}>{text}</div>
  )
}

export default MidTitle