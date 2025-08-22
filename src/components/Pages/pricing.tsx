import React from 'react';
import { AttachMoney, Business, Star } from '@mui/icons-material'; // Import MUI icons
import Image from 'next/image'; // Import Image component from Next.js
import { price1, price2, price3 } from '@/assests/Pages';

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Pricing",
      description: "Monthly",
      price: "monthly license$19",
      features: [
        "Agriculture is the Science",
        "Cultivating Plants and Livestock",
        "Species Created Food",
        "24/7 Support Service",
      ],
      iconSrc: price1 // Replace with your image paths
    },
    {
      title: "Business Limited",
      description: "Monthly",
      price: " monthly license$119",
      features: [
        "Agriculture is the Science",
        "Cultivating Plants and Livestock",
        "Species Created Food",
        "24/7 Support Service",
      ],
      iconSrc:price2 // Replace with your image paths
    },
    {
      title: "Premium Pricing",
      description: "Yearly Plan",
      price: " monthly license $329",
      features: [
        "Agriculture is the Science",
        "Cultivating Plants and Livestock",
        "Species Created Food",
        "24/7 Support Service",
      ],
      iconSrc: price3 // Replace with your image paths
    },
  ];

  return (
    <section className="py-12  mt-96 px-4">
      <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-lg font-bold mt-6 text-black p-4 ">
      <span className='text-[#9cc623]'>PRICING</span>
        </h2>
        <h2 className="text-5xl font-bold mb-4  text-black p-4 ">
        <span className='text-[#9cc623]'>OUR</span> Pricing Plan
        </h2>
        <p className="text-lg font-bold text-gray-600 mb-12">
          Agriculture is the science and art of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* Increased gap */}
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-green-50"
            >
              <div className="flex flex-col items-center w-full rounded-xl mb-6 bg-gradient-to-r from-orange-500 to-red-500">
                <h3 className="text-xl  mt-7 mb-4">{plan.title}</h3> {/* Increased margin */}
                <p className="text-black">{plan.description}</p>
              </div>
              <div className="text-xl font-bold text-white flex items-center mb-6">
  <Image
    src={plan.iconSrc}
    alt={plan.title}
    width={50}         
    height={50}       
    className="rounded-full  size-36 mr-2"  
  />
</div>
<h2 className="text-lg flex flex-col font-semibold">{plan.price}</h2>

              <ul className="list-none text-gray-700 mt-6 mb-6  font-bold space-y-8"> 
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button className=" bg-gradient-to-r from-orange-500 to-red-500  text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;