import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import PortfolioItem from './PortfolioItem'

const Portfolio = () => {
  return (
    <div className='container mx-auto my-8'>
      <h1 className='text-4xl font-medium mb-8 ml-4'>Portfolio</h1>
      <div className='flex flex-wrap '>
        <div className='flex flex-col lg:flex-row mx-10 lg:items-center border-2 border-primary rounded-xl overflow-hidden shadow-2xl'>
          <img
            className='w-full min-h-full lg:w-5/12 object-cover object-left'
            src='/images/HOL.png'
            alt=''
          />
          <div className='w-full  my-6 ml-0 lg:w-7/12 lg:my-0 lg:ml-4'>
            <h3 className='text-xl font-medium text-center my-4 lg:my-0 lg:pb-4 lg:text-2xl'>
              <Link>Website House Of Light</Link>
            </h3>
            <div className='flex flex-col lg:flex-row mx-6 '>
              <div className='w-full'>
                <PortfolioItem>React</PortfolioItem>
                <PortfolioItem>React Router</PortfolioItem>
                <PortfolioItem>Framer Motion</PortfolioItem>
                <PortfolioItem>React Snap</PortfolioItem>
                <PortfolioItem>React Helmet</PortfolioItem>
                <PortfolioItem>Server Hosting</PortfolioItem>
              </div>
              <div className='flex justify-around items-center my-4 text-white font-semibold w-full'>
                <Link className='btn bg-primary'>GitHub</Link>
                <Link className='btn bg-primary'>Website</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
