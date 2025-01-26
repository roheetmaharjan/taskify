"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutGrid,ListTodo,Settings,Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const pathname = usePathname();
  return (
    <div className='w-full md:w-40 p-3 flex flex-row md:flex-col justify-between md:h-screen'>
        <Link href="/">
            <h1 className='text-2xl font-bold text-white'>Taskify</h1>
        </Link>
        <button onClick={toggleMenu} className='text-white md:hidden'><Menu /></button>
        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute bg-[var(--primary-color)] w-full left-0 md:relative md:flex md:justify-between flex-col gap-5 md:h-[100%]`}>
            <nav className='flex flex-col mt-5 pt-3'>
                <Link href='/' className={`text-white flex gap-2 align-middle p-2 pr-3 rounded ${pathname === "/" ? 'bg-white text-blue-500' : ''}`}><LayoutGrid className='w-8'/> Dashboard</Link>
                <Link href='/tasks' className={`text-white flex gap-2 align-middle p-2 pr-3 rounded ${pathname.startsWith('/tasks') ? 'bg-white text-blue-500' : ''}`}><ListTodo className='w-8' /> Tasks</Link>
            </nav>
            <div className=''>
                <Link href="#" className='text-white flex gap-2 align-middle p-2'><Settings className='w-8' /> Settings</Link>
                <Link href="#" className='text-white flex gap-2 align-middle p-2'><Image src="/user.jpg" alt="Ronaldo" width={20} height={20} className='rounded-full w-8' /> John Doe</Link>
            </div>
        </div>
    </div>
  )
}

export default Header