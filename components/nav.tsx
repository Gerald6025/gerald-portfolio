"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className='flex justify-between items-center px-4 md:px-10 h-20'>
        <div>
          <Link href='/'><Image src='/logo12.png' alt='Logo' width={290} height={200} /></Link>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu} aria-label='Toggle menu' className='focus:outline-none'>
            <svg className='w-8 h-8 text-black' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        <div className={`flex-col md:flex-row md:flex gap-10 font-semibold text-lg w-full md:w-auto absolute md:static bg-white md:bg-transparent left-0 md:left-auto top-20 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          <button onClick={() => scrollToSection('home')} className='text-black hover:text-[#016bdb] block px-4 py-2 text-left'>Home</button>
          <button onClick={() => scrollToSection('about')} className='text-black hover:text-[#016bdb] block px-4 py-2 text-left'>About</button>
          <button onClick={() => scrollToSection('projects')} className='text-black hover:text-[#016bdb] block px-4 py-2 text-left'>Projects</button>
          <button onClick={() => scrollToSection('skills')} className='text-black hover:text-[#016bdb] block px-4 py-2 text-left'>Skills</button>
          <button onClick={() => scrollToSection('contact')} className='text-black hover:text-[#016bdb] block px-4 py-2 text-left'>Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default nav
