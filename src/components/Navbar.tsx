import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute flex w-full px-20 py-10 justify-between text-white gap-4 z-50'>
      <h1 className='logo text-3xl'>Picstories</h1>
      <ul className='md:flex gap-6 hidden md:text-sm lg:text-2xl text-white/75 bg-black/20 justify-center items-center px-5 py-2 rounded-full'>
        <li className='text-white'>Discover</li>
        <li className='hover:text-white transition-all dutation-300 cursor-default'>Stories</li>
        <li className='hover:text-white transition-all dutation-300 cursor-default'>Contest</li>
        <li className='hover:text-white transition-all dutation-300 cursor-default'>Log in</li>
        <li className='hover:text-white transition-all dutation-300 cursor-default'>Register</li>
      </ul>
    </div>
  )
}

export default Navbar