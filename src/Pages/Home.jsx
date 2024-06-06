import React from 'react'
import Header from '../Components/Header'
import Container from '../Layout/Container'
import Button from '../Layout/Button'
import MinTitle from '../Layout/MinTitle'
import ProfileSection from '../Components/Profile'
import ServiceOfering from '../Components/ServiceOfering'
const Home = () => {
  return (
    <div className='py-5'>
      <Container>
        <div className="flex justify-between gap-x-5">

          <div className="leftProfile p-6 bg-senary w-[25%] border-2 border-tertiary rounded-xl mx-auto">
          <ProfileSection/>
          </div>
          <div className="middle w-[50%]">
            <div className="innerSummmarySocial flex justify-between gap-5 rounded-xl">
              <div className="summary w-[50%] rounded-xl h-[200px] border-2 border-tertiary">ok</div>
              <div className="social w-[50%] rounded-xl h-[200px] border-2 border-tertiary">ok</div>
            </div>
            <ServiceOfering/>
          </div>
          <div className="right w-[25%] border-2 border-tertiary rounded-xl"></div>
        </div>
      </Container>
    </div>
  )
}

export default Home