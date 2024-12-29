"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Pagefore = () => {
    return (
        <div className='relative'>
            <div className="">
            <TypeAnimation
                sequence={[
                    'LEADING GLOBAL',
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

export default Pagefore;
