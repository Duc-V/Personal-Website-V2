'use client'
import React from 'react'
import dynamic from 'next/dynamic';
import closeMenu from './animations/close-menu.json';
import openMenu from './animations/open-menu.json';
import Image from 'next/image'
import navIcon from './images/Duc.png'
const LottiePlayer = dynamic(() => import('./LottiePlayer'), {
    loading: () => <div className="h-[30px] w-[30px] bg-gray-200 rounded" />,
    ssr: false
  })

const Navbar = () => {

  return (
    <nav className="fixed top-4 z-50 w-full">

    {/* navbar md screen  */}
    <div className="hidden md:block left-1/2 bg-white shadow-md rounded-full border w-fit h-14 mx-auto">
      <div className="px-6">
        <div className="flex items-center py-2">
          <div className="w-[100px] mr-6">
            <a href="#home" className="hover:text-gray-600 transition-all">
              <h1 className="text-lg font-semibold tracking-tight text-black">
                Duc Vu
              </h1>
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <a href="#story" className="flex items-center px-2 py-1 h-10 rounded-full transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-900 font-semibold text-sm">
              Story
            </a>
            <a href="#projects" className="flex items-center px-2 py-1 h-10 rounded-full transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-900 font-semibold text-sm">
              Projects
            </a>
            <a href="#experience" className="flex items-center px-2 py-1 h-10 rounded-full transition-all duration-300 ease-in-out text-gray-500 hover:text-gray-900 font-semibold text-sm">
              Experience
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* mobile navbar */}
    <div className="md:hidden absolute w-full px-4 ">
        <div className='bg-black w-full rounded-3xl flex justify-between h-11 px-3 backdrop-blur-lg'>
            <Image
                className='mx-2'
                src={navIcon}
                width={40}
                height={40}
                alt="Picture of the author"
            />
            <div className="flex items-center space-x-2">
                <span className='text-white text-xl'>Menu</span>
                <LottiePlayer src={openMenu} height="30px" width="30px" />
            </div>
        </div>
    </div>
  </nav>
  )
}

export default Navbar