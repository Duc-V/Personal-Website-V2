import React from 'react'
import LottiePlayer from './LottiePlayer';

const Homepage = () => {
  const signatureUrl = 'https://framerusercontent.com/assets/xtKTjwMJPKM7403TBmYhSKd7HG8.lottie'
  return (   
    <div>
        <div className="h-[70vh] w-full px-4 flex flex-col justify-end font-Inter z-auto">
            <div className='w-5/6 px-3 text-lg font-medium opacity-70'>
              <p>
                Howdy! Meet your frontend developer,
                crafting sleek and interactive web experiences. 
              </p>
            </div>

            <div className="w-full text-[130px] leading-none font-[500]">
                <p className='h-[115px] overflow-hidden flex items-center '>Duc</p>
                <p className='h-[115px] overflow-hidden flex items-center px-2'>Vu</p>
            </div>

            <div className='h-[90px] overflow-hidden flex items-center'>
              <LottiePlayer url={signatureUrl} width={'100%'} height={'100%'} />
            </div>
        </div>
    </div>
  )
}

export default Homepage