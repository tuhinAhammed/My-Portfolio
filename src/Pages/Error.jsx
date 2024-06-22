import React from 'react'
import Container from '../Layout/Container'
import CardBox from '../Layout/CardBox'
import ErrorImg from "../assets/error.gif"
import PrimaryButton from '../Layout/PrimaryButton'
import MidLargeTitle from '../Layout/MidLargeTitle'
const Error = () => {
    const pageName = window.location.pathname.split("/")[1]
  return (
    <div>
        <Container>
        <CardBox>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
            <div>
          <MidLargeTitle text ="The page you are looking for does not exist." className=""/>
        <PrimaryButton text="Back to Home" className="mt-4 lg:mt-[35px]" link="/"/>
          </div>
            <img src={ErrorImg} alt="" className='rounded-lg'/>

            </div>
        </CardBox>
    </Container>
        
    </div>
  )
}

export default Error