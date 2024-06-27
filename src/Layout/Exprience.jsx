import React from 'react'
import MidTitle from './MidTitle'
import LargeTitle from './LargeTitle'
import MinTitle from './MinTitle'
import NumberCounter from './NumberCounter'

const Exprience = ({className , number , text}) => {
  return (
    <div className={`text-center py-[10px]`}>
        <NumberCounter numberEnd ={number}/>
     
        <MinTitle text = {text} className="uppercase !text-textSecondary"/>
    </div>
  )
}

export default Exprience