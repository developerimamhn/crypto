"use client";

import React from 'react';
import Image from 'next/image';
import image13 from '../components/image/image13.png';
import image15 from '../components/image/image15.png';
import MarketButtons from './MarketButtons';

const Pagetwo = () => {
    return (
        <div>
            <div className='container mx-auto pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[150px] pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[113px] px-[24px] sm:px-[0]'>
                <div className=''>
                    <h1 className='cheketoady pb-[40px] sm:pb-[50px] md:pb-[70px] xl:pb-[100px]'>Check Today's <div className='cheketoadyprice'>Market Price</div></h1>
                    <div className="">
                        {/* <div className="flex justify-start items-center">
                            <button className="Marketbtn">KRW Market</button>
                            <button className="Marketbtn">BTC Market</button>
                            <button className="Marketbtn">Held</button>
                            <button className="Marketbtn">Favorites</button>
                        </div> */}

                        
                        <MarketButtons/>
                        <div className=''>
                        <div className="iesmcener grid grid-cols-12 justify-between items-center gap-[4px]">
                            <ul className="imagesiges flex justify-between items-center lg:col-1 col-span-12 xl:col-span-9 overflow-hidden xl:gap-0 gap-[10px] relative">
                                <li>All</li>
                                <li>InvestmentCaution</li>
                                <li className='lg:w-[143px] xl:w-auto'>MetaverseNFT</li>
                                <li>Gaming</li>
                                <li>DeFi</li>
                                <li>Revival</li>
                                <li>Meme</li>
                                <li>Metaverse</li>
                                <Image className='h-full absolute right-0 top-0 select-none opinter-event-none' src={image15} alt=""/>
                            </ul>
                            <div className='flex justify-start items-center col-span-12 xl:col-span-3 inputclassing'>
                            <svg className='w-[15px] sm:w-[20px] lg:w-[24px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#231E1D" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 22L20 20" stroke="#231E1D" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <input className='w-full inputstyling' type="search" placeholder="Search"/>
                            </div>
                        </div>
                        <div className='mt-[20px] lg:mt-[32px]'>
                            <Image className='w-full' src={image13} alt=""/>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Pagetwo;