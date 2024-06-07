import React from 'react'

const CardBox = ({className , children}) => {
  return (
    <div className={`p-6 bg-senary border-2 border-tertiary rounded-xl cursor-default rounded-xl  ${className}`}>{children}</div>
  )
}

export default CardBox