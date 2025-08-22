import React, { useContext } from 'react';
import Image from 'next/image';
import { pricingData } from '@/utils/home/index';
import { LanguageContext } from "@/LanguageContext";

type Language = 'en' | 'es' | 'de' | 'ar';

const PricingSection = () => {
  const { language } = useContext(LanguageContext) as { language: Language }; // Explicitly type the context

  return (
    <section className="relative py-12 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-lg shadow-lg inline-block">
          {language === 'es' ? "Nuestros Productos" : language === 'de' ? "Unsere Produkte" : language === 'ar' ? "منتجاتنا" : "Our Products"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData[language].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:bg-green-50 transition duration-300 ease-in-out relative"
            >
              <Image src={item.image} alt={item.title} className="rounded-lg mb-4" width={400} height={200} />
              <h3 className="text-2xl font-semibold mb-2 flex flex-col items-center">
                <span className="mr-2">{item.title}</span>
                <span className="text-green-600 font-bold">{item.price}</span>
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-8">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            First
          </button>
          <span className="text-gray-700">Page 1 of 2</span>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
