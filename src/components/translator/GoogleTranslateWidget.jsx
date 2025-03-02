'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const GoogleTranslateWidget = () => {
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi', // Ensures only English & Hindi are available
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  const changeLanguage = (lang) => {
    setSelectedLang(lang);

    setTimeout(() => {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    }, 500); // Wait for the Translate widget to be ready
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <div className="relative flex items-center gap-2 border rounded-md px-3 py-1 cursor-pointer bg-gray-100 w-28"
        onClick={() => changeLanguage(selectedLang === 'hi' ? 'en' : 'hi')}>
        <Image 
          src={selectedLang === 'hi' ? '/images/hindi-flag.png' : '/icons/english-flag.png'} 
          alt={selectedLang === 'hi' ? 'Hindi' : 'English'} 
          width={24} 
          height={16} 
        />
        <span className="text-lg font-semibold text-gray-800">
          {selectedLang === 'hi' ? 'हिन्दी' : 'English'}
        </span>
        <span className="ml-auto text-gray-600">▼</span>
      </div>
      <div id="google_translate_element" className="hidden" />
    </>
  );
};

export default GoogleTranslateWidget;
