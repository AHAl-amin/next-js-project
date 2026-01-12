

import Button from '@/app/components/Button'
import Image from 'next/image'
import img from '@/public/images/mission.png'
import React from 'react'

export default function Mission() {
  return (
    <div className='py-4'>
      <h1 className='text-3xl font-bold'>This is mission page...............</h1>

    <p> lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <Image placeholder='blur' src={img} alt='image'></Image>

   <Button/>
    </div>
  )
}
