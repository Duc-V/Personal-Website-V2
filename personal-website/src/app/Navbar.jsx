'use client'
import React from 'react'
import Image from 'next/image'
import navIcon from './images/Duc.png'
import menuIcon from './images/Menu.png'
import {useState} from 'react'
import LottiePlayer from './LottiePlayer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    const closeMenuUrl = 'https://framerusercontent.com/assets/27esuiguioHwFr2C254FDlc7mQ.lottie';
    const openMenuUrl = 'https://framerusercontent.com/assets/tVMtyx0ZjHggzQK6XOpK8FXtRt8.lottie';


  return (
    <nav className="fixed z-10 w-full animate-slideDown">
    {/* navbar md screen  */}
    <div className="hidden md:block left-1/2 bg-white shadow-md rounded-full border w-fit h-14 mx-auto font-Inter">
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
    <div className="md:hidden absolute w-full px-4 z-30">
        <div className='bg-black w-full rounded-3xl flex justify-between h-11 px-3'>
            <Image
                className='mx-2'
                src={navIcon}
                width={40}
                height={40}
                alt="Picture of the author"
            />
            <div className="flex items-center space-x-2 " onClick={toggleMenu}>
                <Image
                    src={menuIcon}
                    height={35}
                    alt="Picture of the author"
                />
                <LottiePlayer isOpen={isOpen} url={isOpen ? openMenuUrl : closeMenuUrl } height="30px" width="30px" />
            </div>
        </div>
    </div>

    {/* Drop down menu */}
    <div className={`md:hidden absolute w-full px-4 transition-all duration-300 ${isOpen ? "top-0 opacity-0" : "top-14 opacity-100"}`}>
      <div className={`bg-black text-white rounded-3xl text-xl transition-all duration-300 ${isOpen ? "h-11 opacity-0" : "h-auto opacity-100"}`}>
        <div className='h-11 flex items-center justify-center'>What's up?</div>
        <div className='h-11 flex items-center justify-center'>Work</div>
        <div className='h-11 flex items-center justify-center'>Story</div>
        <div className='h-11 flex items-center justify-center'>Let's talk</div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar