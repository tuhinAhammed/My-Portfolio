import React, { useState } from 'react'
import InputBox from '../../Layout/InputBox'
import Flex from '../../Layout/Flex'
import Button from '../../Layout/Button'
import SecondaryButton from '../../Layout/SecondaryButton'
import MinTitle from '../../Layout/MinTitle'
import PrimaryButton from '../../Layout/PrimaryButton'

// react toastify
import { Bounce, Flip, Slide, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = ({ className }) => {
  const [error , setError] = useState("")
  const [formData , setFormData] = useState({
    name : "" ,
    email : "",
    phone : "",
    subject : "",
    message : ""
  })
  const handleSubmit = () => {
    setTimeout(() => {
      toast.success("Thank You! Your form was successfully submited", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },);
    if(!formData.name){
      setError("Enter Your Name")
    }
console.log(formData);
  }
const enterSubmit = (e) => {
  if(e.key === "Enter") {
    handleSubmit()
  }
}
const handleChange = (input) => {
  setFormData ({
    ...formData , [input.target.name] : input.target.value
  })
}
  return (
    <div className={`${className}`} >
      <Flex className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4">
      <InputBox  title="Name" placeholder="Your Name" type="text" enterSubmit={enterSubmit}  onHandleChange={handleChange} name="name"/>

        <InputBox title="Email" placeholder="Your Email" type="email"  enterSubmit={enterSubmit}  onHandleChange={handleChange} name="email" />
      </Flex>
      <Flex className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-4 lg:mt-2">
        <InputBox title="Phone (Optional)" placeholder="Your Phone" type="number" enterSubmit={enterSubmit}  onHandleChange={handleChange} name="phone"/>
        <InputBox title="Subjet" placeholder="Your Subject" type="text"  enterSubmit={enterSubmit}  onHandleChange={handleChange} name="subject"/>
      </Flex>
      <div className="lg:mt-2 w-full">
        <MinTitle text="Message" className="!text-[20px] mb-4" />
        <textarea onChange={handleChange}  name="message" placeholder="Your Message Here" type="checkbox" rows="4" className="className={` p-3 bg-transparent border-2 border-tertiary rounded-md text-textSecondary focus-visible:outline-none focus-visible:border-theme w-full "></textarea>
      </div>
      <div onClick={handleSubmit} className='inline-block'>
        <PrimaryButton text="Submit" className="mt-3" />
      </div>
      <ToastContainer className=""
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce
      />
    </div>

  )
}

export default ContactForm