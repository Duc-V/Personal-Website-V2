'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import LottiePlayer from '../LottiePlayer'
import P2IMG1 from '../images/project2/DisplayIMG.png'
import WeatherDashboardModal from './WeatherDashboardModal'
const WeatherDashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const arrowUrl = 'https://lottie.host/e9fa879b-053e-4ce1-859c-5368a15466b2/veDv2GcAG5.lottie'
  return (
    <div className='bg-[#f5f5f5] rounded-3xl w-full h-[400px] mb-10 relative overflow-hidden' onClick={() => setIsOpen(true)}>
        <div className='h-40 p-4 flex flex-col gap-5'> 
            <div className='flex items-center justify-between overflow-hidden'>
                <h1 className='font-bold text-xl text-white bg-black px-2 py-1 rounded-xl'>Weather Dashboard </h1>
                <div>
                    <LottiePlayer url={arrowUrl } height="30px" width={"40px"}/>
                </div>
            </div>
            <div>
                <p className='text-left opacity-80 '>Weather Dashboard delivers real-time weather data and forecasts with precision</p>
            </div>
        </div>
        <div className=' absolute rotate-6 border-4 rounded-xl border-black'>
            <Image
                className='h-auto w-full rounded-lg '
                src={P2IMG1}
                alt="Picture of the author"
            />
        </div>
        
        <WeatherDashboardModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>

    </div>
  )
}

export default WeatherDashboard