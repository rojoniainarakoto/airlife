import React from 'react';
import Typed from 'react-typed';
import { background } from '../../assets';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/* <p className='text-[#00df9a] md:text-3xl sm:text-2xl font-bold p-2'>Tous votre activité sur une seule application</p> */}
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
              C'est une plateforme de gestion de portefeuil et d'achat en ligne. Gérer sans déplacer.
            </p>
            <button className='bg-[#9DFDFF] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>
              En savoir plus
            </button>
        </div>
    </div>
  )
}

export default Hero;