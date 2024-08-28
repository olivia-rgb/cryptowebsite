import React from 'react'
import Navbar from './UI/Navbar'
import Hero from './UI/Hero'


function Header() {
  return (
    <div className='relative w-full h-screen'>
    <Navbar />
    <Hero />
    </div>
  )
}

export default Header