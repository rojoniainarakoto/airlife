import React from 'react';
import Laptop from '../../assets/laptop.jpg';

const Informations = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
        <div className='flex flex-col justify-center'> 
            <p className='text-[#00df9a] font-bold uppercase'>Apprendre pas à pas</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Avec des exersices et des labs </h1>
            <p>
                Infrastructure as code : utiliser des outils de provisionnement d'infrastructure tels que 
                Terraform ou CloudFormation pour décrire l'infrastructure souhaitée sous forme de code, 
                et provisionner cette infrastructure automatiquement sur les plateformes cloud.</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-2'>En savoir plus</button>
        </div>
    </div>
    </div>
  )
}

export default Informations