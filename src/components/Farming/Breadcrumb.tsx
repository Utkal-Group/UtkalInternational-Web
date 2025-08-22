import React, { useContext } from 'react';
import { LanguageContext } from "@/LanguageContext";
import { crumb1 } from '@/assests/Farming';
import { breadcrumbData } from '@/utils/aboutUs';


const Breadcrumb: React.FC = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    return null; // Handle the case where context is not available
  }

  const { language } = context;
  
  // Type assertion to ensure TypeScript understands that language is one of the keys
  const data = breadcrumbData[language as keyof typeof breadcrumbData];

  return (
    <div className='relative w-full'>
      <img
        src={crumb1.src}
        alt='Background Image'
        className='w-full h-96 object-cover rounded-lg'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center space-y-2'>
        <h1 className='text-indigo-800 text-4xl font-bold'>{data.title}</h1>
        <p className='text-white font-bold text-lg'>{data.path}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
