import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import PreloaderLogo from "../Components/Logo/PreloaderLogo"

const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  // Empty dependency array means this effect runs only once after initial render

    setTimeout(() => {
      setLoading(false)
    }, 3000);

  return (
    <div className='bg-gradient-to-br from-[#24130E] to-[#0A090D] pt-5 '>
      {loading ? (
       <div className='w-full h-screen flex items-center justify-center w-full mt-[-30px] lg:mt-none'>
        <PreloaderLogo className="animate-pulse"/>
       </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
