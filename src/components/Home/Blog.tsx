import { cardarr } from '@/utils/home';
import React, { useContext } from 'react';
import { LanguageContext } from "@/LanguageContext"; // Ensure this is correctly imported

export default function CardsRow() {
  const { language } = useContext(LanguageContext); // Get the current language
  const currentCard = cardarr.find(card => card.lang === language); // Get the current language card

  // Fallback content in case currentCard is undefined
  const fallbackTitle = "MD MESSAGE";
  const fallbackSubtitle = "ORGANIC EXCELLENCE GLOBALLY DELIVERED";
  const fallbackContent = [
    {
      id: 1,
      title: 'Default Title',
      description: 'Default description for when language is not supported.',
      imageSrc: { src: '/path/to/default/image.png' } // Replace with a valid default image
    }
  ];

  return (
    <section className="main-container flex flex-col justify-center items-center py-8 bg-gray-50">
      <h1 className="text-base font-bold text-gray-500 text-center tracking-wider">
        {currentCard?.title || fallbackTitle}
      </h1>
      <p className="text-4xl font-bold text-center mt-1">
        <span className="text-[#9cc623]">
          {currentCard?.subtitle?.split(' ')[0] || fallbackSubtitle.split(' ')[0]}
        </span> 
        {currentCard?.subtitle?.split(' ').slice(1).join(' ') || fallbackSubtitle.split(' ').slice(1).join(' ')}
      </p>

      <div className="container mx-auto px-4 py-8">
        <div className="gap-8">
          {(currentCard?.content || fallbackContent).map((card) => (
            <div
              key={card.id}
              className="bg-white flex flex-row-reverse justify-between shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={card.imageSrc.src}
                alt={card.title}
                className="w-auto h-auto object-cover transition duration-300 hover:opacity-90"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">{card.title}</h2>
                <p className="text-gray-700 text-xl text-wrap leading-loose mb-4">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
