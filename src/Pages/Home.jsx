import React from 'react'
import Container from '../Layout/Container'
import ProfileSection from '../Components/Home/Profile'
import ArticleSection from '../Components/Home/ArticleSection'
import CardBox from '../Layout/CardBox'
import SummarySection from '../Components/Home/SummarySection'
import ExprienceSection from '../Components/Home/ExprienceSection'
import SocialProfile from '../Components/Home/SocialProfile'
import ServicesOffering from '../Components/Home/ServicesOffering'
import SkilAndTools from '../Components/Home/SkilAndTools'
import Flex from '../Layout/Flex'
import WorksWith from '../Components/Home/WorksWith'
import LatestWorks from '../Components/Home/LatestWorks'
import SeeMyLatestWork from '../Components/Home/SeeMyLatestWork'
import shapeSingleStar from "../assets/shapeSingleStar.webp"
import shapeCircle from "../assets/shapeCircle.webp"


const Home = () => {
  return (
    <div className=' '>
      {/* */}
      <Container>
        <div className="innerHome flex gap-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

          <div className="leftProfile lg:col-span-1 md:col-span-1">
            <CardBox className="">
              <ProfileSection />
            </CardBox>
            <CardBox className="articles mt-5" shapeImg ={shapeCircle}>
              <ArticleSection />
            </CardBox>
          </div>
          <div className="middle lg:col-span-2 md:col-span-1">
            <div className="innerSummmarySocial flex grid lg:grid-cols-2 grid-cols-1 gap-5">

              <CardBox className=""  shapeImg ={shapeSingleStar}>
                <SummarySection />
              </CardBox>

              <CardBox className="" >
                <SocialProfile />
              </CardBox>
            </div>
            <CardBox className=" mt-5  transition  delay-1000" shapeImg ={shapeCircle}>
              <ServicesOffering /> 
            </CardBox>
          </div>
          <div className="right lg:col-span-1 md:col-span-1">
            <CardBox className="">
              <SeeMyLatestWork/>
            </CardBox>
            <CardBox className="articles mt-5 !py-[33px] !cursor-default" shapeImg ={shapeSingleStar}>
              <ExprienceSection />
            </CardBox>
          </div>
        </div>
        <div className="secondPart mt-5">
          <Flex className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <CardBox className="lg:col-span-2" >
              <SkilAndTools />
            </CardBox>
            <CardBox className="lg:col-span-1" shapeImg ={shapeCircle}>
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