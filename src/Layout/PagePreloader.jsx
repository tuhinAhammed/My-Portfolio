import React, { useEffect, useState } from 'react';
import { Bars } from 'react-loader-spinner';
import tailwindConfig from '../../tailwind.config';
import Container from './Container';
import { useLocation } from 'react-router-dom';

const PagePreloader = ({ children }) => {
  const themeColor = tailwindConfig.theme.extend.colors.theme;
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div>
      {loading ? (
        <Container className="w-full">
          <div className="flex items-center w-[25%] h-[80vh] m-auto">
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
        </Container>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default PagePreloader;
