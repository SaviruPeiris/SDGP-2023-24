import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { SupportIcon } from '@heroicons/react/solid';

import supportImg from '../assets/aboutImages/pic2.jpg';

const Support = () => {
  return (
    <div name='support' className='w-full mt-20'>
      <div className='w-full h-[700px] bg-gray-800/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-10'>
          <h2 className='text-5xl font-bold py-5 text-center'>SUPPORT</h2>
          <p className='py-4 text-3xl text-purple-200'>
            We are dedicated to providing compassionate support for individuals and families affected by dementia. Our experienced team of professionals is here to assist you.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-purple-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl text-purple-800 my-6'>Dementia Care Support</h3>
              <p className=' text-purple-500 text-xl'>
                Our dedicated support team is here to assist with technical and caregiving aspects of dementia. Get in touch for personalized assistance and resources.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              {/* Replace 'Contact Us' with anchor tag */}
              <a href="/contact" className='flex items-center text-indigo-600 hover:underline'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></a>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <PhoneIcon className='w-16 p-4 bg-purple-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl  text-purple-800 my-6'>Helpline</h3>
              <p className='text-purple-500 text-xl'>
                Our helpline is available to provide guidance and support for those dealing with dementia-related challenges. Call us anytime for assistance and information.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              {/* Replace 'Contact Us' with anchor tag */}
              <a href="/contact" className='flex items-center text-indigo-600 hover:underline'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></a>
            </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <SupportIcon className='w-16 p-4 bg-purple-400 text-white rounded-lg mt-[-4rem]' />
              <h3 className='font-bold text-2xl  text-purple-800 my-6'>Public Relations</h3>
              <p className='text-purple-500 text-xl'>
                For media inquiries and partnerships focused on raising awareness about dementia, reach out to our media relations team. Together, let's make a difference.
              </p>
            </div>
            <div className='bg-slate-100 pl-8 py-4'>
              {/* Replace 'Contact Us' with anchor tag */}
              <a href="/contact" className='flex items-center text-indigo-600 hover:underline'>Contact Us <ArrowSmRightIcon className='w-5 ml-2' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
