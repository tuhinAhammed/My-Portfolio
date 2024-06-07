import React from 'react'

const LargeTitle = ({className , text}) => {
  return (
    <div className={`text-5xl text-primary font-semibold ${className}`}>{text}</div>
  )
}

export default LargeTitle