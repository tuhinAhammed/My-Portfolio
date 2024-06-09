import React from 'react'
import InputBox from '../../Layout/InputBox'
import Flex from '../../Layout/Flex'
import Button from '../../Layout/Button'
import SecondaryButton from '../../Layout/SecondaryButton'
import MinTitle from '../../Layout/MinTitle'

const ContactForm = ({className}) => {
  return (
    <div className='className'>
      <Flex className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4">
      <InputBox title ="Name" placeholder="Your Name" type = "text"/>
      <InputBox title="Email" placeholder="Your Email" type = "email"/>
      </Flex>
      <Flex className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 lg:mt-2">
      <InputBox title ="Phone (Optional)" placeholder="Your Phone" type = "number"/>
      <InputBox title="Subjet" placeholder="Your Subject" type = "text"/>
      </Flex>
      <div className="lg:mt-2 w-full">
      <MinTitle text="Message" className ="!text-[20px] mb-4" />
      <textarea title="Message" placeholder="Your Message Here" type = "checkbox" rows="4" className="className={` p-3 bg-transparent border-2 border-tertiary rounded-md text-textSecondary focus-visible:outline-none focus-visible:border-theme w-full "></textarea>
      </div>
      <Flex className="group items-center gap-2 mt-4">
        <Button text = "Submit"/>
        <SecondaryButton/>
      </Flex>
    </div>
  )
}

export default ContactForm