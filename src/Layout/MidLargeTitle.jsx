import React from 'react'

const MidLargeTitle = ({className , text}) => {
  return (
    <div className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-primary text-secondary font-semibold ${className}`}>{text}</div>
  )
}

export default MidLargeTitle