import React from 'react'
import Flex from './Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Button = ({text , className , directLink , onClick , value }) => {
  return (
    <div className={``}>
      <Link to={directLink} target='_blank'>
      <button onClick={onClick} value={value} className={`text-md text-primary px-4 py-1 md:px-6 md:py-3 lg:px-4 lg:py-2 rounded-full border-2 border-theme bg-theme hover:bg-transparent hover:text-theme transition-all duration-300 ${className}`}>{text}</button>
      </Link>
    </div>
  )
}

export default Button
