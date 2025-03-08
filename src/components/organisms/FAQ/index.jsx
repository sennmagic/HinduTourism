
"use client"
import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "Which temples are included in the tour?",
      answer: "We cover Pashupatinath, Muktinath, and Manakamana, with options upon request."
    },
    {
      question: "Can I customize my trip?",
      answer: "Yes! Choose your destinations, transport, hotels, and additional services with our 'Customize Trip' option."
    },
    {
      question: "Do you offer private or group tours?",
      answer: "Both! Opt for a private pilgrimage or join a group tour based on availability."
    },
    {
      question: "Why are prices not fixed?",
      answer: "Costs vary based on season, transport, accommodation, and group size. We provide a customized quote for each trip."
    },
    {
      question: "How can I get a price estimate?",
      answer: "📩 Request a Quote via our website\n📞 Call/WhatsApp for quick assistance\n📧 Email us your preferences"
    },
    {
      question: "What payment options do you accept?",
      answer: "We accept bank transfers, online payments, and cash in major currencies."
    },
    {
      question: "Do you provide helicopter services?",
      answer: "Yes!"
    },
    {
      question: "Is the trip suitable for elderly travelers?",
      answer: "Yes! We offer nurse-accompanied trips, wheelchair assistance, and comfortable transport."
    },
    {
      question: "Do you arrange VIP Darshan?",
      answer: "Yes, Deluxe & Exclusive packages include priority temple entry."
    },
    {
      question: "Can I book a special puja or ritual?",
      answer: "Yes, we arrange private pujas and rituals upon request."
    },
    {
      question: " Still have questions? Contact us now!",
      answer: "Feel free to reach out to us via phone, email, or WhatsApp for any additional inquiries."
    },
    {
      question: "What are the top 3 must-visit temples in Nepal for Hindu pilgrims?",
      answer: "The most revered and popular temples are Pashupatinath Temple (dedicated to Lord Shiva), Manakamana Temple (dedicated to Goddess Durga), and Muktinath Temple (dedicated to Lord Vishnu). These are considered essential pilgrimage sites."
    },

    // Add any other FAQ items here...
  ];
  

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative my-spacer">
      {/* Decorative Background Blur */}
      <div className="absolute -top-32 left-1/3 w-[151px] h-[170px] rotate-[23.86deg] opacity-80 bg-red-700 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Sticky Title Section */}
          <div className="lg:sticky lg:top-28 lg:h-fit lg:max-w-[316px] space-y-7">
            <h2 className="text-4xl md:text-5xl font-semibold text-stone-800 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-stone-800">
              Because we value being transparent.
            </p>
          </div>

          {/* FAQ Items Container */}
          <div className="flex-1 space-y-8">
            {faqs.map((faq, index) => (
              <div 
              onClick={() => toggleFAQ(index)}
                key={index}
                className="pb-8 cursor-pointer border-b border-slate-300 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-semibold text-stone-800 leading-[27px]">
                    {faq.question}
                  </h3>
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-12 h-12 p-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <svg 
                      className="w-6 h-6 text-slate-300 transition-transform"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      {activeIndex === index ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </button>
                </div>
                {activeIndex === index && (
                  <p className="mt-4 text-base text-stone-800 animate-fadeIn">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;