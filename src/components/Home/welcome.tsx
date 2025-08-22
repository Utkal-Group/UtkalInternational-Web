import { bottombg } from '@/assests/Home';
import { feature } from '@/utils/home';
import React, { useEffect, useState, useContext } from 'react';
import { LanguageContext } from '@/LanguageContext';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

type StaticImageData = any;

interface FeatureItem {
  id: number;
  heading: string;
  title: string;
  image?: StaticImageData; // Make image optional
}

export default function Welcome() {
  const { language } = useContext(LanguageContext); // Access language from context
  const [filteredFeature, setFilteredFeature] = useState<FeatureItem[]>([]);

  useEffect(() => {
    const filteredData = feature.find((item) => item.lang === language)?.content || [];
    setFilteredFeature(filteredData);
    AOS.refresh(); // Refresh AOS on language change
  }, [language]); // Update when language changes

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration in milliseconds
    });
  }, []); // Run once on component mount

  return (
    <section className="relative flex flex-col justify-center items-center py-8">
      <div className="absolute inset-0 items-start top-0">
        <img src={bottombg.src} alt="Foreground img3" className="w-full -mt-8" />
      </div>

      <div className="relative z-20 w-full max-w-screen-xl mx-auto text-center">
        {/* Render the welcome message and title */}
        {filteredFeature.length > 0 && (
          <div data-aos="fade-up">
            <h1 className="text-base font-bold text-gray-500 mt-24">
              {filteredFeature[0].heading}
            </h1>
            <p className="text-4xl font-bold mt-4">
              {filteredFeature[0].title}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-8">
          {filteredFeature.slice(1).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-lg flex flex-col items-center text-center bg-[#eae6e6] shadow-sm"
              data-aos="fade-up" // Add AOS animation here
            >
              {item.image && (
                <img src={item.image.src} alt={item.title} className="w-28 h-28 rounded-full mb-4" />
              )}
              <p className="text-6xl font-bold text-black sm:text-lg leading-loose mb-2">{item.heading}</p>
              <h3 className="text-gray-600 font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
