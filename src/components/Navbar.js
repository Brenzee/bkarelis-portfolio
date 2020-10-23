import React, { useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { CgClose } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='flex bg-primary text-white py-2 px-4 shadow-2xl z-10'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div className='flex justify-between items-center w-full md:w-auto'>
          <h1 className='text-3xl hover:text-secondary'>
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
          className={`font-medium md:flex md:items-center ${
            open ? 'block' : 'hidden'
          }`}
        >
          <li className='md:pl-4 mt-2 md:mt-0'>
            <Link to='/'>Portfolio</Link>
          </li>
          <li className='md:pl-4 mt-2 md:mt-0'>
            <Link to='/'>Skills</Link>
          </li>
          <li className='md:pl-4 mt-2 md:mt-0'>
            <Link to='/'>
              <AiFillGithub fontSize='36px' />
            </Link>
          </li>
          <li className='md:pl-4 mt-2 md:mt-0'>
            <Link to='/'>
              <AiFillLinkedin fontSize='36px' />
            </Link>
          </li>
          <li className='md:pl-4 my-6 md:my-0'>
            <Link
              className='btn bg-background text-gray-800 hover:bg-white hover:text-gray-900'
              to='/'
            >
              Contact me
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
