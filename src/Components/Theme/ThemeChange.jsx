import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import color from "../../assets/displace.png"

const colors = [
    { name: "default", colorValue: "#8128F6" },  // Original Default
    { name: "red", colorValue: "#DC3545" },      // Red
    { name: "green", colorValue: "#28A745" },    // Green
    { name: "gray", colorValue: "gray" },        // Gray
    { name: "orange", colorValue: "#FD7E14" },   // Orange
    { name: "cyan", colorValue: "#17A2B8" },     // Cyan
    { name: "pink", colorValue: "#E83E8C" },     // Pink
    { name: "indigo", colorValue: "#6610F2" },   // Indigo
    { name: "coral", colorValue: "#FF6F61" },    // Coral
    { name: "mint", colorValue: "#3EB489" },     // Mint
];

const ThemeChange = ({ onThemeChange, activeThemeColor }) => {
    const [themeShow, setThemeShow] = useState(true)
    const [activeTheme, setActiveTheme] = useState(activeThemeColor)

    const themeRef = useRef()
    useEffect(() => {
        const handleMouseOver = (e) => {

            if (themeRef.current && themeRef.current.contains(e.target)) {
                setThemeShow(false)
            }
            else {
                setThemeShow(true)
            }
        }
        document.body.addEventListener("mouseover", handleMouseOver)
        // return () => {
        //     document.body.removeEventListener("mouseover", handleMouseOver);
        // }
    }, [])

    useEffect(() => {
        setActiveTheme(activeThemeColor);
    }, [activeThemeColor]);
    console.log(activeTheme);
    return (

        <div className="" >

            {
                themeShow ?
                    <div className=" cardBox relative rounded-md md:rounded-md !border-none  !md:border-[1px] border-tertiary border-opacity-[0.6] cursor-default   bg-[#72727294]  overflow-hidden w-[26px] md:w-[40px] h-[26px] md:h-[40px] p-1 md:p-2  transition-all duration-[3000] cursor-pointer" ref={themeRef}>
                        <img src={color} alt="" className=" m-auto animate-pulse " />
                    </div>
                    :
                    <div className=" cardBox absolute top-[120%] left-[100%] md:top-0 md:left-0  md:relative rounded-md md:rounded-xl border-none md:border-[1px] border-tertiary border-opacity-[0.6] cursor-default  overflow-hidden ${className} shadow-primary-shadow hover:shadow-secondary-shadow " ref={themeRef}>

                        <div className='cols-span-1 '>
                            <div className='bg-tertiary rounded-md md:rounded-lg  grid  gap-2 justify-center h-full p-2 md:p-0'>
                                {
                                    colors.map((color, index) => {
                                        const { name, colorValue } = color
                                        return (
                                            <div className={`w-5 md:w-6 lg:w-8 h-5 l:h-6 lg:h-8 rounded-full cursor-pointer ${activeTheme === colorValue && "border-2"}`} style={{ backgroundColor: colorValue }} key={name} onClick={(e) => onThemeChange(colorValue)}></div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default ThemeChange