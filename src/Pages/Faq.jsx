import React, { useState } from 'react'
import Container from '../Layout/Container'
import CardBox from '../Layout/CardBox'
import { FaqData } from "../Components/Faq/FaqData"
import MinTitle from '../Layout/MinTitle';
import LargeTitle from '../Layout/LargeTitle';

import { FaMinus, FaPlus } from 'react-icons/fa6';

import img from "../assets/profile.jpeg"
console.log(FaqData);
const Faq = () => {
    const [active, setActive] = useState(null)
    const handleClick = (index) => {
        if(active === index){
            setActive(null)
        }
        else{
            setActive(index)
        }
    }
    return (
        <div>
            <Container>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-x-20 items-center'>
                    <div className='lg:col-span-3 '>
                    {
                        FaqData.map((item, i) => {
                            const { question, answer } = item
                            return (
                                <div>
                                    <CardBox className={`mb-2 `}>
                                        <div key={i} className={`flex justify-between items-center cursor-pointer duration-1000 ease-in-out `} onClick={() => handleClick(i)}>
                                            <MinTitle text={question} className={` transition-all duration-300 ease-in-out ${active === i ? "  !text-theme" : "!text-primary"}`} />
                                            <div className={` transition-all duration-300 ease-in-out ${active === i ? "  !text-theme" : "!text-primary"}`}>
                                            {
                                                active === i ? <FaMinus/> : <FaPlus />
                                            }
                                            </div>
                                        </div>
                                        {
                                            active === i &&
                                            <MinTitle text={answer} className="pt-2 !text-textSecondary" />
                                        }
                                    </CardBox>
                                </div>
                            )
                        })
                    }

                    </div>
                    <div className='lg:col-span-2 '>
                        <LargeTitle text="??"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Faq