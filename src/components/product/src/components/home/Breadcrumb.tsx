'use client';

import React from 'react';
import Slider from 'react-slick';
import { slider1, slider2, slider3, slider4, slider5, slider6, slider7 } from '../../asserts/home';

// Custom Previous Arrow
interface ArrowProps {
  onClick?: () => void; // Ensuring that onClick is optional
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-10 transform -translate-y-1/2 text-blue-500 cursor-pointer z-10"
      style={{ fontSize: '3rem' }} // Increased font size
      onClick={onClick}
    >
      &#8592; {/* Left arrow symbol */}
    </div>
  );
};

// Custom Next Arrow
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 text-blue-500 cursor-pointer z-10"
      style={{ fontSize: '3rem' }} // Increased font size
      onClick={onClick}
    >
      &#8594; {/* Right arrow symbol */}
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 5000,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

export default function Breadcrumb() {
  return (
    <section className='w-full pt-20 pl-6 center h-screen'>
      <div className='items-center main-container w-full h-screen'>
        <Slider {...settings}>
          <div className='h-full'>
            <img
              src={slider1.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider2.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider3.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider4.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider5.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider6.src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>

          <div className='h-full'>
            <img
              src={slider7 .src}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
