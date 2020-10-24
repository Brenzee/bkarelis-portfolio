import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { GoThreeBars } from 'react-icons/go'
import { CgClose } from 'react-icons/cg'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='flex bg-white text-black py-2 px-4 shadow-2xl z-10'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div className='flex justify-between items-center w-full md:w-auto'>
          <h1 className='text-3xl hover:text-primary'>
            <Link to=''>BrendonsK.</Link>
          </h1>
          <div className='md:hidden cursor-pointer text-3xl'>
            {open ? (
              <CgClose onClick={() => setOpen(false)} />
            ) : (
              <GoThreeBars onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
        <ul
          className={`font-medium md:flex md:flex-row md:items-center w-auto ${
            open ? 'flex-col flex' : 'hidden'
          }`}
        >
          <li className='md:pl-4 mt-4 md:mt-0'>
            <Link
              to='skills'
              onClick={() => setOpen(false)}
              spy={true}
              offset={-300}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className='md:pl-4 mt-4 md:mt-0'>
            <Link
              to='portfolio'
              onClick={() => setOpen(false)}
              spy={true}
              offset={-300}
              smooth={true}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className='md:pl-4 mt-4 md:mt-0'>
            <a
              href='https://github.com/Brenzee'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillGithub fontSize='36px' />
            </a>
          </li>
          <li className='md:pl-4 mt-4 md:mt-0'>
            <a
              href='https://www.linkedin.com/in/bkarelis/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <AiFillLinkedin fontSize='36px' />
            </a>
          </li>
          <li className='md:pl-4 my-6 md:my-0'>
            <a
              className='btn bg-green-400 text-gray-800 hover:bg-primary hover:text-gray-900'
              href='mailto:karelisbrendons@gmail.com'
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
