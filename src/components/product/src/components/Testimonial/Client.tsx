'use client';

import React, { useContext } from 'react';
import { LanguageContext } from '@/LanguageContext'; // Import the LanguageContext
import { testimonialArr } from '../../utils/Testimonial';

// Define the type for languages (same as in Header)
type Language = 'en' | 'de' | 'es' | 'ar';

export default function Client() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.');
  }

  const { language } = languageContext;

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:ml-20">
        {testimonialArr.map((item, index) => (
          <div key={index} className="p-4">
            <div className="bg-blue-50 border border-transparent rounded-lg shadow-md sm:p-8 md:p-10 w-full h-32 md:h-96 hover:bg-blue-500 hover:text-white transition-colors flex flex-col justify-center items-center">
              <div className="text-left text-gray-700 hover:text-white">
                <p className="text-base sm:text-lg">
                  {item.paragraph[language as Language]} {/* Type assertion here */}
                </p>
                <div className="flex justify-center items-center mt-4">
                  <img src={item.image.src} className="rounded-full w-12 h-12" alt={item.name} />
                  <div className="ml-4">
                    <h1 className="text-blue-600 font-semibold text-sm sm:text-base hover:text-white">
                      {item.name} {/* Name stays the same for all languages */}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
