import React from 'react';

import { background, logo } from '../../assets';

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white'>
        <div className="w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
            <img className='bg-center mx-auto mt-10 w-[190px] h-[100px]' src={logo} alt="logo" />
            
        </div>

        <div className='bg-gradient-to-r from-[#14028E] to-[#1D00BC] justify-center bg-transparent'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-transparent mt-6'>
                <h4 className='text-3xl dark:text-white text-bold text-center mb-2'>S'identifier</h4>
                <div className='flex flex-col text-gray-400 py-2 mt-10'>
                    <label className='text-white'>E-mail</label>
                    <input className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" />
                </div>
                <div className='flex flex-col py-2 text-white'>
                    <label className='text-white'>Mot de passe</label>
                    <input className='p-2 rounded-l mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="password" />
                </div>
                <div className='flex justify-between  py-2'>
                    <p className='flex items-center text-white'><input className='mr-2 ' type="checkbox" /> S'en souvenir de moi</p>
                    <p className='text-white'>Mot de pass oublier</p>
                    
                </div>
                <p className='text-gray-400 py-2  text-center text-white'>Nouveau sur AirLife ? <a href='/signup'> S'inscrire </a></p>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Connecter</button>
                
            </form>
        </div>
    </div>
  )
}