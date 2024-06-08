import React from 'react'
import Flex from '../../Layout/Flex'
import CardBox from '../../Layout/CardBox'
import SocialProfile from '../Home/SocialProfile'
import Education from './Education'
import WorksWith from '../Home/WorksWith'

const EducationAndSocial = () => {
  return (
    <Flex className="gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 mt-5">
    <CardBox className="lg:col-span-2">
      <SocialProfile actionClassName = "mt-14"/>
    </CardBox>
    <CardBox className="lg:col-span-4">
      <Education/>
    </CardBox>
    <CardBox className="lg:col-span-2">
      <WorksWith/>
    </CardBox>
  </Flex>
  )
}

export default EducationAndSocial