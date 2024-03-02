import React from 'react'

import bgImg from '../assets/pic3.jpg'

const IntroSection = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Book appointment with your fav doctors</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Finding Healthcare</h1>
                <p className='text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ullam repellendus aut off</p>
                <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={bgImg} alt="/" />
            </div>
        
        </div>
    </div>
  )
}

export default IntroSection