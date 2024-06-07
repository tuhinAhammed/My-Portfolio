import React, { Children } from 'react'
import MinTitle from './MinTitle'

const SkiledItemIcon = ({ className,  children }) => {
    return (
        <div className={` text-center   ${className}`}>
            <div className='icon text-theme text-7xl' >{children}</div>
            
        </div>
    )
}

export default SkiledItemIcon