import React from 'react'
import Container from '../Layout/Container'
import CardBox from '../Layout/CardBox'
import Flex from '../Layout/Flex'
import AboutSummary from '../Components/About/AboutSummary'
import Profile from '../Components/Home/Profile'
import AboutProfile from '../Components/About/AboutProfile'
import MyExprience from '../Components/About/MyExprience'
import WhatIDo from '../Components/About/WhatIDo'
import AboutExprience from '../Components/About/AboutExprience'
import SocialProfile from '../Components/Home/SocialProfile'
import WorksWith from '../Components/Home/WorksWith'
import Education from '../Components/About/Education'
import EducationAndSocial from '../Components/About/AboutAndSocial'

const About = () => {
  return (
    <div className=''>
      <Container>
        <div>
          <Flex className="grid grid-cold-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-6 items-start gap-5 ">
            <CardBox className="col-span-1 lg:col-span-4 !w-full h-auto lg:!h-[300px]">
              <AboutSummary/>
            </CardBox>
            <CardBox className="col-span-1 lg:col-span-2 !w-full !h-[300px] flex">
              <AboutProfile/>
            </CardBox>
          </Flex>
          <Flex className="gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 mt-5">
            <CardBox className="lg:col-span-3">
              <MyExprience/>
            </CardBox>
            <CardBox className="lg:col-span-2">
              <WhatIDo/>
            </CardBox>
            <CardBox className="lg:col-span-3">
              <AboutExprience/>
            </CardBox>
          </Flex>
          <EducationAndSocial/>
        </div>
      </Container>
    </div>
  )
}

export default About