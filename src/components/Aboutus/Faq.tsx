import { bg, bg1 } from '@/assests/About';
import { faq } from '@/utils/home';
import { Collapse } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import React, { useState, useContext, useEffect } from 'react';
import { LanguageContext } from '@/LanguageContext';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

export default function Faq() {
    const { language } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setIsOpen(isOpen === index ? null : index);
    };

    const currentFaq = faq.find(item => item.lang === language);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
        });
    }, []); // Run once on component mount

    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${bg.src})` }}
        >
            <div className="flex w-full items-center justify-center gap-8 px-8">
                <div className="w-1/2">
                    <img
                        src={bg1.src}
                        alt='Image 2'
                        className='w-full h-[34rem] object-cover rounded-lg'
                        data-aos="fade-right" // Add AOS animation
                    />
                </div>
                <div className="w-1/2 text-gray-600 flex flex-col" data-aos="fade-left">
                    <h1 className="text-base font-bold mb-4">
                        {currentFaq?.title.questions}
                    </h1>
                    <h1 className="text-4xl font-bold mb-4">
                        <span className="text-[#9cc623]">
                            {currentFaq?.title.answer}
                        </span>
                    </h1>
                    <div className='flex flex-col gap-3 shadow-md'>
                        {currentFaq?.items.map((item, index) => (
                            <div
                                key={item.id}
                                className='rounded-md shadow-md bg-white'
                                data-aos="zoom-in" // Different AOS animation for FAQ items
                            >
                                <div
                                    className='flex items-center justify-between p-2 cursor-pointer'
                                    onClick={() => handleClick(index)}
                                >
                                    <h2 className='font-semibold text-gray-600 text-base md:text-lg lg:text-xl flex-grow'>
                                        {item.question}
                                    </h2>
                                    <ArrowDropDownIcon
                                        className={`transform transition-transform p-1 ${
                                            isOpen === index ? 'bg-orange-500 rotate-180' : 'bg-[#9cc623]'
                                        } hover:bg-#28a745;`}
                                    />
                                </div>
                                <Collapse
                                    in={isOpen === index}
                                    timeout='auto'
                                    unmountOnExit
                                >
                                    <div className='p-4'>
                                        <p className='text-gray-400 text-sm md:text-base lg:text-lg'>
                                            {item.answer}
                                        </p>
                                    </div>
                                </Collapse>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
