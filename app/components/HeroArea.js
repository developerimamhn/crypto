"use client";


import Image from 'next/image';
import React from 'react';
import image12 from './image/image12.png';
import Pagefive from './Pagefive';
import Pagefore from './Pagefore';

const HeroArea = () => {
    return (
        <div>
            <div className='container mx-auto pb-[50px] sm:pb-[70px] lg:pb-[90px] xl:pb-[110px] 2xl:pb-[132px] px-[24px] sm:px-0'>
                <div className='flex justify-center  items-center'>
                <Image className='' src={image12} alt='Loading...'/>
                </div>
                <div className='flex justify-start items-center flex-col sm:flex-row gap-[15px] sm:gap-[8px] lg:gap-[13px]'>
                    <h2 className='leadingbols'><Pagefore/></h2><p className='trustedcrypto sm:text-left text-center'>We Build a Trusted and <br/> Transparent Crypto Platform.</p>
                </div>
                <div className='flex justify-end items-center flex-col sm:flex-row sm:gap-[8px] lg:gap-[13px] mt-[30px] sm:mt-[40px] md:mt-[50px] lg:mt-[55px] xl:mt-[60px] 2xl:mt-[64px]'>
                    <h2 className='leadingbols'><Pagefive/></h2>
                </div>
                
            </div>
        </div>
    );
};

export default HeroArea;