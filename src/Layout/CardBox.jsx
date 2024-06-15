import React from 'react'

const CardBox = ({className , children}) => {
  return (
    <div className={`cardBox p-6  bg-senary   shadow-sm rounded-xl border-[1px] border-tertiary cursor-default rounded-xl  ${className}`}>{children}</div>
  )
}

export default CardBox