import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import PreloaderLogo from "../Components/Logo/PreloaderLogo"
import ThemeChange from '../Components/Theme/ThemeChange';
import ModeChange from '../Components/Theme/ModeChange';
import FacebookChat from '../Components/FacebookChat/FacebookChat';
import MessengerCustomerChat from 'react-messenger-customer-chat';
const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const [theme , setTheme] = useState("#8128F6")

  // Empty dependency array means this effect runs only once after initial render

    setTimeout(() => {
      setLoading(false)
    }, 3000);

      const handleThemeChange = (colors) => {
          setTheme(colors);
      }
  return (
    <div className='dark:bg-gradient-to-br dark:from-[#24130E] dark:to-[#0A090D] bg-gradient-to-r from-[#F5E5DD] to-[#eee] pt-5' style={{ '--theme-color': theme }}>
      {loading ? (
       <div className='w-full h-screen flex items-center justify-center w-full mt-[-30px] lg:mt-none'>
        <PreloaderLogo className="animate-pulse"/>
       </div>
      ) : (
        <>
          <Header />
          <FacebookChat/>
          <ModeChange className="" onThemeChange={handleThemeChange} activeThemeColor={theme}/>
          <Outlet />
          <MessengerCustomerChat
        pageId="153542789835248"
        appId="460086386839803"
      />
          <Footer />
        </>
      )}
    </div>
  );
};

export default RootLayout;
