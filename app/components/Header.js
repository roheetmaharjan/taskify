"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutGrid,ListTodo,Settings,Menu } from 'lucide-react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
  return (
    <div className='w-full md:w-40 p-3 flex flex-row md:flex-col justify-between md:h-screen'>
        <Link href="/">
            <h1 className='text-2xl font-bold text-white'>Taskify</h1>
        </Link>
        <button onClick={toggleMenu} className='text-white md:hidden'><Menu /></button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute bg-[var(--primary-color)] w-full top-[55px] left-0 md:relative md:flex flex-col gap-5 md:h-screen`}>
            <nav className='flex flex-col mt-5'>
                <Link href='#' className=' text-white flex gap-2 align-middle p-2'><LayoutGrid className='w-8'/> Dashboard</Link>
                <Link href='#' className=' text-white flex gap-2 align-middle p-2'><ListTodo className='w-8' /> Tasks</Link>
            </nav>
            <div className='mt-auto'>
                <Link href="#" className='text-white flex gap-2 align-middle p-2'><Settings className='w-8' /> Settings</Link>
                <Link href="#" className='text-white flex gap-2 align-middle p-2'><Image src="/user.jpg" alt="Ronaldo" width={20} height={20} className='rounded-full w-8' /> John Doe</Link>
            </div>
        </div>
    </div>
  )
}

export default Header