import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const PortfolioItem = ({ children }) => {
  return (
    <div className='w-full flex items-center font-medium'>
      <IoMdArrowDropright fontSize='24px' className='text-primary' />
      {children}
    </div>
  )
}

export default PortfolioItem
