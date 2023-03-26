import React from 'react';
import { fond } from '../assets';
const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className=' w-full h-screen bg-no-repeat bg-cover relative'style={{backgroundImage: `url(${fond})`}}>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Bienvenue à <span className='text-blue-500'></span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-blue-500'>AirLife</span> Reservation</h1>
            </div>
            
        </div>
    </div>
  )
}

export default Hero