import React, { useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { LanguageContext } from "@/LanguageContext";
import { con1, con2, con3, crumb } from '@/assests/Contact';
import { contactData } from '@/utils/contactus';

// Define the type for language
type Language = 'en' | 'es' | 'de' | 'ar'; // Ensure this matches your contactData keys

const ContactPage: React.FC = () => {
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  const data = contactData[language as Language];

  const navigateHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative inset-0 z-10">
        <img
          src={crumb.src}
          alt="Background Image"
          className="w-full h-[18rem] object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
          <h1 className="text-white text-5xl font-extrabold">{data.header}</h1>
          <p className="text-white font-bold text-lg">
            <span className="cursor-pointer" onClick={navigateHome}>{data.home}</span> /{' '}
            <span className="text-[#9cc623]">{data.contactInfo}</span>
          </p>
        </div>
      </div>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="main-container  px-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className="text-center text-xl font-semibold text-gray-800">{data.form.title}</h3>
            <h3 className="text-center text-4xl font-extrabold mb-8 text-gray-800">
              <span className="text-[#9cc623]">{data.form.subtitle}</span>
            </h3>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label={data.form.placeholders.firstName}
                  variant="outlined"
                  fullWidth
                  className="rounded-lg shadow-sm bg-white"
                  required
                />
                <TextField
                  label={data.form.placeholders.lastName}
                  variant="outlined"
                  fullWidth
                  className="rounded-lg shadow-sm bg-white"
                />
              </div>
              <TextField
                label={data.form.placeholders.phone}
                variant="outlined"
                fullWidth
                className="rounded-lg shadow-sm bg-white"
              />
              <TextField
                label={data.form.placeholders.email}
                type="email"
                variant="outlined"
                fullWidth
                className="rounded-lg shadow-sm bg-white"
                required
              />
              <TextField
                label={data.form.placeholders.message}
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                className="rounded-lg shadow-sm bg-white"
              />
              <div className="flex justify-center w-full mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className="text-lg font-semibold py-3 px-6 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-lg hover:bg-green-600"
                >
                  {data.form.submit}
                </Button>
              </div>
            </form>
          </div>

          {/* Map */}
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743147133996!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full h-[500px]"
            />
          </div>
        </div>
      </section>

      {/* Address Section */}
      <section className="py-16 bg-white">
        <div className="main-container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-gray-800 text-center">{data.contactInfo}</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {/* Phone */}
            <div className="rounded-lg p-8 bg-gray-50 shadow-lg flex items-center space-x-6 max-w-xs w-full transition-transform transform hover:scale-105">
              <img src={con1.src} alt="Phone Icon" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{data.phone.title}</h3>
                <p className="text-red-400">{data.phone.value}</p>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-lg p-8 bg-gray-50 shadow-lg flex items-center space-x-6 max-w-xs w-full transition-transform transform hover:scale-105">
              <img src={con2.src} alt="Location Icon" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{data.location.title}</h3>
                {data.location.addresses.map((address, index) => (
                  <p key={index} className="text-red-400 mb-2">{address}</p>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="rounded-lg p-8 bg-gray-50 shadow-lg flex items-center space-x-6 max-w-xs w-full transition-transform transform hover:scale-105">
              <img src={con3.src} alt="Email Icon" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{data.email.title}</h3>
                <p className="text-red-400">{data.email.value}</p>
                <p className="text-red-400">{data.email.website}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
