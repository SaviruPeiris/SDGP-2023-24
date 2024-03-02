import React from 'react';
import Dementia from '../assets/aboutImages/pic4.jpg';

const Hero = () => {
  return (
    <div className='w-full bg-purple-300 py-4 px-4'>
      <div className='max-w-[1160px] mx-auto grid md:grid-cols-2 gap-10'>
        <img className='w-full md:w-[850px] mx-auto my-1' src={Dementia} alt='Laptop' />
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2 mb-6 text-white'>OUR VISION</h1>
          <p className="text-[#4a236f] text-lg">
            Create a world where individuals and families affected by dementia find solace, support, and empowerment. 
            We strive to be a beacon of understanding, providing innovative solutions that enhance the quality of life for 
            those navigating the challenges of dementia. Through empathy, education, and technology, we envision a future where 
            the journey with dementia is met with compassion, dignity, and a sense of community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
