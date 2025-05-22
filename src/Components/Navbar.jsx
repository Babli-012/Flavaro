import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav className='w-[100vw] bg-slate-100  flex flex-wrap justify-between items-center py-4 px-6 '>
        <div className='' >
            <span className='text-lg font-normal'>{new Date().toUTCString().slice(0,16)}</span>
            <h2 className='font-bold text-xl'>Flavaro Foods</h2>
        </div>
        <div className='bg-white border border-gray-900  p-1 '>
            <input className='text-sm w-full focus:outline-none ' type="search" name="search" placeholder='serach here...' />
        </div>
    </nav>
  )
}

export default Navbar
