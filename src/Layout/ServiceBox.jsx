import React, { Children } from 'react'
import CardBox from './CardBox'
import MidTitle from './MidTitle'
import { GoMoveToEnd } from 'react-icons/go'
import { CiLinkedin } from 'react-icons/ci'
import Flex from './Flex'
import MinTitle from './MinTitle'
const ServiceBox = ({ children, serviceTitle }) => {
    return (
        <div className="TitleAndIcon">
            {children}
        </div>

    )
}

export default ServiceBox