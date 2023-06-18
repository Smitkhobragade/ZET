// 'use client'
import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import zetlogo from '../images/zetlogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from 'react-reveal';

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <Image src={zetlogo} className='h-10 -ml-5'/>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link href="/">Home</Link></li>
        <li className='p-4'><Link href="/about">About us</Link></li>
        <li className='p-4'>Partner with us</li>
        <li className='p-4'>Blog</li>
        <li className='p-2'><button className='bg-[#2075f0] rounded p-2'>Download ZET</button></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />  }
      </div>

      <div className={(nav) ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#110011] border-r-gray-900 ease-in-out duration-500 z-50 ' : 'fixed left-[-100%] z-50 '}>
        <ul className='pt-12 uppercase p-4'>
          <li className='p-4 border-b border-gray-600'><Link href="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600'><Link href="/about">About us</Link></li>
          <li className='p-4 border-b border-gray-600'>Partner With us</li>
          <li className='p-4 border-b border-gray-600'>Blog</li>
          <li className='p-2'><button className='bg-[#2075f0] rounded p-2'>Download ZET</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;