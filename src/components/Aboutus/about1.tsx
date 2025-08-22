import React, { useContext, useEffect } from 'react';
import { LanguageContext } from "@/LanguageContext"; 
import { aboutCardsData } from '@/utils/aboutUs';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function About1() {
  const { language } = useContext(LanguageContext); // Get the current language

  // Filter the data based on selected language
  const currentData = aboutCardsData.find(item => item.lang === language)?.cards || [];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []); // Run once on component mount

  return (
    <div className="main-container mt-20 px-4 sm:px-6  py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-28">
        {currentData.map((card, index) => (
          <div 
            key={index} 
            className="text-start max-w-xs" 
            data-aos="fade-up" // Add AOS animation
          >
            <img
              src={card.imageSrc}
              alt={`Image ${index + 1}`}
              className="w-full max-w-[12rem] h-auto object-cover rounded-lg mx-auto"
            />
            <p className="mt-4 font-bold text-gray-800">{card.title}</p>
            <p className="mt-2 text-gray-600 text-justify">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
