import React, { useState } from 'react';
import { data } from '../../data/data.js';

const Comperatives = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-blue-600 font-bold text-4xl text-center'>
        Liste des cooperatives
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
             
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
             
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            >
            
            </button>
            
          </div>
        </div>


      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img src={item.image}alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-blue-500 text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comperatives;
