import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Button from '../../Layout/Button'
import { MdDownloadForOffline } from 'react-icons/md'
import { FaDownload } from 'react-icons/fa6'

const SummarySection = () => {
  return (
    <div className='color-primary '>
            <MidTitle text="Title" className="group-hover:text-theme text-theme " />
            <MidTitle text="MERN Stack" className=" text-3xl group-hover:text-theme duration-300" />
            <MidTitle text="Developer" className="text-right text-3xl opacity-[0.5] z-auto"/>
            <div className="resume cursor-pointer flex justify-between items-center mt-5 group transition  delay-1000">
            <MinTitle text="My Resume" className="group-hover:text-theme duration-300" />
            <FaDownload className='text-2xl text-primary group-hover:text-theme' />

            </div>
        </div>
  )
}

export default SummarySection