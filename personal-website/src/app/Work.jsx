import React from 'react'
import Image from 'next/image'
import pokeIcon from './images/pokemon-logo.png'
import P1IMG1 from './images/Project1Img1.png'
import LottiePlayer from './LottiePlayer'
import Pokedex from './projects/Pokedex'
import Modal from './'
const Work = () => {
    const arrowUrl = 'https://lottie.host/0d7d54a7-3835-4841-bfcd-da12f82d986e/nVYJakcEYw.lottie'
  return (
    <div className='px-4 pt-48 font-Inter text-center font-[500]'>
        <span className='text-[48px] leading-tight mb-10 inline-block'>
            <p className='tracking-[-0.06em]'>My latest work</p>
        </span>

        {/* project 1 */}
        <Pokedex/>
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>

        <div className='bg-[#f5f5f5] rounded-3xl w-full h-[400px] mb-10 relative overflow-hidden'>
            <div className='h-40 p-4 flex flex-col gap-5'> 
                <div className='flex items-center justify-between overflow-hidden'>
                    <Image
                        className=' w-auto h-9'
                        src={pokeIcon}
                        alt="Picture of the author"
                    />
                    <div>
                        <LottiePlayer url={arrowUrl } height={"50px"} width={"90px"}/>
                    </div>
                </div>
                <div>
                    <p className='text-left opacity-80 '>Discover detailed stats, abilities, and evolutions of your favorite Pokémon with my Pokédex </p>
                </div>
            </div>
            <div className='absolute rotate-6 border-4 rounded-xl border-black'>
                <Image
                    className='h-45 w-auto rounded-lg '
                    src={P1IMG1}
                    alt="Picture of the author"
                />
            </div>
        </div>
    </div>
  )
}

export default Work