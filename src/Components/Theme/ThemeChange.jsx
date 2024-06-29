import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import eye from "../../assets/eye.png"
import CardBox from '../../Layout/CardBox'
import ModeChange from './ModeChange'
const colors = [
    {
        name: "red",
        colorValue: "#eeeeee"
    },
    {
        name: "green",
        colorValue: "#1ba002"
    },
    {
        name: "orange",
        colorValue: "#ff9800"
    },
    {
        name: "tomato",
        colorValue: "#e91e63"
    },
]
const ThemeChange = ({ onThemeChange }) => {
    const [themeShow, setThemeShow] = useState(true)

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
    return (

        <div className=" z-[999999] !fixed  right-0 top-[50%] top-[50%]" >

            {
                themeShow ?
                    <div className=" w-[50px] h-[50px] cardBox relative p-2 rounded-xl border-[1px] border-tertiary border-opacity-[0.6] cursor-default bg-senary overflow-hidden ${className} shadow-primary-shadow hover:shadow-secondary-shadow transition-all duration-[200] cursor-pointer" ref={themeRef}>
                        <img src={eye} alt="" className="w-full h-full" />
                    </div>
                    :
                    <div className=" cardBox relative p-2 rounded-xl border-[1px] border-tertiary border-opacity-[0.6] cursor-default bg-senary overflow-hidden ${className} shadow-primary-shadow hover:shadow-secondary-shadow transition-all duration-[200]" ref={themeRef}>
                        <div className='grid gap-2 grid-cols-3 items-center justify-center'>
                            <ModeChange />
                            {
                                colors.map((color, index) => {
                                    const { name, colorValue } = color
                                    return (
                                        <div className={`w-6 lg:w-8  h-6 lg:h-8 rounded-full cursor-pointer`} style={{ backgroundColor: colorValue }} key={index} onClick={(e) => onThemeChange(colorValue)}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

export default ThemeChange