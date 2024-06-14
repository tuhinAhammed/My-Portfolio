import React from 'react'
import ContactInfo from '../Components/Contact/ContactInfo'
import ContactForm from '../Components/Contact/ContactForm'
import CardBox from "../Layout/CardBox"
import Flex from '../Layout/Flex'
import Container from '../Layout/Container'
import SocialLink from '../Components/Contact/SocialLink'
const Contact = () => {
  return (
    <div className="">
      <Container>
        <Flex className=" gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <CardBox className="lg:col-span-1 col-span-3">
            <ContactInfo />
          </CardBox>
          <CardBox className="lg:col-span-2 col-span-3">

            <ContactForm />
          </CardBox>
        </Flex>
        <SocialLink className="mt-5"/>
      </Container>
    </div>
  )
}

export default Contact