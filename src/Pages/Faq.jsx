import React, { useState } from 'react'
import Container from '../Layout/Container'
import CardBox from '../Layout/CardBox'
import { FaqData } from "../Components/Faq/FaqData"
import MinTitle from '../Layout/MinTitle';
import MidTitle from '../Layout/MidTitle';
import Button from '../Layout/Button';
import { FaMinus, FaPlus } from 'react-icons/fa6';

import agency from "../assets/object.jpeg"
import TestimonialSlider from '../Components/Faq/TestimonialSlider';
import Logo from '../Components/Logo/Logo';


const Faq = () => {
    const [active, setActive] = useState(null)
    const handleClick = (index) => {
        if (active === index) {
            setActive(null)
        }
        else {
            setActive(index)
        }
    }
    return (
        <div>
            <Container>
                <CardBox>

                    <div className='grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-10 '>
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
                                                            active === i ? <FaMinus /> : <FaPlus />
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
                            <CardBox>
                                <div className=' w-[85%] h-[85%] m-auto'>
                                    <img src={agency} alt="" className='w-full h-full rounded-full ' />
                                </div>
                                <div className='flex justify-between items-center lg:mt-6 '>
                                    <MidTitle text="Know About ObJect ??" />
                                    <Button text="Go" directLink={"https://www.facebook.com/objectJS"} />
                                </div>
                            </CardBox>
                        </div>
                    </div>
                </CardBox>

                <TestimonialSlider />
                
            </Container>
        </div>
    )
}

export default Faq