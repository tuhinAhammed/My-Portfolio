import React from 'react'
import MinTitle from './MinTitle'
const data = "thi dw  edwed"
const InputBox = ({ className, title, placeholder, type, enterSubmit , onHandleChange , name , }) => {
  
  const handleKeyDown = (e) => {
    if (typeof (enterSubmit) === "function") {
      enterSubmit(e)
    }
  }
const handleChange = (input) => {
  onHandleChange(input);
} 

  return (
    <div className={`${className}`}>
      <MinTitle text={title} className="!text-base lg:!text-lg" />
      
      {/* <p className='error text-red-500'>Enter Your Error</p> */}
      <input type={type} placeholder={placeholder} onChange={handleChange} onKeyDown={handleKeyDown} name={name} className={`my-2 p-3 bg-transparent border-[1px] lg:border-2 border-tertiary rounded-md text-textSecondary focus-visible:outline-none focus-visible:border-theme w-full text-sm lg:text-lg ${className}`} />
    </div>
  );
};



export default InputBox