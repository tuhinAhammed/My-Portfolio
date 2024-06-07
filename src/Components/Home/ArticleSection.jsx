import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'

const ArticleSection = () => {
    return (
        <div className='color-primary '>
            <MidTitle text="Articles &" className="group-hover:text-theme duration-300" />
            <MidTitle text="PubLication" className="text-right" />
            <Flex className="article cursor-pointer justify-between items-center mt-10 group transition  delay-1000">
                <MinTitle text="Biography" className="group-hover:text-theme  " />
                <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme ' />
            </Flex>
        </div>
    )
}

export default ArticleSection