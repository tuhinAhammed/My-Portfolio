import React from 'react'
import EducationAndSocial from '../Components/About/AboutAndSocial'
import Container from '../Layout/Container'
import ServiceBox from '../Layout/ServiceBox'
import Flex from '../Layout/Flex'
import { CiLinkedin } from 'react-icons/ci'
import { GoMoveToEnd } from 'react-icons/go'
import { MdArrowRight, MdMobileScreenShare } from "react-icons/md";
import MinTitle from '../Layout/MinTitle'
import MidTitle from '../Layout/MidTitle'
import MidLargeTitle from '../Layout/MidLargeTitle'
import CardBox from '../Layout/CardBox'
import { FaBlackberry, FaHospitalUser } from "react-icons/fa";
import LargeTitle from '../Layout/LargeTitle'
import { MdDesignServices } from "react-icons/md";
import { SiAmazonapigateway, SiFrontendmentor } from 'react-icons/si'
import { LiaElementor } from 'react-icons/lia'
import { FaWordpressSimple } from 'react-icons/fa6'
import ServiceIcon from '../Components/Service/ServiceIcon'
const Services = () => {
    return (
        <div className="py-6">
            <Container>
                <Flex className="gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">

                            <ServiceIcon>
                                <FaHospitalUser className=' text-theme p-4   border-2 border-theme  rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="UI/UX Design" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Canva" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Figma" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="PS" />
                                    </Flex>
                                </div>
                            </Flex>
                        </ServiceBox>
                    </CardBox>
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <MdDesignServices className=' text-green-500  p-4  border-2 border-green-500  rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="Web Design" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="HTML" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="CSS" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Javascript" />
                                    </Flex>
                                </div>
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="BootStrap" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Tailwind" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Ant Design" />
                                    </Flex>
                                </div>
                            </Flex>
                        </ServiceBox>
                    </CardBox>
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <SiFrontendmentor className=' text-red-500  p-4  border-2 border-red-500 rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="Frondend Devt" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="React JS" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Redux" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="React Router" />
                                    </Flex>
                                </div>
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Local Store" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Axios" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Dynamic Web" />
                                    </Flex>
                                </div>
                            </Flex>
                        </ServiceBox>
                    </CardBox>

                </Flex>
                <Flex className="gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <SiAmazonapigateway className=' text-yellow-500  p-4  border-2 border-yellow-500  rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="Backend Devt" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6" />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Node JS" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Express JS" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Mongo DB" />
                                    </Flex>
                                </div>
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Firebase" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Rest API" />
                                    </Flex>
                                </div>
                            </Flex>
                        </ServiceBox>
                    </CardBox>
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <FaBlackberry className=' text-blue-500  p-4  border-2 border-blue-500 rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="Tools & Softwares" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Github " />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Terminal" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Netlify" />
                                    </Flex>
                                </div>

                            </Flex>
                        </ServiceBox>
                    </CardBox>
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <MdMobileScreenShare className=' text-teal-500  p-4  border-2 border-teal-500 rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="Mobile Apps" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="React Native " />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Expo" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Android" />
                                    </Flex>
                                </div>
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="IOS " />
                                    </Flex>

                                </div>

                            </Flex>
                        </ServiceBox>
                    </CardBox>
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">
                            <ServiceIcon>

                                <FaWordpressSimple className=' text-orange-500  p-4  border-2 border-orange-500 rounded-full group-hover:text-primary' />
                            </ServiceIcon>
                            <MidTitle text="CSM Related" className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6" />

                            <Flex className="grid grid-cols-2 gap-6">
                                <div className="leftServiceTitle">
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Elementor " />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Wordpress" />
                                    </Flex>
                                    <Flex className="items-center gap-2">
                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                        <MinTitle text="Woo commerce" />
                                    </Flex>
                                </div>

                            </Flex>
                        </ServiceBox>
                    </CardBox>
                </Flex>
                <EducationAndSocial />
            </Container>
        </div>
    )
}

export default Services