import React from 'react'
import Header from '../Components/Header/Header'
import Container from '../Layout/Container'
import Button from '../Layout/Button'
import MinTitle from '../Layout/MinTitle'
import ProfileSection from '../Components/Home/Profile'
import ArticleSection from '../Components/Home/ArticleSection'
import CardBox from '../Layout/CardBox'
import SummarySection from '../Components/Home/SummarySection'
import SlidingSection from '../Layout/SlidingSection'
import Logo from "../assets/Logo.png"
import ExprienceSection from '../Components/Home/ExprienceSection'
import { GoMoveToEnd } from 'react-icons/go'
import SocialProfile from '../Components/Home/SocialProfile'
import ServicesOffering from '../Components/Home/ServicesOffering'
import SkilAndTools from '../Components/Home/SkilAndTools'
import Flex from '../Layout/Flex'
import WorksWith from '../Components/Home/WorksWith'
import LatestWorks from '../Components/Home/LatestWorks'
const Home = () => {
  return (
    <div className='py-5'>
      {/* */}
      <Container>
        <div className="innerHome flex gap-5 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

          <div className="leftProfile lg:col-span-1 md:col-span-1">
            <CardBox className="">
              <ProfileSection />
            </CardBox>
            <CardBox className="articles mt-5">
              <ArticleSection />
            </CardBox>
          </div>
          <div className="middle lg:col-span-2 md:col-span-1">
            <div className="innerSummmarySocial flex grid lg:grid-cols-2 grid-cols-1 gap-5">

              <CardBox className="">
                <SummarySection />
              </CardBox>

              <CardBox className="">
                <SocialProfile />
              </CardBox>
            </div>
            <CardBox className=" mt-5 group transition  delay-1000">
              <ServicesOffering /> 
            </CardBox>
          </div>
          <div className="right lg:col-span-1 md:col-span-1">
            <CardBox className="">
              <SlidingSection text="See My Latest Work" direction="left" className="text-base uppercase text-textSecondary leading-[0px]">
                <GoMoveToEnd className='text-primary text-2xl group-hover:text-theme' />
              </SlidingSection>
            </CardBox>
            <CardBox className="articles mt-5 !py-[33px] !cursor-default">
              <ExprienceSection />
            </CardBox>
          </div>
        </div>
        <div className="secondPart ">
          <Flex className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <CardBox className="lg:col-span-2">
              <SkilAndTools />
            </CardBox>
            <CardBox className="lg:col-span-1">
              <WorksWith />
            </CardBox>
            <CardBox className="lg:col-span-1">
              <LatestWorks />
            </CardBox>
          </Flex>
        </div>
      </Container>
    </div>
  )
}

export default Home