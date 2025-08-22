import React, { useState, useContext, useEffect } from 'react';
import { bottombg, choose1 } from '@/assests/Home';
import { LanguageContext } from '@/LanguageContext';
import { reasons as reasonsData } from '@/utils/mainPage';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Choose() {
  const { language } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  console.log("Current Language:", language);

  const reasons = reasonsData?.find((item) => item.lang === language) || { title: "", content: [], qualityStats: [] };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <img
        src={choose1.src}
        alt="Description of choose1"
        className="w-full h-full object-cover"
        data-aos="fade-right"
        data-aos-duration="1000"
      />

      <div className="absolute inset-0 bg-[#2b2c2d] opacity-90"></div>

      <div className="absolute inset-0 items-start top-0">
        <img
          src={bottombg.src}
          alt="Foreground img3"
          className="w-full -mt-10"
        />
        <div className="relative text-white p-12 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

          {/* Left Content */}
          <div className="w-full lg:w-2/3" data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-lime-500 text-sm font-bold uppercase mb-2">
              {reasons.title} {/* Dynamic title here */}
            </h3>

            {/* Collapsible Reasons */}
            <div className="space-y-4">
              {reasons.content.map((reason, index) => (
                <div key={index}>
                  <div 
                    className="flex justify-between items-center cursor-pointer bg-gray-700 p-6 rounded mb-2"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                  >
                    <span className="text-white uppercase font-bold text-sm">{reason.title}</span>
                    <span className="text-white text-sm">{activeIndex === index ? '-' : '+'}</span>
                  </div>
                  {activeIndex === index && (
                    <div className="bg-gray-800 p-4 rounded mb-4" data-aos="fade-right" data-aos-duration="1000">
                      <p className="text-white">{reason.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0 space-y-4">
            {reasons.qualityStats.map((stat, index) => (
              <div key={index}>
                <div className="flex justify-between items-center" data-aos="fade-right" data-aos-duration="1000">
                  <span className="text-white uppercase font-bold text-sm">{stat.title}</span>
                  <span className="text-white text-sm">{stat.percentage}</span>
                </div>
                <div className="w-full rounded-full bg-white h-2 mb-4">
                  <div className={`${stat.color} h-2 rounded-full`} style={{ width: stat.percentage }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '20px' }} />
      </div>
    </div>
  );
}
