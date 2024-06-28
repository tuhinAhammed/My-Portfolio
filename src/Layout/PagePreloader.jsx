import React, { useEffect, useState } from 'react';
import { BounceLoader, HashLoader, PropagateLoader } from "react-spinners";
import tailwindConfig from '../../tailwind.config';
import Container from './Container';
import { useLocation } from 'react-router-dom';

const PagePreloader = ({ children , loadingTime}) => {
  const themeColor = tailwindConfig.theme.extend.colors.theme;
  const [loading, setLoading] = useState(true);
  const [loaderSize, setLoaderSize] = useState(30); // Default size
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, loadingTime); // Adjust the timeout as needed
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setLoaderSize(500); // Size for lg devices
      } else if (window.innerWidth >= 640) {
        setLoaderSize(200); // Size for md devices
      } else {
        setLoaderSize(100); // Size for sm devices
      }
    };

    // Initialize size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log(location.pathname);

  return (
    <div>
      {loading ? (
        <Container className="w-full h-screen flex items-center justify-center">
          <BounceLoader
            className="opacity-[0.4] mt-[-180px] lg:mt-[-150px]"
            color={themeColor}
            size={loaderSize}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </Container>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default PagePreloader;
