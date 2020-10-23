import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div
        className='flex flex-wrap justify-between items-center py-8'
        style={{ minHeight: '500px' }}
      >
        <div className='w-full px-6 md:w-7/12 md:px-0'>
          <h1 className='text-gray-900 text-5xl'>Hello</h1>
          <h2 className='text-gray-700 text-base'>
            My name is Brendons Karelis and I am
            <span className='font-semibold'> Full-stack Developer</span>
          </h2>
          <button className='btn bg-primary text-white mt-6 hover:bg-secondary hover:text-gray-900'>
            To the Portfolio
          </button>
        </div>
        <div className='w-full md:w-5/12'>
          <img
            className='p-20 pt-10 md:p-0'
            src='/images/coding.svg'
            alt='Brendons Karelis programmer full-stack developer'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
