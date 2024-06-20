import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles.css"
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { testimonialData } from './TestimonialData';
import img from "../../assets/profile.jpeg"
import CardBox from '../../Layout/CardBox';
import { FaQuoteLeft } from 'react-icons/fa6';
import MinTitle from '../../Layout/MinTitle';
import MidTitle from '../../Layout/MidTitle';
const TestimonialSlider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className=""
        >
            {
                testimonialData.map((item) => {
                    const { testimonialImg, testimonialDesc, personName, personPosition } = item
                    return (

                        <SwiperSlide className='!bg-transparent '>
                            <CardBox className={`mt-5 !p-6 lg:!p-10`}>
                                <div className="inner grid grid-cols-1 lg:grid-cols-4 gap-100 lg:gap-10">
                                    <div className='w-[100px] lg:w-full rounded-full mx-auto lg:ml-auto lg:rounded-lg  overflow-hidden lg:col-span-1'>
                                        <img src={testimonialImg} alt="img" className=' h-[100%] rounded-lg  ' />
                                    </div>
                                    <div className="desc lg:col-span-3 text-left">
                                        <FaQuoteLeft className='text-theme text-[40px] lg:text-[80px] leading-none' />
                                        <MinTitle text={testimonialDesc} className="!text-textSecondary py-2" />
                                        <MidTitle text={personName} className="text-theme" />
                                        <MinTitle text={personPosition} />
                                    </div>
                                </div>
                            </CardBox>
                        </SwiperSlide>
                    )
                })
            }

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    )
}

export default TestimonialSlider