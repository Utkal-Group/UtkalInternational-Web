'use client';
import React, { useContext, useEffect } from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import ContactsIcon from '@mui/icons-material/Contacts';
import Tooltip from '@mui/material/Tooltip';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Link from 'next/link';
import Image from 'next/image';

import { LanguageContext } from '@/LanguageContext';
import { wheel } from '../asserts/home';

type Language = 'en' | 'de' | 'es' | 'ar';

const sidebarArray = [
  { title: { en: 'Product', de: 'Produkt', es: 'Producto', ar: 'منتج' }, icon: <CategoryIcon />, path: '/products' },
  // { title: { en: 'Services', de: 'Dienstleistungen', es: 'Servicios', ar: 'خدمات' }, icon: <ContactsIcon />, path: '/' },
  { title: { en: 'Testimonial', de: 'Testimonial', es: 'Testimonio', ar: 'شهادة' }, icon: <Diversity1Icon />, path: '/testimonial' },
  { title: { en: 'Certificates', de: 'Zertifikate', es: 'Certificados', ar: 'شهادات' }, icon: <WorkspacePremiumIcon />, path: '/certificates' },
];

type prop = {
  isOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
};

export default function SideBar({ isOpen, setIsSidebarOpen }: prop) {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.');
  }

  const { language } = languageContext;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsSidebarOpen]);

  return (
    <section
      className={`bg-blue-800 p-6 text-white text-sm font-bold font-mono transition-all duration-300 z-10 fixed h-screen ${
        isOpen ? 'w-40' : 'w-20'
      }`}
      style={{ top: '5rem' }}
    >
      {/* Centered and Half-Shown Spinning Wheel */}
      <Image
        src={wheel.src}
        alt="wheel"
        className="absolute -left-1/2 -translate-x-3/4 top-1/3 -translate-y-1/2 animate-rotate"
        width={500}
        height={500}
      />

      <div className="flex flex-col items-center justify-start h-full space-y-4">
        {sidebarArray.map((item, index) => (
          <div key={index} className="w-full">
            <span
              className={`w-full h-fit p-3 flex items-center justify-center gap-2 cursor-pointer relative group ${
                isOpen ? 'hover:bg-emerald-400 hover:rounded-full' : ''
              } transition-all duration-300 ease-in-out`}
            >
              {isOpen ? (
                <Link href={item.path}>
                  <p className="block w-full text-center logoWarper_two uppercase transform transition-transform duration-300 group-hover:translate-x-2">
                    {item.title[language as Language]}
                  </p>
                </Link>
              ) : (
                <Tooltip title={item.title[language as Language]} arrow>
                  <Link href={item.path}>
                    <span>{item.icon}</span>
                  </Link>
                </Tooltip>
              )}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .wheel-animation {
          animation: spinWheel 10s linear infinite;
        }

        @keyframes spinWheel {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
