import React from 'react'
import Image from 'next/image'
import image from './images/about-me.png'
import LottiePlayer from './LottiePlayer'
const About = () => {

  const url = 'https://lottie.host/2b0769a5-2f0c-4c79-aa97-3ed2f9c35a05/cefLwMMCUO.lottie'
  return (
    <div className='mx-4 pt-32 font-Inter text-center font-[500]'>

        <span className='text-[40px] leading-tight mb-10 inline-block'>
            <p className='tracking-[-0.06em] text-start leading-none'>Behind the Scenes: My Story & Mission</p>
        </span>

        <div className='px-4  bg-[#f5f5f5] rounded-3xl mb-4'>
            <div>
              <Image
                className='w-full h-auto rotate-3'
                src = {image}
                alt = "my graduation picture"
              />
            </div>

            <div className='text-start p-4 opacity-70 '>
              <p className=''>I’m Duc, a code crushing tinkerer 
                with a serious maker streak. I’m usually knee-deep 
                in slick coding projects, but catch me off-hours vibing
                with my 3D printer or tearing it up with my RC builds
                </p>
                <br />
                <p>
                I live for that sweet spot where tech meets hands-on chaos—making stuff that hums,
                  whirs, or just looks cool. 
                This portfolio’s my playground, so stick around and vibe with it!
                </p>
            </div>
        </div>

        <div className='px-4 bg-[#f5f5f5] rounded-3xl flex flex-col justify-center'>
            <div className='mt-4'>
              <LottiePlayer
                url = {url}
                loop = {true}
              />
            </div>

            <div className='text-start p-4 opacity-70'>
              <p className=''>My mission? To create dope stuff that bridges code and chaos. 
                I’m all about crafting clean, clever solutions with my coding chops, 
                then flipping the script to build real-world magic with my 3D printer 
                and RC projects. 
                </p>
                <br />
                <p>
                This space is where I push limits, solve problems, and 
                share the results, inspiring anyone who’s down to tinker, hack, or just enjoy the ride.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About