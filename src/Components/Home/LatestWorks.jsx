import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import LatestProject from "../../assets/latestProject.png"
import { Link } from 'react-router-dom'
import BoxAction from './BoxAction'
const LatestWorks = () => {
  return (
    <div className='color-primary '>
    <MidTitle text="See My" className="group-hover:text-theme duration-300" />
    <MidTitle text="Lates't Works" className="text-right" />
    <Link to = "/project" >
        <img src={LatestProject} alt=""  className='py-2 rounded-[25px]'/>
    </Link>
    <BoxAction title ="All Project" link="/project"/>
</div>
  )
}

export default LatestWorks