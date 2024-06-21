import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import BoxAction from './BoxAction'

const ArticleSection = () => {
    return (
        <div className='color-primary '>
            <MidTitle text="Articles &" className="group-hover:text-theme duration-300" />
            <MidTitle text="PubLication" className="text-right" />
            <BoxAction title="Biography" className="mt-[40px]"/>
        </div>
    )
}

export default ArticleSection