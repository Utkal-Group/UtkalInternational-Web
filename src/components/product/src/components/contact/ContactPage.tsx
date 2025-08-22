'use client';  // Ensures this is a Client Component

import React, { useContext } from 'react';
import { TextField, Button } from '@mui/material';

import { LanguageContext } from '@/LanguageContext'; // Import the LanguageContext
import { con1, con2, con3 } from '@/assests/Contact';

// Define the type for languages
type Language = 'en' | 'de' | 'es' | 'ar';

const ContactPage = () => {
  const languageContext = useContext(LanguageContext);

  if (!languageContext) {
    throw new Error('LanguageContext not found. Make sure you are wrapping your app with LanguageProvider.');
  }

  const { language } = languageContext;

  // Ensure 'language' is treated as a valid Language type
  const typedLanguage = language as Language;

  // Define the content for the "Contact Information" and "Contact Us" section in different languages
  const contactInfo = {
    phone: {
      en: '9776666555',
      de: '9776666555',
      es: '9776666555',
      ar: '9776666555'
    },
    location: {
      en: 'Head Office: HIG-42, Jayadev Vihar, Bhubaneswar, Odisha.',
      de: 'Hauptbüro: HIG-42, Jayadev Vihar, Bhubaneswar, Odisha.',
      es: 'Oficina Principal: HIG-42, Jayadev Vihar, Bhubaneswar, Odisha.',
      ar: 'المكتب الرئيسي: HIG-42، جاياديف فيهار، بهوبانيشوار، أوديشا.'
    },
    email: {
      en: 'info@utkalinternational.com',
      de: 'info@utkalinternational.com',
      es: 'info@utkalinternational.com',
      ar: 'info@utkalinternational.com'
    }
  };

  const contactTitle = {
    en: 'Contact Information',
    de: 'Kontaktinformation',
    es: 'Información de Contacto',
    ar: 'معلومات الاتصال'
  };

  const formTitle = {
    en: 'How Can We Help You?',
    de: 'Wie können wir Ihnen helfen?',
    es: '¿Cómo podemos ayudarte?',
    ar: 'كيف يمكننا مساعدتك؟'
  };

  // Form field labels in different languages
  const formLabels = {
    firstName: {
      en: 'First Name *',
      de: 'Vorname *',
      es: 'Primer Nombre *',
      ar: 'الاسم الأول *'
    },
    lastName: {
      en: 'Last Name',
      de: 'Nachname',
      es: 'Apellido',
      ar: 'اسم العائلة'
    },
    phone: {
      en: 'Phone No',
      de: 'Telefonnummer',
      es: 'Número de Teléfono',
      ar: 'رقم الهاتف'
    },
    email: {
      en: 'Your Email *',
      de: 'Ihre E-Mail *',
      es: 'Tu Correo Electrónico *',
      ar: 'بريدك الالكتروني *'
    },
    message: {
      en: 'Message',
      de: 'Nachricht',
      es: 'Mensaje',
      ar: 'رسالة'
    },
    submit: {
      en: 'Send Message',
      de: 'Nachricht Senden',
      es: 'Enviar Mensaje',
      ar: 'إرسال الرسالة'
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-24"> {/* Ensure page takes full height */}
      {/* Contact Information */}
      <section className="py-16 bg-white main-container">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">{contactTitle[typedLanguage]}</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Phone Number */}
            <div className="rounded-lg p-6 flex items-center space-x-4 max-w-xs w-full">
              <img src={con1.src} alt='Phone Icon' />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Phone Number</h3>
                <p className="text-red-400">{contactInfo.phone[typedLanguage]}</p>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-lg p-6 flex items-center space-x-4 max-w-xs w-full">
              <img src={con2.src} alt='Location Icon' />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Find Location</h3>
                <p className="text-red-400 mb-2">{contactInfo.location[typedLanguage]}</p>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-lg p-6 flex items-center space-x-4 max-w-xs w-full">
              <img src={con3.src} alt='Email Icon' />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Our Mail</h3>
                <p className="text-red-400">{contactInfo.email[typedLanguage]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-us" className="py-16 w-full bg-gray-50 main-container">
        <div className="container mx-auto px-4">
          <div className="rounded-lg p-8">
            <h3 className="font-semibold mb-6 text-gray-800 text-center">CONTACT US</h3>
            <h3 className="text-4xl font-semibold mb-6 text-gray-800 text-center">
               {formTitle[typedLanguage]}
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <TextField label={formLabels.firstName[typedLanguage]} variant="outlined" fullWidth required />
                <TextField label={formLabels.lastName[typedLanguage]} variant="outlined" fullWidth />
              </div>
              <TextField label={formLabels.phone[typedLanguage]} variant="outlined" fullWidth />
              <TextField label={formLabels.email[typedLanguage]} type="email" variant="outlined" fullWidth required />
              <TextField label={formLabels.message[typedLanguage]} variant="outlined" fullWidth multiline rows={4} />

              <div className="flex justify-center w-full mt-4">
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  className="text-xl font-semibold inline-block py-2 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg"
                >
                  {formLabels.submit[typedLanguage]}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Location */}
      <section className="main-container bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1871.011578576693!2d85.81793993858919!3d20.29930859529341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909c2e0a39ec9%3A0xe46791b69959a045!2sGIET%20Bhubaneswar%20Ghangapatana%20City%20Office!5e0!3m2!1sen!2sin!4v1725962699932!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
