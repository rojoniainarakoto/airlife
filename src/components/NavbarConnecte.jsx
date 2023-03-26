import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>

            <img src={logo} alt="logo" className='w-[150px] h-[80px]'/>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:underline decoration-dashed transition-5'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed cursor:pointer'>
                    <Link to="/exchange">Réservation</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed'>
                    <Link to="/transport">Transport</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed'>
                    <Link to="/contact">Nous contacter</Link>
                </li>
                <li className='bg-[#9DFDFF] w-[130px] h-[40px] rounded-md font-semibold mx-auto py-2 mt-2 text-black text-center hover:shadow-teal-500/50'>
                    <Link to="/">Se déconnecter</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 '}>
                <img src={logo} alt="logo" className='w-[150px] h-[70px]'/>
                <ul className='uppercase p-4'>
                <li className='p-4 hover:underline decoration-dashed transition-5'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed cursor:pointer'>
                    <Link to="/exchange">Réservation</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed'>
                    <Link to="/transport">Transport</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed'>
                    <Link to="/contact">Nous contacter</Link>
                </li>
                <li className='p-4 hover:underline decoration-dashed'>
                    <Link to="/">Se déconnecter</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar