import React from 'react'
import Flex from './Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Button = ({text , className}) => {
  return (
    <div className={`${className}`}>
      <button className={`text-primary px-4 py-1 md:px-6 md:py-3 lg:px-6 lg:py-3 rounded-full border-2 border-theme bg-theme hover:bg-transparent hover:text-theme  ${className}`}>{text}</button>

    </div>
  )
}

export default Button
