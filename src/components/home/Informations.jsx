import React from 'react';
import { TransportB } from '../../assets';

const Informations = () => {
  return (
    <div className='w-full bg-gradient-to-r from-[#117879] to-[#1D00BC] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={ TransportB } alt="achat" />
        <div className='flex flex-col justify-center'> 
            <p className='text-[#9DFDFF] font-bold uppercase'>Réservez votre voyage et votre transport en toute simplicité avec AirLife.</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'> </h1>
            <p className='text-white'>
            Sur cette plateforme, vous pouvez faire tout ce que vous souhaitez sans vous déplacer. 
            Nous vous offrons un large choix d'articles, d'hôtels et même de moyens de transport. 
            Notre application est conçue pour répondre aux différents besoins de votre vie quotidienne. 
            Payez facilement avec votre compte <strong>Airtel Money</strong>
                </p>
            <button className='bg-[#9DFDFF] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-2'>En savoir plus</button>
        </div>
    </div>
    </div>
  )
}

export default Informations