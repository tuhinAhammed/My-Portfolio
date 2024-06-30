import React from 'react'

const MinTitle = ({text , className}) => {
  return (
    <p className={`text-sm lg:text-base dark:text-primary text-secondary duration-300  ${className} `}>{text}</p>
  )
}

export default MinTitle