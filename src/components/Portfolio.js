import React from 'react'
import PortfolioItem from './PortfolioItem'
import Work from './Work'

const Portfolio = () => {
  return (
    <>
      <div className='container relative mx-auto my-8' id='portfolio'>
        <h1 className='skills_title ml-4'>Portfolio</h1>
        <div className='flex flex-col'>
          <Work
            title='Website House Of Light'
            imgSrc='/images/HOL.jpg'
            website='https://hol.lv/en'
            github='https://github.com/Brenzee/HOLWebsite'
          >
            <PortfolioItem>React</PortfolioItem>
            <PortfolioItem>React Hooks</PortfolioItem>
            <PortfolioItem>React Router</PortfolioItem>
            <PortfolioItem>Framer Motion</PortfolioItem>
            <PortfolioItem>React Snap</PortfolioItem>
            <PortfolioItem>React Helmet</PortfolioItem>
            <PortfolioItem>Server Hosting</PortfolioItem>
          </Work>

          <Work
            title='Netflix Clone'
            imgSrc='/images/Netflix.jpg'
            website='https://netflix-clone-c3496.web.app/'
            github='https://github.com/Brenzee/react-netflix-clone'
          >
            <PortfolioItem>React</PortfolioItem>
            <PortfolioItem>Axios</PortfolioItem>
            <PortfolioItem>React-youtube</PortfolioItem>
            <PortfolioItem>movie-Trailer</PortfolioItem>
            <PortfolioItem>Firebase</PortfolioItem>
          </Work>
          <Work
            title='Amazon Clone'
            imgSrc='/images/Amazon.jpg'
            website='https://challenge-93fb6.web.app/'
            github='https://github.com/Brenzee/amazon-clone-react'
          >
            <PortfolioItem>React</PortfolioItem>
            <PortfolioItem>React Hooks</PortfolioItem>
            <PortfolioItem>React Context API</PortfolioItem>
            <PortfolioItem>Firebase</PortfolioItem>
            <PortfolioItem>Stripe Checkout</PortfolioItem>
          </Work>
        </div>
      </div>
      <svg
        style={{ transform: 'rotate(180deg)' }}
        width='100%'
        height='150px'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'
      >
        <path
          fill='#736ced'
          fillOpacity='1'
          d='M0,192L48,192C96,192,192,192,288,213.3C384,235,480,277,576,288C672,299,768,277,864,240C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
    </>
  )
}

export default Portfolio
