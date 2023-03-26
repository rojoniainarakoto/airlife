import React from 'react';
import { fond } from '../../assets';
import { Link } from 'react-router-dom';

const HeroTourisme = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className=' w-full h-screen bg-no-repeat bg-cover relative'style={{backgroundImage: `url(${fond})`}}>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Réservez votre taxi brousse avec<span className='text-blue-500'></span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-blue-500'> AirLife </span>dès maintenant !</h1>
                <button className='bg-[#9DFDFF] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>
                <Link to="/pageReservation">Réserver</Link>
                </button>
            </div>
        </div>
    </div>
  );
};

export default HeroTourisme