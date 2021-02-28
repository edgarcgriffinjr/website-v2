import React from 'react';

const Logo = () => {
    return ( 
        <svg width = '4.5rem' height = '4.5rem' viewBox="0 0 96 96">

            <polygon
                points="48 0, 84 42, 78 48,  84 54, 48 96, 12 54, 18 48, 12 42, 48 0"
                fill = 'none' 
                stroke= '#020894'
                stroke-width ='3'
                strokeLinecap = 'round'
                strokeLinejoin = 'round'
                />

            <path 
                d = 'M63, 30 L33, 30 M33, 28.55 L33, 48 M32, 48 L51, 48 M51, 48 M33,48 L33, 66 M31.55, 66 L63, 66' 
                stroke= '#020894'
                stroke-width ='3'/>
    </svg>
     );
}
 
export default Logo;