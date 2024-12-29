"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Pagefive = () => {
    return (
        <div className='relative'>
            <div className="">
            <TypeAnimation
                sequence={[
                    'CRYPTO PARTNER',
                    1000,
                    '',
                    3000
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
                />
            </div>
        </div>
    );
};

export default Pagefive;
