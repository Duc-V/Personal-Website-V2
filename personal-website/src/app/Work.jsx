import React from 'react'
import Image from 'next/image'
import pokeIcon from './images/pokemon-logo.png'
import pokeBall from './images/pokeball.png'
const Work = () => {
  return (
    <div className='px-4 pt-48 font-Inter text-center font-[500]'>
        <span className='text-[48px] leading-tight mb-10 inline-block'>
            <p className='tracking-[-0.06em]'>My latest work</p>
        </span>

        <div className='bg-[#3d7dca] rounded-3xl w-full h-[400px] mb-10'>
            <div className='h-40 p-4 flex flex-col gap-5'> 
                <div className='flex items-center'>
                    <Image
                        className=' w-auto h-12'
                        src={pokeIcon}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <p className='text-left opacity-80 '>Discover detailed stats, abilities, and evolutions of your favorite Pokémon with my Pokédex </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work