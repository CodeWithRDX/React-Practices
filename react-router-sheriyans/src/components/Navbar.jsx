import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-black flex justify-between px-6 py-8 items-center text-white text-semibold'>
        <h2>MentorConnect</h2>
        <div className='bg-black flex gap-4 items-center'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar