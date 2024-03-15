import React from 'react';
import Dementia from '../assets/aboutImages/pic4.jpg';

const Hero = () => {
  return (
    <div className='bg-purple-300 py-4 px-4'>
      <div className='max-w-[1160px] mx-auto grid md:grid-cols-2 gap-10 items-center justify-center text-center'>
        <img className='w-full md:w-[850px] h-auto mx-auto my-1' src={Dementia} alt='Laptop' />
        <div className='text-white'>
          <h1 className='md:text-5xl sm:text-2xl text-xl font-bold py-2 mb-2'>OUR VISION</h1>
          <p className="text-xl mb-4 text-purple-800">Welcome to our Dementia Awareness Platform!</p>
          <p className="text-purple-700 text-3xl font-semibold mb-4">Our vision is to utilize cutting-edge technology and compassionate care to predict and support those affected by dementia.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
