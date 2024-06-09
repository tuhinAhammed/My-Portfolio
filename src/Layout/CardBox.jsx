import React from 'react'

const CardBox = ({className , children}) => {
  return (
    <div className={`p-6 bg-senary  rounded-xl border-2 border-tertiary cursor-default rounded-xl  ${className}`}>{children}</div>
  )
}

export default CardBox