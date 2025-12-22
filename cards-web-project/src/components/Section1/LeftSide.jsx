import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'
const LeftSide = () => {
  return (
    <div className='flex justify-between flex-col w-1/3'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftSide