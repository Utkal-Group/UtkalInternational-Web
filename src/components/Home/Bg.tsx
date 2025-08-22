import { vdo } from '@/assests/Home';
import React from 'react';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';

export default function Bg() {
  return (
    <div
      className="relative h-screen bg-cover bg-center mt-11"
      style={{ backgroundImage: `url(${vdo.src})` }} 
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <button className="flex items-center space-x-4 bg-[rgba(228,56,3,0.89)] rounded-lg text-white py-4 px-8 text-2xl font-bold hover:bg-[#8bb11d] transition">
          <SmartDisplayIcon className="size-10" />
        </button>
        <p className="mt-4 text-white font-bold">
          HELLO AND WELCOME FARM
        </p>
        <p className="mt-2 text-white text-5xl font-bold">
          <span className='text-[#9cc623]'>Your</span> Support Farm 24/7
        </p>
      </div>
    </div>
  )
}
