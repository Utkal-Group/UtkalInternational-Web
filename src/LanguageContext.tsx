import React, { createContext, useState, useEffect } from 'react';

// Create the Language Context
export const LanguageContext = createContext({
  language: 'en', // Default value
  setLanguage: (lang: string) => {},
});

export const LanguageProvider = ({ children }: any) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check localStorage for saved language on mount
    const storedLanguage = localStorage.getItem('languageData');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Update localStorage whenever the language state changes
  useEffect(() => {
    localStorage.setItem('languageData', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
