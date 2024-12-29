"use client";


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import image1 from './image/image 9.png';
import image2 from './image/Frame 10.png';
import image3 from './image/image 12.png';
import image4 from './image/image 13.png';

const Sliderone = () => {
    return (
        <div className='relative'>
      <Swiper  modules={[Pagination]} 
      pagination={{
        el: '.swiper-pagination', 
        clickable: true,      
    }}
      breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 2.8,
            spaceBetween: 32,
          },
        }} 
         className="mySwiper">
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image1} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image2} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image3} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image4} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image1} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image2} alt=''/></SwiperSlide>
        <SwiperSlide><Image className='h-[500px] w-[100%]' src={image3} alt=''/></SwiperSlide>
      </Swiper>
      <div class="swiper-pagination"></div>
    </div>
    );
};

export default Sliderone;