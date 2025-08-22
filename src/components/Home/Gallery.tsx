import React, { useContext, useEffect, useState } from "react";
import { about } from "@/utils/mainPage";
import { LanguageContext } from "@/LanguageContext";
import { world } from "@/assests/Home";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function AboutUs() {
  const { language } = useContext(LanguageContext);
  const [content, setContent] = useState(about[0]); // Default content

  useEffect(() => {
    const data = about.find((item) => item.language === language);
    if (data) {
      setContent(data);
    }
  }, [language]); // Dependency on language

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
    });
  }, []); // Run once on component mount

  return (
    <section className="bg-white py-4 px-4 md:px-28">
      <main className="main-container mx-auto py-8">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="flex-1 flex flex-col justify-center items-start p-3" data-aos="fade-right">
            <h1 className="text-orange-400 text-2xl">{content.title}</h1>
            <h1 className="text-black text-3xl font-bold md:text-5xl mt-4">
              {content.subtitle}
            </h1>
            <p className="text-base text-gray-500 font-bold leading-loose mt-4">
              {content.description}
            </p>
            {content.items.map((item, index) => (
              <div key={index}>
                <h1 className="text-black text-2xl font-bold mt-9">
                  {`0${index + 1}. ${item}`}
                </h1>
                <hr className="border border-gray-200 w-3/4 my-4" />
              </div>
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center p-4" data-aos="fade-left">
            {/* Uncomment and use image when needed */}
            <img src={world.src} alt="" className="md:w-full w-full h-auto rounded-md" />
          </div>
        </div>
      </main>
    </section>
  );
}
