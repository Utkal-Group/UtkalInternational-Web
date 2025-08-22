import { quote } from '@/assests/Pages';
import React from 'react';

export default function TestimonialCard() {
  const testimonials = [
    {
      id: 1,
      name: "Kumlar Demoon",
      text: "A foodbank is a non-profit tha charitable organization that distributes food those who have difficulty show consists of a person's written or spoken statement extolling the virtue enough.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tomad Alexander",
      text: "A foodbank is a non-profit tha charitable organization that distributes food those who have difficulty show consists of a person's written or spoken statement extolling the virtue enough.",
      rating: 5,
    },
  ];

  return (
    <div className="my-16">
      {/* Heading */}
      <h1 className='text-gray-600 text-center text-lg font-bold'>TESTIMONIAL</h1>
      <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
     <span className='text-[#9cc623]'>HAPPY</span> CUSTOMER FEEDBACK
      </h2>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-28 mb-32 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border rounded-lg p-16 shadow-lg flex flex-col"
          >
            {/* Quote Icon and Name */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={quote.src}
                  alt="Quote Icon"
                  className="w-8 h-8 object-cover rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 ml-3">
                  {testimonial.name}
                </h3>
              </div>

              {/* Rating Stars */}
              <div className="flex">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.97 2.865a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.97-2.865a1 1 0 00-1.176 0l-3.97 2.865c-.784.57-1.839-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.58 9.101c-.783-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-500">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
