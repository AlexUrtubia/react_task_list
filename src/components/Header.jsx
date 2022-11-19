import { Link } from 'react-router-dom'
import React from 'react'

export default function Header() {
  return (
    <div className='flex justify-between px-7 h-12 self-start w-full bg-primary'>
      <div className="self-center">
        <p className='text-xl font-bold'>React Lazy Loading App</p>
      </div>
      <div className="self-center font-medium space-x-5">
        <Link to={'/'}>
          <span>Home</span>
        </Link>
        <Link to={'/tareas'}>
          <span>Tareas</span>
        </Link>
        <Link to={'/about'}>
          <span>About</span>
        </Link>
      </div>
    </div>
  )
}
