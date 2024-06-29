import React, { useEffect, useState } from 'react';
import { PiMoonLight, PiSunLight } from 'react-icons/pi';

const ModeChange = () => {
  // Toggle dark mode

  // Set the default theme

const [mode , setMode] = useState(false)
const handleMode = () => {
    setMode(!mode)
}
  return (
    <div className=" flex justify-center items-center dark:bg-gray-800 rounded-lg">
      <button onClick={handleMode} className="h-12 w-12 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-3xl text-primary">
       {
        mode ?
        <PiSunLight /> :
        <PiMoonLight />
       }
      </button>
    </div>
  );
};

export default ModeChange;
