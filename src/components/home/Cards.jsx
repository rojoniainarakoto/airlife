import React from 'react';
import Single from '../../assets/single.png';
import Double from '../../assets/double.png';
import Triple from '../../assets/triple.png';

const Cards = () => {
    return (
        <div className='w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px]  mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Simple utilisateur</h2>
                    <p className='text-center text-4xl font-bold'>$29</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Non partageable</p>
                        <p className='py-2 border-b mx-8'>Paiement mensuel</p>
                        <p className='py-2 border-b mx-8'>Accès illimité</p>
                    </div>
                    <button className='bg-[#00df9a] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>S'inscrire</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Simple utilisateur</h2>
                    <p className='text-center text-4xl font-bold'>$59</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Partageable</p>
                        <p className='py-2 border-b mx-8'>Paiement mensuel</p>
                        <p className='py-2 border-b mx-8'>Accès illimité</p>
                    </div>
                    <button className='bg-[#00df9a] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>S'inscrire</button>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Simple utilisateur</h2>
                    <p className='text-center text-4xl font-bold'>$70</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Partageable</p>
                        <p className='py-2 border-b mx-8'>Paiement Annuel</p>
                        <p className='py-2 border-b mx-8'>Accès illimité</p>
                    </div>
                    <button className='bg-[#00df9a] md:w-[200px] sm:w-[100px] rounded-md font-medium my-6 mx-auto px-6 py-3'>S'inscrire</button>
                </div>
            </div>
        </div>
    );
};

export default Cards