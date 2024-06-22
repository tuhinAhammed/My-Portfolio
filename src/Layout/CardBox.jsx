import React, { useState } from 'react'

const CardBox = ({className , children , shapeImg}) => {
  // const [shapeOpen , setShapeOpen] = useState({shape})
  // box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25)
  // shadow-[0_10px_15px_rgba(0,0,0,0.3),_0_4px_6px_rgba(0,0,0,0.1)]
  return (
    <div className={`cardBox  relative p-6 shadow-[ 0px 0px 10px 2px rgba(0, 0, 0, 0.25)]  rounded-xl border-[1px] border-tertiary cursor-default rounded-xl bg-senary overflow-hidden ${className} `} >
      {
        shapeImg && <img src={shapeImg} alt="" className='absolute w-[25%] text-theme text-[125px] top-[-0%] right-[-0%]  z-[1] animate-pulse-slow' />
      }
      {/* <WiStars className='absolute text-theme text-[125px] top-[-14%] right-[-14%] opacity-[0.6] z-[1]'/> */}
      {children}
    </div>
  )
}

export default CardBox