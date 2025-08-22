import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { about2 } from '@/assests/Home';
import { productsArr } from '@/utils/blog';
import { LanguageContext } from '@/LanguageContext';

// Define types
type Language = 'en' | 'es' | 'de' | 'ar';

interface Product {
  id: number;
  title: {
    en: string;
    es: string;
    de: string;
    ar: string;
  };
  image: string;
  description: {
    en: string;
    es: string;
    de: string;
    ar: string;
  };
  points: {
    en: string[];
    es: string[];
    de: string[];
    ar: string[];
  };
}

const BlogPage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  const { language } = useContext(LanguageContext) as { language: Language };

  return (
    <div className="max-w-full mx-auto">
      {/* Hero Section */}
      <div className="relative mb-8" data-aos="fade-up">
        <img
          src={about2.src}
          alt="Organic Products from Koraput"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Product Sections */}
      {productsArr.map((product: Product, index: number) => (
        <section
          key={product.id}
          className={`flex px-7 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-stretch`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Image Section */}
          <div className="flex-shrink-0 w-1/2 p-6">
            <img
              src={product.image}
              alt={product.title[language]}
              className="w-full h-[30rem] object-cover rounded-lg border-8 border-gray-300"
            />
          </div>

          {/* Description Section */}
          <div className="flex-grow p-6 flex flex-col">
            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 bg-green-600 text-white px-6 py-2 rounded-lg">
              {product.title[language]}
            </h2>

            {/* Description */}
            <div
              className="text-gray-700 text-2xl flex-grow overflow-y-auto pr-4 border-2 border-gray-200 rounded-lg"
              style={{ maxHeight: 'calc(30rem - 4rem)', scrollbarWidth: 'thin', scrollbarColor: '#A0AEC0 #EDF2F7' }}
            >
              <p>{product.description[language]}</p>
              <ul className="list-disc ml-6 mt-4">
                {product.points[language].map((point: string, idx: number) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default BlogPage;
