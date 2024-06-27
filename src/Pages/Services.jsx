import React from 'react'

import Container from '../Layout/Container'
import ServiceBox from '../Layout/ServiceBox'
import Flex from '../Layout/Flex'
import { MdArrowRight, MdMobileScreenShare } from "react-icons/md";
import MinTitle from '../Layout/MinTitle'
import MidTitle from '../Layout/MidTitle'
import CardBox from '../Layout/CardBox'
import { FaBlackberry, FaHospitalUser } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { SiAmazonapigateway, SiFrontendmentor } from 'react-icons/si'
import { FaWordpressSimple } from 'react-icons/fa6'
import ServiceIcon from '../Components/Service/ServiceIcon'

export const servicesData = [
    {
        title: "UI/UX Design",
        icon: FaHospitalUser,
        color: 'text-theme',
        borderColor: 'border-theme',
        skills: ["Canva", "Figma", "PS"]
    },
    {
        title: "Web Design",
        icon: MdDesignServices,
        color: 'text-green-500',
        borderColor: 'border-green-500',
        skills: ["HTML", "CSS", "Javascript", "BootStrap", "Tailwind", "Ant Design"]
    },
    {
        title: "Frontend Development",
        icon: SiFrontendmentor,
        color: 'text-red-500',
        borderColor: 'border-red-500',
        skills: ["React JS", "Redux", "React Router", "Local Store", "Axios", "Dynamic Web"]
    },
    {
        title: "Backend Development",
        icon: SiAmazonapigateway,
        color: 'text-yellow-500',
        borderColor: 'border-yellow-500',
        skills: ["Node JS", "Express JS", "Mongo DB", "Firebase", "Rest API"]
    },
    {
        title: "Tools & Softwares",
        icon: FaBlackberry,
        color: 'text-blue-500',
        borderColor: 'border-blue-500',
        skills: ["Github", "Terminal", "Netlify"]
    },
    {
        title: "Mobile Apps",
        icon: MdMobileScreenShare,
        color: 'text-teal-500',
        borderColor: 'border-teal-500',
        skills: ["React Native", "Expo", "Android", "IOS"]
    },
    {
        title: "CSM Related",
        icon: FaWordpressSimple,
        color: 'text-orange-500',
        borderColor: 'border-orange-500',
        skills: ["Elementor", "Wordpress", "Woo commerce"]
    }
];

const Services = () => {
    return (
        <div className="">
            <Container>
                <Flex className="gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        servicesData.map((service, index) => {
                            const { title, icon, color, borderColor, skills } = service
                            return (
                                <CardBox className="group" key={index}>
                                    <ServiceBox serviceTitle="okkkk">

                                        <ServiceIcon>
                                            <service.icon className={`${color} p-4   border-2 ${borderColor}  rounded-full group-hover:text-primary group-hover:animate-pulse`} />
                                        </ServiceIcon>
                                        <MidTitle text={title} className="group-hover:text-theme duration-300 py-2 md:py-4 lg:py-6 " />

                                        <Flex className="grid grid-cols-2 ">
                                            {
                                                service.skills.map((skill , index) => (
                                                    <Flex className="items-center " key={index}>
                                                        <MdArrowRight className='text-primary text-xl group-hover:text-theme' />
                                                        <MinTitle text={skill} />
                                                    </Flex>
                                                ))
                                            }
                                        </Flex>
                                    </ServiceBox>
                                </CardBox>
                            )
                        })

                    }
                </Flex>
                {/* <Flex className="gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">
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
                </Flex> */}
            </Container>
        </div>
    )
}

export default Services