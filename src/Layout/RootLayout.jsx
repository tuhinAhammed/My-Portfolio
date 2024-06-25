import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { Bars, Watch } from 'react-loader-spinner';
import tailwindConfig from '../../tailwind.config';
const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const themeColor = tailwindConfig.theme.extend.colors.theme
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    // return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div className='bg-gradient-to-br from-[#24130E] to-[#0A090D] pt-5 '>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Bars
            visible={true}
            height="100%"
            width="100%"
            radius="48"
            color={themeColor}
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
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
