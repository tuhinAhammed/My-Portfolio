import React from 'react'
import MinTitle from './MinTitle'

const InputBox = ({className , title , placeholder ,type}) => {
  return (
    <div className={`${className}`}>
        <MinTitle text={title} className ="!text-base lg:!text-lg" />
        <input type={type} placeholder={placeholder}  className={`my-2 p-3 bg-transparent border-2 border-tertiary rounded-md text-textSecondary focus-visible:outline-none focus-visible:border-theme w-full text-sm lg:text-lg ${className}`}/>
    </div>
  )
}

export default InputBox