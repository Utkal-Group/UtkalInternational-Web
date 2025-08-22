import React from 'react';
import Image from 'next/image';
import { blog1, blog2 } from '@/assests/Blog';

const ArticlePage = () => {
  return (
    <div className="min-h-screen  bg-gray-100 p-8">
      <div className="w-auto mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Farming Has A Banking Problem</h1>
        <p className="text-gray-600">SEPTEMBER 22, 2020</p>
        <p className="text-xl font-semibold text-green-600 my-2">$29.00</p>

        <p className="text-gray-700 my-4">
          Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, 
          tellus vitae condimem egestlibos dolor auctor tellus, eu consectetur neque elit quis nunc. 
          Cras elementum pretiumi Nullam justo efficitur, trist ligula pellentue ipsum Quisque thsr augue 
          ipsum, vehicula tellus maximus. Was popularised in the 1960s withs the release of Letraset sheets 
          containing Lorem Ipsum passags, and more recently with desktop publishing software. Farming dolor sit amet, 
          consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem egestlibers dolosr auctor tellus, eu 
          consectetur neque elit quinunc.
        </p>

        {/* Image Section */}
        <div className="flex gap-8 ">
          <Image src={blog2.src} alt="Image 1" width={500} height={300} className=" shadow-md" />
          <Image src={blog1.src} alt="Image 2" width={500} height={300} className=" shadow-md" />
        </div>

        <p className="text-gray-700 my-4">
          Auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, 
          trist ligula pellentue ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 
          1960s withs the release of Letraset sheets containing Lorem Ipsum passags, and more recently with desktop 
          publishing software. Farming dolor sit amet, consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">Farming Has A Banking</h2>
        <div className="grid grid-cols-1  gap-4">
          <div>
            <h3 className="font-semibold">Hydroponic :</h3>
            <p>Agriculture, Food, Natural, Resources</p>
          </div>
          <div>
            <h3 className="font-semibold">Accessories :</h3>
            <p>Rarvester, Machine, Resources</p>
          </div>
          <div>
            <h3 className="font-semibold">Technology :</h3>
            <p>Farming, Natural</p>
          </div>
          <div>
            <h3 className="font-semibold">Hydroponic :</h3>
            <p>Food, Natural, Resources</p>
          </div>
        </div>

        <p className="text-gray-700 my-4">
          Express dolor sit amet, consectetur adipiscing elit. Cras sollicitudin, tellus vitae condimem egestlibos 
          dolor auctor tellus, eu consectetur neque elit quis nunc. Cras elementum pretiumi Nullam justo efficitur, 
          trist ligula pellentue ipsum Quisque thsr augue ipsum, vehicula tellus maximus. Was popularised in the 1960s 
          withs the release of Letraset sheets containing Lorem Ipsum passags, and more recently with desktop publishing 
          software. Farming dolor sit amet, consectetur adipiscing elit. Cras sollicitin, tellus vitae condimem egestlibers 
          dolosr auctor tellus, eu consectetur neque elit quinunc.
        </p>
      </div>
    </div>
  );
};

export default ArticlePage;