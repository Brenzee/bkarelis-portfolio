import React from 'react'

const Footer = () => {
  return (
    <div style={{ height: '250px' }} className='bg-primary'>
      <div className='container mx-auto text-white flex flex-col items-center justify-around min-h-full'>
        <h1 className='text-3xl text-center'>Get in touch with me</h1>
        <div>
          <a
            className='btn bg-green-400 text-black text-xl font-medium hover:bg-white hover:text-black'
            href='mailto:karelisbrendons@gmail.com'
          >
            Contact Me
          </a>
        </div>
        <div className=''>
          <p>Brendons Karelis, 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
