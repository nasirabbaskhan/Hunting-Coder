import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <nav className='bg-slate-600'>
    <ul className='flex space-x-4 py-2 text-white'>
      <li className='text-1xl mx-4 cursor-pointer'>Hunting  Coder</li>
      <Link href={"/"}><li className='cursor-pointer'>Home</li></Link>
      <Link href={"/About"}><li className='cursor-pointer'>About</li></Link>
      <Link href={"/blog"}><li className='cursor-pointer'>Blog</li></Link>
    
      <Link href={"/contect"}><li className='cursor-pointer'>Contect Us</li></Link>
      
      
    </ul>
  </nav>
    
    </div>
  )
}
