import React from 'react'
import Flex from '../../Layout/Flex'
import Exprience from '../../Layout/Exprience'

const AboutExprience = () => {
    return (
        <div className=''>
            <Flex className="items-center gap-0 lg:gap-10  grid lg:grid-cols-2">
                <Exprience number="3" text="years of exprience" className="!text-4xl lg:col-span-1" />
                <Exprience number="+52" text="Total Project" className="!text-4xl lg:col-span-1" />
            </Flex>
            <Flex className="items-center gap-0 lg:gap-10 grid lg:grid-cols-2">
                <Exprience number="4" text="Recognitions" className="!text-4xl lg:col-span-1" />
                <Exprience number="0" text="Unhappy Clints" className="!text-4xl lg:col-span-1"/>
            </Flex>
        </div>
    )
}

export default AboutExprience