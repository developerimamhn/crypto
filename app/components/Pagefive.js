"use client";

import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Pagefive = () => {
    return (
        <div className='relative inline'>
            <div className="inline">
            <TypeAnimation
                sequence={[
                    ' PARTNER',
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
