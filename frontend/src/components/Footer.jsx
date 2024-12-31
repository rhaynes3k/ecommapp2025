import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>Where all the playas shop!</p>
        </div>

        <div>
          <p className='text-xl font-medium my-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH, PIMP'N</p>
          <ul className='flex flex-col gap-1 text-gray'>
            Phone: <li>+314-777-9311</li>
            Email: <li>bossplaya@rozelles.com</li>
          </ul>
        </div>
      </div>
        <div>
          <p className='py-5 text-sm text-center'>Copyright 2025@ rozelles.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
