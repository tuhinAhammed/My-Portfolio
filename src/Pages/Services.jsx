import React from 'react'
import EducationAndSocial from '../Components/About/AboutAndSocial'
import Container from '../Layout/Container'
import ServiceBox from '../Layout/ServiceBox'
import Flex from '../Layout/Flex'
import { CiLinkedin } from 'react-icons/ci'
import { GoMoveToEnd } from 'react-icons/go'
import { MdArrowRight } from "react-icons/md";
import MinTitle from '../Layout/MinTitle'
import MidTitle from '../Layout/MidTitle'
import CardBox from '../Layout/CardBox'
import { FaBlackberry, FaHospitalUser } from "react-icons/fa";
import LargeTitle from '../Layout/LargeTitle'
import { MdDesignServices } from "react-icons/md";
import { SiAmazonapigateway, SiFrontendmentor } from 'react-icons/si'
import { LiaElementor } from 'react-icons/lia'
import { FaWordpressSimple } from 'react-icons/fa6'
const Services = () => {
    return (
        <div className="py-6">
            <Container>
                <Flex className="gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <CardBox className="group">
                        <ServiceBox serviceTitle="okkkk">

                            <FaHospitalUser className=' text-theme !text-[110px] p-6  border-2 border-theme  rounded-full group-hover:text-primary' />
                            <LargeTitle text="UI/UX Design" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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

                            <MdDesignServices className=' text-green-500 !text-[110px] p-6  border-2 border-green-500  rounded-full group-hover:text-primary' />
                            <LargeTitle text="Web Design" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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

                            <SiFrontendmentor className=' text-red-500 !text-[110px] p-6  border-2 border-red-500 rounded-full group-hover:text-primary' />
                            <LargeTitle text="Frondend Devt" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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

                            <SiAmazonapigateway className=' text-yellow-500 !text-[110px] p-6  border-2 border-yellow-500  rounded-full group-hover:text-primary' />
                            <LargeTitle text="Backend Devt" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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

                        <FaBlackberry className=' text-blue-500 !text-[110px] p-6  border-2 border-blue-500 rounded-full group-hover:text-primary' />
                            <LargeTitle text="Tools & Softwares" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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

                            <FaWordpressSimple className=' text-orange-500 !text-[110px] p-6  border-2 border-orange-500 rounded-full group-hover:text-primary' />
                            <LargeTitle text="CSM Related" className="group-hover:text-theme duration-300 py-6 !text-[30px]" />

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