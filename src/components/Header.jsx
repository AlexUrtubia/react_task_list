import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-7 h-12 self-start w-full bg-primary'>
      <div className="self-center">
        <p className='text-xl font-medium'>React Lazy Loading App</p>
      </div>
      <div className="self-center font-medium space-x-5">
        <Link to={'/'}>
          <span>Home</span>
        </Link>
        <Link to={'/about'}>
          <span>About Us</span>
        </Link>
        <Link to={'/contact'}>
          <span>Contact</span>
        </Link>
      </div>
    </div>
  )
}
