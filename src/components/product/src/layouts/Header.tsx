'use client'; // Ensure it's a Client Component
import React, { useContext } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

import Link from 'next/link';

import { LanguageContext } from '@/LanguageContext'; // Import your LanguageContext
import { logo } from '@/assests/Home';
import { tribal } from '../asserts/home';

// Define the type for languages
type Language = 'en' | 'de' | 'es' | 'ar';

// Define the props type
interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

// Define the header items array with multilingual titles
const headerArr = [
  { id: 1, title: { en: 'Home', de: 'Startseite', es: 'Inicio', ar: 'الرئيسية' }, path: '/' },
  { id: 2, title: { en: 'Our Team', de: 'Unser Team', es: 'Nuestro equipo', ar: 'فريقنا' }, path: '/ourteam' },
  { id: 4, title: { en: 'Contact', de: 'Kontakt', es: 'Contacto', ar: 'اتصل' }, path: '/contact' },
  { id: 5, title: { en: 'Feedback', de: 'Feedback', es: 'Comentarios', ar: 'تغذية راجعة' }, path: '/contact#contact-us' },
];

export default function Header({ toggleSidebar, isOpen }: HeaderProps) {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.');
  }

  const { language, setLanguage } = languageContext;

  return (
    <div
      className="w-full h-20 sticky top-0 z-20 text-white text-sm font-bold header-bg-animation" // Ensure the header's z-index is higher
    >
      <header className="w-full h-full flex items-center justify-between bg-blue-700 bg-opacity-20">
        <div className="flex items-center justify-start gap-6 w-full">
          <div className="w-20 h-full p-6 cursor-pointer" onClick={toggleSidebar}>
            <MenuIcon />
          </div>
          {isOpen ? (
            <nav className="flex items-center gap-6">
              {headerArr.map((item) => (
                <span key={item.id} className="w-fit h-full p-2 center">
                  <Link href={item.path}>
                    <p className="uppercase hover:bg-emerald-400 logoWarper_two hover:rounded-full px-4 py-2 transition-all duration-300">
                      {item.title[language as Language]} {/* Access title based on current language */}
                    </p>
                  </Link>
                </span>
              ))}
            </nav>
          ) : (
            <div className="flex items-center justify-start h-full">
              <Link href="/">
                <img src={logo.src} alt="Logo" className="h-16 w-auto" />
              </Link>
            </div>
          )}
        </div>

        {/* Language Switcher */}
        <div className="p-2">
          <div className="relative">
            <select
              onChange={(e) => setLanguage(e.target.value as Language)}
              value={language}
              className="bg-blue-700 text-white p-2 rounded cursor-pointer border-transparent transition-all duration-300 hover:border-b-4 hover:border-white"
            >
              <option value="en" className="cursor-pointer">English</option>
              <option value="de" className="cursor-pointer">German</option>
              <option value="es" className="cursor-pointer">Spanish</option>
              <option value="ar" className="cursor-pointer">Arabic</option>
            </select>
          </div>
        </div>

        {isOpen && (
          <div className="p-6">
            <Link href="/">
              <img src={logo.src} alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>
        )}
      </header>    

      {/* Add keyframes for background animation */}
      <style jsx>{`
        .header-bg-animation {
          background-image: url(${tribal.src});
          background-repeat: repeat-x;
          background-size: auto 100%;
          background-position: top;
          animation: slideBackground 30s linear infinite;
        }

        @keyframes slideBackground {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 0;
          }
        }
      `}</style>
    </div>
  );
}
