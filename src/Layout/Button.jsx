import React from 'react'

const Button = ({text , className}) => {
  return (
    <button className={`text-primary px-6 py-3 rounded-full border-2 border-theme bg-theme hover:bg-transparent hover:text-theme  ${className}`}>{text}</button>
  )
}

export default Button
