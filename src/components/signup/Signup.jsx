import React, { useState } from 'react';
import { logo, background } from '../../assets';

const Signup = () => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");
    const [message, setMessage] = useState("");

    const handleChangeNom = (event) =>{
        setNom(event.target.value);
    }

    const handleChangePrenom = (event) => {
        setPrenom(event.target.value);
    }

    const handleChangePhone = (event) => {
        setPhone(event.target.value)
    }

    const handleChangeMail = (event) => {
        setMail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPwd(event.target.value);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPwd) {
          if (isStrongPassword(password)) {
            setMessage("Les mots de passe doivent contenir au moins une lettre minuscule");
          } else {
            setMessage("Les mots de passe correspondent mais ne sont pas suffisamment complexes");
          }
        } else {
          setMessage("Les mots de passe ne correspondent pas");
        }
      }

      function isStrongPassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
      }

  return (
    <div className=' bg-[#1D00BC] grid grid-cols-1 sm:grid-cols-2 h-screen w-full '>
        <div className="hidden sm:block w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
            <img className='bg-center mx-auto mt-10 w-[290px] h-[170px]' src={logo} alt="logo" />      
        </div>

        <div className='bg-gradient-to-r from-[#14028E] to-[#1D00BC] justify-center bg-transparent '>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-transparent mt-6' onSubmit={handleSubmit}>
            <h4 className='text-3xl dark:text-white text-bold text-center'>S'inscrire</h4>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3'>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Nom</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500
                          focus:outline-none text-black text-bold' type="text"
                          value={nom} onChange={handleChangeNom}
                          />
                    </div>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Prenom</label>
                        <input className='p-2 rounded-lg mt-2 focus:border-blue-500
                          focus:outline-none text-black text-bold' type="text"
                          value={prenom} onChange={handleChangePrenom}
                          />
                    </div>
                </div>
                <div className='flex flex-col text-gray-400 py-2 mb-0'>
                    <label className='text-white'>Numéro téléphone</label>
                    <input 
                    name='phone'
                    id='phone'
                    className='rounded-lg mt-2 p-2 focus:border-blue-500
                      focus:outline-none text-black text-bold' type="text"
                      value={phone} onChange={handleChangePhone}
                      />
                </div>
                <div className='flex flex-col text-gray-400 py-2 mb-0'>
                    <label className='text-white'>E-mail</label>
                    <input 
                    name='mail'
                    id='mail'
                    className='rounded-lg mt-2 p-2 focus:border-blue-500
                      focus:outline-none text-black text-bold' type="text"
                      value={mail} onChange={handleChangeMail}
                      />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-3'>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Mot de passe</label>
                        <input
                            name='password'
                            id='password'
                            type="password"
                            className="p-2 rounded-lg mt-2 focus:border-blue-500
                             focus:outline-none text-black text-bold"
                             value={password} onChange={handlePasswordChange}
                        />
                    </div>
                    <div className='flex flex-col py-2 text-white mb-0'>
                        <label className='text-white'>Confirmation Mot de passe</label>
                        <input
                            name='confirmPwd'
                            id='confirmPwd'
                            type="password"
                            className="p-2 rounded-lg mt-2 focus:border-blue-500
                             focus:outline-none text-black text-bold"
                             value={confirmPwd} onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>
                <p className='text-[#FF0000]'>{message}</p>
                <div className='flex justify-between text-white py-2'>
                    <p className='flex items-center'>Déjà inscrit(e) ?  <a href='/login' className='hover:text-[#0FE9F5]'>&nbsp; &nbsp;S’identifier</a></p>
                </div>
                <button className='w-full my-5 py-2 bg-[#0FE9F5] shadow-lg  hover:shadow-teal-500/50 text-black font-bold rounded-lg' type='submit'>Enregistrer</button>
                
            </form>
        </div>
    </div>
  )
}

export default Signup;