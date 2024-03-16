import React from 'react'
import bgImg from '../assets/pic3.jpg'

const IntroSection = () => {
  return (
    <div name='home' className='w-full h-900 bg-purple-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl text-purple-800'>Book appointment with your fav doctors</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold text-purple-900'>Finding Healthcare</h1>
                <p className='text-2xl text-purple-700'>Find the right healthcare professional for your needs, anytime, anywhere.</p>
                <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-pink-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Book Now
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-pink-800 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        
        </div>
        
    </div>

    
  )
}

export default IntroSection