import React from 'react';
import { background } from '../../../assets';
import Footer from '../../Footer';
import Navbar from '../../Navbar';

const Reserve = () => {
  return (
    <>
      <div div className="w-full h-screen bg-no-repeat bg-cover bg-opacity-30 text-white" style={{backgroundImage: `url(${background})`}}>
        <Navbar/>
      <div className="overflow-y-auto sm:p-0 pb-4 pr-1 pb-20 pl-4 ">
        <div className="flex justify-center items-end text-center min-h-screen sm:block">
          <div className="bg-gray-500 transition-opacity bg-opacity-75"></div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">​</span>
          <div className="inline-block text-left bg-gray-900 rounded-lg overflow-hidden align-bottom transition-all transform shadow-2xl sm:my-8 sm:align-middle sm:max-w-xl sm:w-full">
            <div className="items-center w-full mr-auto ml-auto relative max-w-7xl md:px-12 lg:px-24">
              <div className="grid grid-cols-1">
                <div className="mt-1 mr-auto mb-8 ml-auto bg-gray-900 max-w-lg">
                  <div className="flex flex-col items-center pt-1 pr-6 pb-6 pl-6">
                    <img
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                      className="flex-shrink-0 object-cover object-center btn- flex w-16 h-16 mr-auto -mb-8 ml-auto rounded-full shadow-xl"
                    />
                    <p className="mt-8 text-2xl font-semibold leading-none text-white tracking-tighter lg:text-3xl">
                      Jean Chris
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-center text-gray-200">
                        Je suis un transporteur depuis 15 ans. Je connais tous les coins de la ville.
                        Je maitrise trés bien mon travail.
                    </p>
                    <p>Tel +261 33 30 058 47</p>
                    <p>Veuillez validez la réservation pour le payement</p>
                    <div className="w-full mt-6">
                      <a
                        className="flex items-center justify-center w-full pt-4 pr-10 pb-4 pl-10 text-base font-medium text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-500 ease-in-out transform"
                      >
                        Validez
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Reserve;
