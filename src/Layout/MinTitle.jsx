import React from 'react'

const MinTitle = ({text , className}) => {
  return (
    <p className={`text-base text-primary duration-300 ${className} `}>{text}</p>
  )
}

export default MinTitle