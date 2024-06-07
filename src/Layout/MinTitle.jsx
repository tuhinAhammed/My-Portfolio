import React from 'react'

const MinTitle = ({text , className}) => {
  return (
    <div className={`text-base text-primary duration-300 ${className} `}>{text}</div>
  )
}

export default MinTitle