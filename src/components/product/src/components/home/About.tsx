"use client"; // Ensure it's a Client Component


import React, { useState, useContext } from "react";
import { LanguageContext } from "@/LanguageContext"; // Import LanguageContext
import { slider1, slider2, slider3, slider4, slider5, slider6, slider7 } from "../../asserts/home";

// Define the type for the item
interface ProductItem {
  src: string;
  title: { en: string; de: string; es: string; ar: string }; // Multilingual titles
}

type Language = "en" | "de" | "es" | "ar";

export default function ProductShowcase() {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error("LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.");
  }

  const { language } = languageContext;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ProductItem | null>(null);

  // Open the modal and set the selected item
  const openModal = (item: ProductItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  // Product data with multilingual titles
  const products: ProductItem[] = [
    { src: slider2.src, title: { en: "Coffee Beans", de: "Kaffeebohnen", es: "Granos de café", ar: "حبوب القهوة" } },
    { src: slider1.src, title: { en: "Basmati Rice", de: "Basmati-Reis", es: "Arroz Basmati", ar: "أرز بسمتي" } },
    { src: slider4.src, title: { en: "Cashew Nuts", de: "Cashewkerne", es: "Anacardos", ar: "الكاجو" } },
    { src: slider5.src, title: { en: "Non Basmati Rice", de: "Nicht-Basmati-Reis", es: "Arroz No Basmati", ar: "أرز غير بسمتي" } },
    { src: slider3.src, title: { en: "Grains", de: "Getreide", es: "Granos", ar: "حبوب" } },
    { src: slider6.src, title: { en: "Chilli Powder", de: "Chilipulver", es: "Polvo de chile", ar: "مسحوق الفلفل الحار" } },
    { src: slider7.src, title: { en: "Turmeric Powder", de: "Kurkuma-Pulver", es: "Polvo de cúrcuma", ar: "مسحوق الكركم" } },
  ];

  return (
    <div className="h-full main-container flex flex-col items-center gap-6 mt-10 mb-20">
      <span className="text-6xl text-blue-600 p-7 underline font-bold tracking-widest">UTKAL</span>
      <span className="text-xl text-gray-600">
        {language === "en"
          ? "We specialize in organic products."
          : language === "de"
          ? "Wir spezialisieren uns auf Bio-Produkte."
          : language === "es"
          ? "Nos especializamos en productos orgánicos."
          : "نحن متخصصون في المنتجات العضوية."}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {/* Cards */}
        {products.map((item, index) => (
          <div
            key={index}
            className="relative bg-white border-4 border-sky-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
          >
            <img src={item.src} alt={item.title[language as Language]} className="w-full h-72 object-contain" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                {item.title[language as Language]}
              </h3>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gray-700 bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <button
                onClick={() => openModal(item)}
                className="text-white text-lg font-semibold bg-pink-500 px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-pink-600 transform group-hover:scale-110"
              >
                {language === "en"
                  ? "See More →"
                  : language === "de"
                  ? "Mehr sehen →"
                  : language === "es"
                  ? "Ver más →"
                  : "عرض المزيد →"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for showing the selected item */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              ✖
            </button>
            <img src={selectedItem.src} alt={selectedItem.title[language as Language]} className="w-full h-[80vh] object-cover mb-4" />
            <h3 className="text-xl font-bold text-center">{selectedItem.title[language as Language]}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
