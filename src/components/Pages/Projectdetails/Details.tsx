import { header, Image } from '@/assests/About'
import React from 'react'

export default function Details() {
  return (
    <div className='relative inset-0 z-10'>
      <img
        src={header.src}
        alt='Background Image'
        className='w-full h-auto object-cover rounded-lg'
        />
      <img
        src={Image.src}
        alt='Background Image'
        className='w-full h-auto object-cover rounded-lg'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2'>
        <h1 className='text-white text-4xl font-bold'>OUR PROJECT</h1>
        <p className='text-white  font-semibold text-lg'>Home / PROJECT DETAILS</p>
      </div>
    </div>
  )
}
