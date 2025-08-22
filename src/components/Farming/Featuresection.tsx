// FeaturesSection.tsx
import React, { useContext } from 'react';
import { LanguageContext } from "@/LanguageContext";

import Image from 'next/image';
import { featuresData } from '@/utils/aboutUs';

export default function FeaturesSection() {
  const { language } = useContext(LanguageContext); // Get the current language

  // Use TypeScript's indexing to get features for the current language
  const currentFeatures = featuresData[language as keyof typeof featuresData] || [];

  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {currentFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg">
              <div className="mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={120}
                  height={120}
                  className="mx-auto rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
