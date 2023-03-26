import React from 'react';
import { TransportB } from '../../assets';
import { Link } from 'react-router-dom';

const HeroTourisme = () => {
  return ( 
    <div className='w-full h-screen bg-gradient-to-r from-[#117879] to-[#1D00BC] py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={TransportB} alt="achat" />
        <div className='flex flex-col justify-center'> 
            <p className='text-[#9DFDFF] font-bold uppercase'>Faites vos courses comme si vous étiez sur place sans vous déplacer.</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'> </h1>
            <p className='text-white'>
            Vous recherchez une solution complète pour toutes vos réservations de voyage et de transport ? AirLife est là pour vous ! 
            Réservez facilement votre billet d'avion, de train ou de taxi-brousse en quelques clics, et profitez de tarifs avantageux. 
            En plus de cela, nous offrons également des services de transport personnalisés pour votre déménagement - 
            des taxis pour les déplacements courts aux camions pour les grands déménagements. 
            Avec AirLife, simplifiez votre vie et profitez d'un service de qualité à chaque étape de votre voyage ou de votre déménagement !
             En le payant avec<strong>Airtel Money</strong>
                </p>
            <button className='bg-[#9DFDFF] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-2'>En savoir plus</button>
        </div>
    </div>
    </div>
  );
};

export default HeroTourisme