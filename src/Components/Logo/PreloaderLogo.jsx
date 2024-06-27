import React from 'react';
import  demoLogo  from '../../assets/demoLogo.png';
import LargeTitle from "../../Layout/LargeTitle"
const PreloaderLogo = ({ className}) => {
  return (
    <div className={`${className}`}>
      <div className={`flex items-center justify-start gap-x-1 lg:gap-x-1 `}>
      <div className="logo w-[20px]  lg:w-[60px]">
      <img src={demoLogo} alt="re" className='w-full animate-spin'/>
      </div>
      <LargeTitle text="BJECT" className="tracking-[2px] !text-[18px]  lg:!text-[80px] !text-theme leading-[0px]"/>
    </div>
    </div>
  );
};

export default PreloaderLogo;
