import React, { useContext, useEffect } from 'react';
import { LanguageContext } from "@/LanguageContext"; 
import { Image } from '@/assests/About';
import { aboutData } from '@/utils/aboutUs';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function About() {
  const { language } = useContext(LanguageContext); // Get the current language

  // Safeguard for undefined aboutData
  const currentData = aboutData?.find((item) => item.lang === language);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []); // Run once on component mount

  return (
    <div className='relative inset-0 z-10'>
      <img
        src={Image.src}
        alt='Background Image'
        className='w-full h-[18rem] object-cover brightness-50   rounded-lg'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2' data-aos="fade-up">
        <h1 className='text-white text-4xl font-bold'>
          {currentData?.title || "Default Title"}
        </h1>
        <p className='text-white font-bold text-lg'>
          {currentData?.subtitle || "Default Subtitle"}
        </p>
      </div>
    </div>
  );
}
