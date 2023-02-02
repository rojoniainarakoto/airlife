import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {AiFillPhone, AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='antialised'>
        <div className='flex w-full min-h-screen justify-center items-center'>
          <div className='flex flex-col space-y-6 bg-cyan-700 w-full max-w-4xl p8 rounded-xl shadow-lg text-white'>
            <div className='flex flex-col justify-between'>
              <div>
                <h1 className='font-bold text-4xl tracking-wide'>Mes contacter</h1>
                <p className='pt-2 text-cyan-100'>
                  Vous pouvez me joindre soit en m'appellant ou m'envoyer des e-mail 
                  ou de me contacter vie le réseau socieaux
                </p>
              </div>
              <div>
                <div>
                  <AiOutlinePhone size={20} refX/>
                </div>
              </div>
              <div></div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact