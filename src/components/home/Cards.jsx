import React from 'react';
import { tourisme, Exchange, transport } from '../../assets';

const Cards = () => {
    return (
        <div className='w-full py-[4rem] px-4 bg-white'>
        <div className='w-full py-[10rem] px-4 bg-white' id="info">
            <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Exchange} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Exchange</h2>
                    <p className='text-center font-medium'>Enchange de devise</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Achat international</p>
                        <p className='py-2 border-b mx-8'>Peux echanger en tous temps</p>
                        <p className='py-2 border-b mx-8'>Echange illimité</p>
                    </div>
                    <button className='bg-[#1D00BC] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>
                        <a href='/signup'>S'inscrire</a>
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={transport} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Transport</h2>
                    <p className='text-center font-medium'>Tout type de transport</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Réservation</p>
                        <p className='py-2 border-b mx-8'>N'import où</p>
                        <p className='py-2 border-b mx-8'>Accès illimité</p>
                    </div>
                    <button className='bg-[#1D00BC] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>
                        <a href='/signup'>S'inscrire</a>
                    </button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={tourisme} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Tourisme</h2>
                    <p className='text-center font-medium'>Hotel et Restaurant</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Tout type</p>
                        <p className='py-2 border-b mx-8'>Le plus proce</p>
                        <p className='py-2 border-b mx-8'>Tous budget</p>
                    </div>
                    <button className='bg-[#1D00BC] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>
                        <a href='/signup'>S'inscrire</a>    
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards