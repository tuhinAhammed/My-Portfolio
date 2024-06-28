import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardBox = ({ className, children, shapeImg, shapeCss, aosAnimation }) => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 20
    });
  }, []);

  return (
    <div
      className={`cardBox relative p-6 rounded-xl border-[1px] border-tertiary border-opacity-[0.6] cursor-default bg-senary overflow-hidden ${className} shadow-primary-shadow hover:shadow-secondary-shadow transition-all duration-[200]`} data-aos="zoom-in-down" 
    >
      {shapeImg && (
        <img
          src={shapeImg}
          alt=""
          className={`absolute  text-theme text-[125px] opacity-[0.8]  z-[1] animate-pulse-slow ${shapeCss}`}
        />
      )}
      {children}
    </div>
  );
};

export default CardBox;
