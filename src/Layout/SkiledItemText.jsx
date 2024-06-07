import React from 'react'
import MinTitle from './MinTitle'

const SkiledItemText = ({ className, text, icon , children}) => {
    return (
        <div className={` text-center   ${className}`}>
            <div className='icon text-theme text-7xl' >{children}</div>
            <MinTitle text={text} className="text-textSecondary mt-[-10px] border-2 border-theme border-opacity-[0.5] rounded-lg px-2 py-1  " />
        </div>
    )
}

export default SkiledItemText