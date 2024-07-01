import React, { useEffect, useState } from 'react';
import { GrSystem } from 'react-icons/gr';
import { PiMoonLight, PiSunLight } from 'react-icons/pi';
import PagePreloader from '../../Layout/PagePreloader';
import ThemeChange from './ThemeChange';
const modeIcons = [
  {
    icon: <PiSunLight className='text-[18px] md:text-2xl align-center' />,
    name: "light",
  },
  {
    icon: <PiMoonLight className='text-[18px] md:text-2xl align-center' />,
    name: "dark",
  },

]
const ModeChange = ({ className , onThemeChange , activeThemeColor}) => {
  const mainIndex = document.documentElement
  const [modeTheme, setModeTheme] = useState(
    localStorage.getItem("modeTheme") ? localStorage.getItem("modeTheme") : "dark"
  )
  const modeQuery = window.matchMedia("(prefers-color-scheme : dar2)")
  console.log(modeQuery);
  
    const handleModeChange = (modeName) => {
      setTimeout(() => { 
        setModeTheme(modeName);
      }, 300);
    }
  
  function onWindowMatch() {
    if (localStorage.modeTheme === "dark" || (!("modeTheme" in localStorage) && modeQuery.matches)) {
      mainIndex.classList.add("dark")
    }
    else {
      mainIndex.classList.remove("dark")

    }
  }
  onWindowMatch()
  useEffect(() => {
    if (modeTheme === "dark") {
      mainIndex.classList.add("dark")
      localStorage.setItem("modeTheme", "dark")
    }
    if (modeTheme === "light") {
      mainIndex.classList.remove("dark")
      localStorage.setItem("modeTheme", "light")
    }
    if (modeTheme === "system") {
      localStorage.removeItem("modeTheme")
      onWindowMatch()
    }
  }, [modeTheme])
  console.log(modeTheme);

  return (

    <div className={`fixed top-[32px] right-[20%] md:top-[14%] md:right-[95%]  md:fixed z-[999999] flex items-center md:grid gap-1 md:gap-2 md:dark:bg-tertiary rounded-lg bg-transparent md:bg-tertiary p-[4px] md:p-2  ${className}`} >
      
        {
          modeIcons?.map((item) => (
            <div className={`text-[#fff] md:text-[#eee] bg-[#72727294] hover:bg-[#7272725e] p-1 md:p-2 rounded-md  m-auto cursor-pointer  duration-500 ${modeTheme === item.name && " dark:border-[#8A898B] border-[1px] md:border-2 border-theme !dark:text-[#fff] text-theme"}`} key={item.name} onClick={() => handleModeChange(item.name)}>
              {item.icon}
            </div>
          ))
        }
      <ThemeChange onThemeChange={onThemeChange} activeThemeColor={activeThemeColor}/>
    </div>
  );
};

export default ModeChange;
