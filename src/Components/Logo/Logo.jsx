import React from 'react';
import demoLogo from "../../assets/demoLogo.png"
import logo from "../../assets/Logo.png"

const Logo = () => {
  return (
    <div className="flex justify-start items-center gap-x-2 ">
      <img src={demoLogo} alt="" className="w-[25px] md:w-[60px]" />
      <img src={logo} alt="" className="w-[45px] md:w-[120px]" />
    </div>
  );
};

export default Logo;
