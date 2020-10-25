import React from 'react'

const Work = ({ children, title, imgSrc, website, github }) => {
  return (
    <div className='portfolio_card mb-10 lg:flex-row mx-10 h-full '>
      <img
        style={{ maxHeight: '320px' }}
        className='object-cover h-full w-full lg:w-1/2'
        src={imgSrc}
        alt={title}
      />

      <div className='flex flex-col w-full lg:min-h-full my-6 ml-0 lg:w-1/2 lg:my-0 lg:ml-4'>
        <h3 className='portfolio_card_title lg:mt-6 lg:text-2xl'>{title}</h3>
        <div className='flex flex-col justify-center mx-6 my-auto lg:flex-row  '>
          <div className='w-full my-4'>{children}</div>
          <div className='flex justify-around items-center mt-2  text-white font-semibold w-full lg:mt-0'>
            <a
              className='btn bg-primary hover:bg-secondary'
              href={github}
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
            <a
              className='btn bg-primary hover:bg-secondary'
              href={website}
              target='_blank'
              rel='noopener noreferrer'
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
