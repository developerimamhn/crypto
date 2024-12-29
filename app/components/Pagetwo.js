import React from 'react';
import Image from 'next/image';
import image13 from '../components/image/image13.png';

const Pagetwo = () => {
    return (
        <div>
            <div className='container mx-auto pt-[60px] md:pt-[70px] lg:pt-[90px] xl:pt-[120px] 2xl:pt-[150px] pb-[50px] md:pb-[60px] lg:pb-[80px] xl:pb-[100px] 2xl:pb-[113px] px-[24px] sm:px-[0]'>
                <div className=''>
                    <h1 className='cheketoady pb-[40px] sm:pb-[50px] md:pb-[70px] xl:pb-[100px]'>Check Today's <div className='cheketoadyprice'>Market Price</div></h1>
                    <Image className='w-full' src={image13} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Pagetwo;