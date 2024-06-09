import React from 'react'

import MinTitle from '../../Layout/MinTitle'
import LargeTitle from '../../Layout/LargeTitle'
import MidTitle from '../../Layout/MidTitle'
import Flex from '../../Layout/Flex'
import SkiledItemIcon from '../../Layout/SkiledItemIcon'
import MidLargeTitle from '../../Layout/MidLargeTitle'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from 'react-icons/md'
import { SlLocationPin } from 'react-icons/sl'
const ContactInfo = () => {
  return (
    <div >
      <MinTitle text="Contact Info" className="!text-theme" />
      <MidLargeTitle text="Get In Touch" className=" py-2" />
      <MinTitle text="Don't be afraid man! Just say hello" className="!text-textSecondary" />
      <div className="innerInfo py-5 lg:py-10">
        <Flex className="gap-2 md:gap-3 lg:gap-4">
          <SkiledItemIcon directLink ="tel:01855304215">
            <FiPhoneCall />
          </SkiledItemIcon>
          <div className="text">
            <MidTitle text = "Phone"/>
            <MinTitle text = "+8801855304215" className="text-textSecondary"/>
          </div>
        </Flex>
        <Flex className="gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8">
          <SkiledItemIcon directLink="mailto:tuhinahamed2030@gemail.com">
          <MdOutlineEmail/>
          </SkiledItemIcon>
          <div className="Email">
            <MidTitle text = "Email"/>
            <MinTitle text = "tuhinahamed2030gmail.com" className="text-textSecondary text-wrap"/>
          </div>
        </Flex>
        <Flex className="gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8">
          <SkiledItemIcon directLink="https://maps.app.goo.gl/W3AX898rD71EKGTF9">
          <SlLocationPin/>
          </SkiledItemIcon>
          <div className="Location">
            <MidTitle text = "Location"/>
            <MinTitle text = "Mohammadpur , Dhaka -1207 - Bangladesh" className="text-textSecondary"/>
          </div>
        </Flex>
      </div>
    </div>
  )
}

export default ContactInfo