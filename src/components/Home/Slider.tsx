import React, { useContext, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderhomeArr } from "@/utils/home";
import { HomeBreadcrumbArr } from '@/utils/mainPage';
import { LanguageContext } from '@/LanguageContext';
import Link from 'next/link'; // Import Link

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 4500,
};

export default function HomeSlider() {
  const { language } = useContext(LanguageContext);
  const [filterData, setFilterData] = useState({
    title1: '',
    title2: '',
    content: '',
    buttonText: ''
  });

  useEffect(() => {
    const data = HomeBreadcrumbArr.find((item) => item.lang === language);
    if (data) {
      setFilterData(data);
    }
  }, [language]);

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Slider Content */}
      <div className='absolute inset-0'>
        <Slider {...settings}>
          {sliderhomeArr.map((item, index) => (
            <div key={index} className="relative w-full h-screen">
              <img
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overlay Content with Heading, Paragraph, and Button */}
      <div className="absolute z-30 grid grid-cols-2 w-full h-full main-container">
        <div className="flex flex-col items-start justify-end w-full p-4 mb-52">
          <p className="text-white text-lg font-bold mb-4">
            {filterData.title1} {filterData.title2}
          </p>
          <h1 className="text-4xl font-bold mb-4 text-white">{filterData.content}</h1>
          <Link href="/products"> {/* Redirect to the Product page */}
            <button className="bg-[#9cc623] text-white py-2 px-4 font-bold">
              {filterData.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
