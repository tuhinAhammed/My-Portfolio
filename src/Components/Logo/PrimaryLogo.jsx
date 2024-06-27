import React from 'react';
import  demoLogo  from '../../assets/demoLogo.png';
import LargeTitle from "../../Layout/LargeTitle"
const PrimaryLogo = ({ className}) => {
  return (
    <div className={`${className}`}>
      <div className={`flex items-center justify-start gap-x-1 lg:gap-x-1 `}>
      <div className="logo w-[25px]  lg:w-[40px]">
      <img src={demoLogo} alt="re" className='w-full animate-spin-slow'/>
      </div>
      <LargeTitle text="BJECT" className="tracking-[2px] !text-[24px]  lg:!text-[44px] !text-theme leading-[0px]"/>
    </div>
    </div>
  );
};

export default PrimaryLogo;
