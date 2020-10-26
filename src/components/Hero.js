import React from 'react'
import HeroSVG from '../assets/HeroSVG'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='bg-primary'>
      <div className='container mx-auto '>
        <div
          className='flex flex-wrap justify-between items-center pt-8'
          style={{ minHeight: '500px' }}
        >
          <div className='w-full px-6 md:w-7/12 md:px-0'>
            <h1 className='text-white text-6xl'>Hello</h1>
            <h2 className='text-gray-200 text-base'>
              My name is Brendons Karelis and I am
              <span className='font-semibold'> Full-stack Developer</span>
            </h2>
            <div className=' mt-6'>
              <Link
                to='portfolio'
                spy={true}
                smooth={true}
                duration={500}
                className='btn bg-green-400 text-black hover:bg-white hover:text-gray-900 font-medium'
              >
                To the Portfolio
              </Link>
            </div>
          </div>
          <div className='w-full md:w-5/12'>
            <HeroSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
