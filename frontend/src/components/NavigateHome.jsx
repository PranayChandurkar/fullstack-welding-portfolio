import React from 'react'
import { Link } from 'react-router-dom'

const NavigateHome = ({name}) => {
  return (
    <div className='w-full px-6 md:px-20 lg:px-24 pt-32 pb-6 bg-zinc-950'>
        <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <Link className='text-zinc-500 hover:text-blue-500 transition-colors' to="/">
                Home
            </Link>
            <span className="text-zinc-600">/</span>
            <span className='text-zinc-100'>{name}</span>
        </div>
    </div>
  )
}

export default NavigateHome