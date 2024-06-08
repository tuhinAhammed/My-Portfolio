import React from 'react'
import MidTitle from './MidTitle'
import LargeTitle from './LargeTitle'
import MinTitle from './MinTitle'

const Exprience = ({className , number , text}) => {
  return (
    <div className={`text-center `}>
        <LargeTitle text={number} className={`${className}`}/>
        <MinTitle text = {text} className="uppercase !text-textSecondary"/>
    </div>
  )
}

export default Exprience