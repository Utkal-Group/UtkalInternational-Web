import React, { useContext, useEffect } from 'react';
import { test } from '@/assests/Home';
import { sliderArr } from '@/utils/home';
import Slider from 'react-slick';
import { LanguageContext } from "@/LanguageContext"; 
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Feedback() {
    const { language } = useContext(LanguageContext); 

    const { title, content } = sliderArr.find(item => item.lang === language) || { title: {}, content: [] }; 

    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        autoplaySpeed: 3000, 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
        });
    }, []); // Run once on component mount

    return (
        <div
            className="relative h-screen bg-cover bg-center mt-20"
            style={{ backgroundImage: `url(${test.src})` }} 
        >
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center" data-aos="fade-up">
                <p className="text-white font-semibold text-lg">
                    {title.heading}
                </p>
                <p className="text-white text-5xl font-bold mt-2">
                    <span className='text-[#9cc623]'>{title.subheading}</span>
                </p>
            </div>

            <div className="flex justify-center" data-aos="zoom-in">
                <Slider {...settings} className="w-full max-w-screen-lg mt-40">
                    {content.map((item) => (
                        <div key={item.id} className="px-2" data-aos="fade-up">
                            <div className="w-full flex justify-center items-center">
                                <img
                                    src={item.img.src}
                                    alt={`Feedback ${item.id}`}
                                    className="w-60 h-auto object-cover border border-[#9cc623] rounded-lg"
                                />
                                <p className="ml-4 text-white">{item.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
