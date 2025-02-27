import React, { useEffect } from 'react';
import LottiePlayer from '../LottiePlayer';
import icon from '../images/project2/sunny-cloud.png'
import Image from 'next/image'
import FeatureCard from './FeatureCard'
import img1 from '../images/project2/img1.png'
import img2 from '../images/project2/img2.png'
import img3 from '../images/project2/img3.png'
const WeatherDashboardModal = ({isOpen, onClose, children}) => {
    // Disable background scroll when modal is open
    useEffect(() => {
        if (isOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = ''; // Reset to default
        }
        // Cleanup on unmount or when isOpen changes
        return () => {
        document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const closeMenuUrl = 'https://framerusercontent.com/assets/27esuiguioHwFr2C254FDlc7mQ.lottie';
  return (
    
    <div className='fixed bg-white top-0 left-0 w-full min-h-screen z-10 font-Inter'>
        {/* nav */}
        <nav className="md:hidden w-full z-30 p-4">
            <div className='bg-black w-full rounded-3xl flex justify-end h-11 px-3 backdrop-blur-lg'>
                <div className="flex items-center space-x-2 " onClick={(e) => { e.stopPropagation(); onClose(); }}>
                    <LottiePlayer url={closeMenuUrl} height="30px" width="30px" />
                </div>
            </div>
        </nav>

        {/* scrollable */}
        <div className='w-full max-h-[90vh] overflow-y-auto'>
            <div className='mx-4 pt-10 px-4 pb-20 rounded-2xl bg-[#f5f5f5]'>
            <div className='mb-10'>
                <Image
                    className='h-10 w-auto bg-blue-300 rounded-3xl'
                    src={icon}
                    alt="Picture of the author"
                />
            </div>
            <div className='flex justify-start font-bold text-3xl pb-9'>
                <h1>WEATHER DASHBOARD</h1>
            </div>

            <div className='text-start flex flex-col mb-10 gap-4 opacity-70'>
                <p>The Weather Dashboard is a  web 
                    application delivering precise, real-time, 
                    and forecasted weather information for users,
                     ideal for travelers, enthusiasts, 
                    and residents. With a sleek dark-themed interface, 
                    it provides current conditions—temperature, humidity,
                     wind speed, direction, pressure, visibility, sunrise, 
                     and sunset—plus hourly and daily forecasts.
                </p>
            </div>
            <div className='flex justify-start gap-2 flex-wrap text-md mb-20'>
                <FeatureCard feature={'Javascript'}/>
                <FeatureCard feature={'HTML'}/>
                <FeatureCard feature={'Tailwindcss'}/>
                <FeatureCard feature={'React'}/>
                <FeatureCard feature={'Open source API'}/>
            </div>

            <div className='flex flex-col gap-2'>
                <Image
                    className='rounded-xl'
                    alt="Picture of the author"
                    src={img3}
                />
                <Image
                    className='rounded-xl'
                    alt="Picture of the author"
                    src={img1}
                />
                <Image
                    className='rounded-xl'
                    alt="Picture of the author"
                    src={img2}
                />
            </div>
        </div>
        </div>
    </div>
  )
}

export default WeatherDashboardModal