import React from 'react'
import MidTitle from '../../Layout/MidTitle'
import SlidingSection from '../../Layout/SlidingSection'

import MinTitle from '../../Layout/MinTitle'
import { GoMoveToEnd } from 'react-icons/go'
import Flex from '../../Layout/Flex'
import SkiledItemText from '../../Layout/SkiledItemText'
import LargeTitle from '../../Layout/LargeTitle'
import SkiledItemIcon from '../../Layout/SkiledItemIcon'

import HtmlIcon from "../../assets/html.png"
import CssIcon from "../../assets/css.png"
import BootstrapIcon from "../../assets/bootstrap.png"
import TailwindIcon from "../../assets/tailwind.png"
import JavascriptIcon from "../../assets/javascript.png"
import ReactIcon from "../../assets/react.png"
import ReduxIcon from "../../assets/redux.png"
import MongoDbIcon from "../../assets/mongodb.png"
import NodeJsIcon from "../../assets/native.png"
import ExpressIcon from "../../assets/express.png"
import GithubIcon from "../../assets/github.png"
import FigmaIcon from "../../assets/figma.png"
import CnavaIcon from "../../assets/canva.png"
const SkilAndTools = ({ className }) => {
    return (
        <div className={`${className}`}>
            <MidTitle text="Skill & Tools" className=" duration-300" />
            <SlidingSection className="text py-5">
                <Flex className="items-center gap-4 mt-4">
                    <SkiledItemText text="HTML-5" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="CSS" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Bootstrap" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Tailwind" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="And Design" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="React JS" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Redux" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="React Router" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Firebase" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="MongoDB" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Node JS" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Express JS" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Rest API Development" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="React Native" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Figma" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                    <SkiledItemText text="Canva" className="">
                        {/* <GoMoveToEnd /> */}
                    </SkiledItemText>
                </Flex>
            </SlidingSection>
            <SlidingSection className="icon " direction="right" >
                <Flex className=" gap-4 mt-4 items-center">


                        <img src={CnavaIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={FigmaIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={GithubIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={ExpressIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={NodeJsIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={MongoDbIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center ' />

                        <img src={ReduxIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />

                        <img src={ReactIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />


                        <img src={JavascriptIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />



                        <img src={TailwindIcon} alt="" className=' p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />


                        <img src={BootstrapIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />
   


                        <img src={CssIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />



                        <img src={HtmlIcon} alt="" className='p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center ' />


                        <img src={HtmlIcon} alt="" className=' p-2 border-2 border-tertiary rounded-xl w-[50px] h-[50px] text-center' />
                </Flex>
            </SlidingSection>

        </div>
    )
}

export default SkilAndTools