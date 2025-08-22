import React, { useContext } from 'react';
import { LanguageContext } from "@/LanguageContext"; // Ensure the path is correct
import { Image } from '@/assests/About';


// Define a type for languages
type Language = 'en' | 'de' | 'es' | 'ar';

// Translations for title and subtitle
const translations: Record<Language, { title: string; subtitle: string }> = {
  en: {
    title: "OUR PRODUCT",
    subtitle: "Home / PRODUCT",
  },
  de: {
    title: "UNSER PRODUKT",
    subtitle: "Startseite / PRODUKT",
  },
  es: {
    title: "NUESTRO PRODUCTO",
    subtitle: "Inicio / PRODUCTO",
  },
  ar: {
    title: "منتجنا",
    subtitle: "الرئيسية / المنتج",
  },
};

export default function Project() {
  const { language } = useContext(LanguageContext) as { language: Language }; // Type assertion for context

  // Get the content based on the current language
  const currentContent = translations[language] || translations.en; // Fallback to English

  return (
    <div className='relative inset-0 z-10'>
      {/* Common Image */}
      <img
        src={Image.src} // Access the src property of the imported Image
        alt='Background Image'
        className='w-full h-auto object-cover rounded-lg'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2'>
        <h1 className='text-white text-4xl font-bold'>{currentContent.title}</h1>
        <p className='text-white font-semibold text-lg'>{currentContent.subtitle}</p>
      </div>
    </div>
  );
}
