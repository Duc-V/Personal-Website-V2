import React from 'react'
import Pokedex from './projects/Pokedex'
import WeatherDashboard from './projects/WeatherDashboard'
const Work = () => {

  return (
    <div className='px-4 pt-48 font-Inter text-center font-[500]'>
        <span className='text-[48px] leading-tight mb-10 inline-block'>
            <p className='tracking-[-0.06em]'>My latest work</p>
        </span>

        {/* project 1 */}
        <Pokedex/>
        
        {/* project 2 */}
        <WeatherDashboard/>
        
    </div>
  )
}

export default Work