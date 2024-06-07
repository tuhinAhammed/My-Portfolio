import React from 'react'

const MidTitle = ({className , text}) => {
  return (
    <div className={`text-2xl text-primary font-semibold  duration-300 ${className}`}>{text}</div>
  )
}

export default MidTitle