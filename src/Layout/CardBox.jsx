import React from 'react';

const CardBox = ({ className, children, shapeImg , shapeCss}) => {
  return (
    <div
      className={`cardBox relative p-6 rounded-xl border-[1px] border-tertiary border-opacity-[0.6] cursor-default bg-senary overflow-hidden ${className} shadow-primary-shadow hover:shadow-secondary-shadow transition-all duration-[200]`}
    >
      {shapeImg && (
        <img
          src={shapeImg}
          alt=""
          className={`absolute  text-theme text-[125px] opacity-[0.6]  z-[1] animate-pulse-slow ${shapeCss}`}
        />
      )}
      {children}
    </div>
  );
};

export default CardBox;



  // const [shapeOpen , setShapeOpen] = useState({shape})
  // box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.25)
  // shadow-[0_10px_15px_rgba(0,0,0,0.3),_0_4px_6px_rgba(0,0,0,0.1)]