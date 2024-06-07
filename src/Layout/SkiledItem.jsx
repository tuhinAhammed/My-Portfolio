import React, { Children } from 'react'
import MinTitle from './MinTitle'

const SkiledItem = ({ className,  children , text}) => {
    return (
        <div className={` text-center  m-auto  ${className}`}>
            <div className='icon text-theme text-7xl' >{children}</div>
            <MinTitle text={text} className="!text-base text-textSecondary mt-2 " />

        </div>
    )
}

export default SkiledItem