import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { Bars, Watch } from 'react-loader-spinner';
import tailwindConfig from '../../tailwind.config';
import { BounceLoader, HashLoader } from 'react-spinners';
const RootLayout = () => {
  const [loading, setLoading] = useState(true);
  const themeColor = tailwindConfig.theme.extend.colors.theme
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    // return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs only once after initial render

  return (
    <div className='bg-gradient-to-br from-[#24130E] to-[#0A090D] pt-5 '>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
            <BounceLoader
              className=" m-auto opacity-[0.4] mt-[120px] "
              color={themeColor}   
              // loading={loading}
              // cssOverride={override}
              size="500"
              aria-label="Loading Spinner"
              data-testid="loader"
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
