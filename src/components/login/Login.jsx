import React, { useState } from 'react';

import { background, logo } from '../../assets';

export default function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleMailChange = (e) => {
        if (!isValidEmail(e.target.value)) {
          setError("E-mail non valide");
        } else {
          setError(null);
        }  
        setMail(e.target.value);
      };

    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full text-white'>
        <div className="hidden sm:block w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
            <img className='bg-center mx-auto mt-10 w-[290px] h-[170px]' src={logo} alt="logo" />
            
        </div>

        <div className='bg-gradient-to-r from-[#14028E] to-[#1D00BC] justify-center bg-transparent'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-transparent mt-6' onSubmit={handleSubmit}>
                <h4 className='text-3xl dark:text-white text-bold text-center mb-2'>S'identier</h4>
                <div className='flex flex-col text-gray-400 py-2 mt-10'>
                    <label className='text-white'>E-mail</label>
                    <input className='rounded-lg mt-2 p-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="text" value={mail} onChange={handleMailChange}/>
                    {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                <div className='flex flex-col py-2 text-white'>
                    <label className='text-white'>Mot de passe</label>
                    <input className='p-2 rounded-l mt-2 focus:border-blue-500  focus:outline-none text-black text-bold' type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className='flex justify-between  py-2'>
                    <p className='flex items-center text-white'><input className='mr-2 ' type="checkbox" /> S'en souvenir de moi</p>
                    <p className='text-white'>Mot de pass oublier</p>
                    
                </div>
                <p className='py-2  text-center text-white'>Nouveau sur AirLife ? <a href='/signup' className='hover:text-[#0FE9F5] '> S'inscrire </a></p>
                <button className='w-full my-5 py-2 bg-[#0FE9F5] shadow-lg  hover:shadow-teal-500/50 text-black font-bold rounded-lg'>Connecter</button>
                
            </form>
        </div>
    </div>
  )
}