"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import { VscChromeClose } from "react-icons/vsc";
import logo from '../components/image/Frame 5.png';


const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='relative z-30 w-full'>
            <header className=' container mx-auto flex justify-between items-center py-[18px] sm:py-[23px] lg:py-[32px] relative px-[24px] sm:px-[0]'>
                <div className='lg:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[24px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[24px] absolute' />
                    </div>
                </div>
                
                <div clssName="navbar-items-mainbackground">
                <nav
                    ref={menuRef}
                    className={`navbar-items-main absolute lg:top-0 top-[100%] lg:right-0 lg:relative 
                                duration-1000 z-50 lg:opacity-100 flex justify-between items-start lg:items-center 
                                gap-[20px] md:gap-[25px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px] 
                                lg:flex-row flex-col p-[20px] lg:p-[4px] overflow-hidden !bg-transparent
                                transition-all ease-in-out
                                ${toggle ? 'right-[10px] opacity-100' : 'right-[130%] opacity-10'}`}
                    >
                    <Link className=' group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center' href="Exchange">Exchange</Link>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Assets">Assets</Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Wallet">Wallet</Link>

                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="/Market-Trends">Market Trends</Link>
                </nav>
                </div>
                <Link href='/*' className='Froggo-Logo w-[22px] lg:w-[25px] 2xl:w-[38px]'><Image className='w-full' src={logo} alt=''/></Link> 
                <ul className='flex justify-between items-center gap-[16px] md:gap-[20px] lg:gap-[25px] xl:gap-[30px] 2xl:gap-[32px]'>
                    <Link className=' group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center' href="Service">Service</Link>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200 ml-[5px] sm:ml-[7px] lg:ml-[10px]' href="Support">Support</Link>
                    <label>
                    <div className="custom-select-wrapper ml-[20px] sm:ml-[30px] md:ml-[40px] lg:ml-[50px] xl:ml-[60px] 2xl:ml-[68px]">
                        <select className='Link-manu-bar' name="selectedFruit " id="fruit-selector">
                            <option value="apple">EN</option>
                            <option value="banana">BN</option>
                            <option value="orange">AR</option>
                        </select>
                        <svg
                            className="custom-arrow"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M11.9465 5.45337H7.79316H4.05317C3.41317 5.45337 3.09317 6.2267 3.5465 6.68004L6.99983 10.1334C7.55317 10.6867 8.45317 10.6867 9.0065 10.1334L10.3198 8.82004L12.4598 6.68004C12.9065 6.2267 12.5865 5.45337 11.9465 5.45337Z"
                            fill="white"
                            />
                        </svg>
                        </div>
                    </label>
                    <Link className='group Link-manu-bar relative w-fit h-[61px] flex justify-center items-center duraction-200' href="Support">App</Link>
                    <LiaBarsSolid className='Link-manu-bar hidden lg:block'/>
                </ul>
                
                
            </header>
            <div className='navbarunderborder'></div>
        </div>
    );
};

export default NavBar;