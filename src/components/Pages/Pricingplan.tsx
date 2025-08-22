import { header } from '@/assests/About'
import { crumb } from '@/assests/Contact'
import React from 'react'

export default function Pricingplan() {
  return (
    <div className='absolute inset-0 z-10'>
      <img
        src={header.src}
        alt='Background Image'
        className='w-full h-auto object-cover rounded-lg'
        />
        <img
          src={crumb.src}
          alt='Background Image'
          className='w-full h-auto object-cover rounded-lg'
        />
          <div className='absolute inset-0 flex flex-col  items-center justify-center  space-y-2'>
        <h1 className='text-white text-4xl font-bold'>OUR PRICES</h1>
        <p className='text-white  font-bold text-lg'>Home /<span className='text-[#9cc623]'>PRICING</span></p>
      </div>
      </div>
  )
}
