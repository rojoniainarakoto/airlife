import React from 'react';
import { logo, background } from '../../assets';

const Signup = () => {
  return (
    <div className=' bg-[#1D00BC] grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div className="w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
            <img className='bg-center mx-auto mt-10 w-[190px] h-[100px]' src={logo} alt="logo" />      
        </div>

        <div className='bg-gradient-to-r from-[#14028E] to-[#1D00BC] justify-center bg-transparent'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-transparent'>
            <h4 className='text-3xl dark:text-white text-bold text-center'>S'inscrire</h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3'>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Nom</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" />
                    </div>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Prenom</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" />
                    </div>
                </div>
                <div className='flex flex-col text-gray-400 py-2 mb-0'>
                    <label className='text-white'>Numéro téléphone</label>
                    <input className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2 mb-0'>
                    <label className='text-white'>E-mail</label>
                    <input className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3'>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Mot de passe</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="password" />
                    </div>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Confirmation Mot de passe</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="password" />
                    </div>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'>Déjà inscrit(e) ?  <a href='/login'>S’identifier</a></p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Enregistrer</button>
                
            </form>
        </div>
    </div>
  )
}

export default Signup