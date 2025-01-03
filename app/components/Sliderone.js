"use client";


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/autoplay';
import image1 from './image/image 9.png';
import image2 from './image/Frame 10.png';
import image3 from './image/image 12.png';
import image4 from './image/image 13.png';

const Sliderone = () => {
    return (
        <div className='relative w-fit  mx-auto'>
      <Swiper  modules={[Autoplay, Pagination]} 
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{
        el: '.swiper-pagination', 
        clickable: true,      
    }}
      breakpoints={{
          40: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 32,
          },
        }} 
         className="mySwiper overflow-hidden cursor-pointer w-fit">
          <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[588px] w-full  object-contain ' src={image4} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] w-full object-contain ' src={image1} alt=''/></SwiperSlide>

        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] w-full object-contain ' src={image2} alt=''/></SwiperSlide>

        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] !w-full object-contain ' src={image3} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300]t sm:h-[450px] lg:h-[588px] w-full  object-contain ' src={image1} alt=''/></SwiperSlide>

        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[588px] w-full  object-contain ' src={image2} alt=''/></SwiperSlide>

        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[588px] !w-full  object-contain ' src={image3} alt=''/></SwiperSlide>

        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] w-full object-contain ' src={image1} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] w-full object-contain ' src={image2} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[585px] !w-full object-contain ' src={image3} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[588px] w-full  object-contain ' src={image4} alt=''/></SwiperSlide>
        <SwiperSlide className='!w-fit'><Image className='h-[300] sm:h-[450px] lg:h-[588px] w-full  object-contain ' src={image1} alt=''/></SwiperSlide>
      </Swiper>
      
      <div class="swiper-pagination"></div>
    </div>
    );
};

export default Sliderone;