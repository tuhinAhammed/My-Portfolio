import React from 'react';
import  demoLogo  from '../../assets/demoLogo.png';
import LargeTitle from "../../Layout/LargeTitle"
const Logo = ({ color1 = '#000000', color2 = '#F5A623' }) => {
  return (
    <div className="flex items-center justify-start gap-x-1 lg:gap-x-2">
      <div className="logo w-[20px] lg:w-[60px]">
      <img src={demoLogo} alt="re" className='w-full'/>
      </div>
      <LargeTitle text="OBJECT" className="tracking-[4px] !text-[18px] lg:!text-[45px] !text-theme leading-[0px]"/>
    </div>
  );
};

export default Logo;
