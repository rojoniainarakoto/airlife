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

            <img src={logo} alt="logo" className='w-[150px] h-[70px]'/>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#c63b3b] transition-5'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b] cursor:pointer'>
                    <Link to="/exchange">Exchange</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/transport">Transport</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/tourisme">Tourisme</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/contact">Nous contacter</Link>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}

            </div>
            <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 '}>
                <h1 className='w-full text-3xl font-bold text-[#c63b3b] m-4'>AirLife</h1>
                <ul className='uppercase p-4'>
                <li className='p-4 hover:text-[#c63b3b] transition-5'>
                    <Link to="/">Accueil</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b] cursor:pointer'>
                    <Link to="/exchange">Exchange</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/transport">Transport</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/tourisme">Tourisme</Link>
                </li>
                <li className='p-4 hover:text-[#c63b3b]'>
                    <Link to="/contact">Nous contacter</Link>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar