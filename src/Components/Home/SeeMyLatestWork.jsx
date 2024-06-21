import React from 'react'
import SlidingSection from '../../Layout/SlidingSection'
import { FaBuffer } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SeeMyLatestWork = () => {
    return (
        <div>
            <Link to="https://github.com/tuhinAhammed/" target="_blank">
                <SlidingSection text="See My Latest Work" direction="left" className="text-base uppercase text-textSecondary leading-[0px]">
                    <FaBuffer className='text-theme text-2xl group-hover:text-theme' />
                </SlidingSection>
            </Link>
        </div>
    )
}

export default SeeMyLatestWork