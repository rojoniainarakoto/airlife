import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] md:text-3xl sm:text-2xl font-bold p-2'>Etudier autrement et sans frontiere</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grandissons ensemble</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5l sm:text-4xl text-xl font-bold py-4'>On vous propose :</p>
               <Typed className='md:text-5l sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['Flexibilité', 'Qualité', 'Facilité' ]} 
                    typeSpeed={120} 
                    backSpeed={140} 
                    loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>
              C'est une plateforme de formation en ligne. Commence à étudier là où tu veux quand tu veux.
            </p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>
              En savoir plus
            </button>
        </div>
    </div>
  )
}

export default Hero