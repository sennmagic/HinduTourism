import React from "react";
import Image from "next/image";
import ShowCase from "@/components/tempelates/Showcase";
import HeroSection from "@/components/organisms/HeroSection";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import Testimonial from "@/components/organisms/HeroSection/Testimonial";
import InfoHeader from "@/components/atoms/TextHeadings/InfoHeader";
import BigShowcase from "@/components/tempelates/Fullshowcase";
import { fetchAPI } from "@/utils/apiService";

const Step = ({ step }) => (
  <div className="flex flex-col sm:flex-row gap-8">
  <div  
      className={`w-12 h-12 rounded-[13px] flex items-center justify-center sm:w-16 sm:h-12 ${step.bgColor} flex-shrink-0`}
    >
      <img src={step.icon} alt={step.title} className="w-8 h-8" />
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-stone-800 text-lg font-semibold">{step.title}</div>
      <div className="text-sm text-gray-500 w-[300px] md:w-[466px] overflow-hidden">
  {step.description}
</div>

    </div>
  </div>
);

const Home = async ({params}) => {
  const data = await fetchAPI("temples", "GET", null, null, params.slug);

  const steps = [
    {
      number: 1,
      title: " Visit the Contact Us or Customize Your Trip Page",
      description: " Choose your destinations, travel dates, transport, and accommodation preferences. ",
      bgColor: "bg-yellow-400",
      icon: "/images/selection1.svg",
    },
    {
      number: 2,
      title: "Fill Out the Enquiry Form",
      description: "Provide your details and submit.",
      bgColor: "bg-orange-light",
      icon: "/images/line.svg",
    },
    {
      number: 3,
      title: "Get a Quick Response",
      description: "We’ll send you a customized quote and details shortly.",
      bgColor: "bg-cyan-500",
      icon: "/images/taxi.svg",
    },
  ];

  return (
    <section>
      <HeroSection />
      <ShowCase  data={data.data} />
      <div className="max-w-7xl my-spacer mx-auto px-4 sm:px-6 lg:px-8">

    <InfoHeader text={"QUICK & EASY"} />
    <TextHeader text={"How to Send an Enquiry."} align="left" size="small" specialWordsIndices="2, 3, 4" />

      <div className="flex flex-col gap-2">
    
      </div>

  <div className="mt-10 flex flex-col lg:flex-row justify-start items-start gap-9">
    {/* Left Content Section */}
    <div className="w-full lg:w-[671px] flex flex-col justify-start gap-16">
      {/* Title Section */}
  
      {/* Steps Section */}
      <div className="flex flex-col gap-20">
        {steps.map((step) => (
          <Step key={step.number} step={step} />
        ))}
      </div>
    </div>

    {/* Right Image Section */}
    <div className="relative w-full lg:w-[498px] flex-shrink-0 self-start">
      <div className="absolute inset-0 w-[80%] h-[50%] top-20 left-1/2 transform -translate-x-1/2 bg-orange-600 rounded-full blur-[100px] opacity-80 lg:opacity-60"></div>

      {/* Main Card */}
      <div className="relative z-10 p-4 bg-white rounded-3xl shadow-lg flex flex-col gap-2 sm:w-full">
        <div className="w-full h-[217px] bg-black/20 rounded-2xl overflow-hidden">
          <img src="/images/mountain.svg" alt="Mountain" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="text-orange-800 text-xs font-light tracking-tight">Wishlist</div>
          <div className="text-stone-800 text-base font-normal">Trip to Nepal</div>
        </div>
      </div>



      {/* Floating Card */}
      <div
        className="relative w-[60%] sm:w-[40%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] 
        left-[67%] md:left-[70%] lg:left-[80%] xl:left-[80%] 2xl:left-[85%] 
        transform -translate-x-1/2 bottom-[30px] p-[12px] bg-white rounded-[18px] shadow-lg flex flex-col gap-[8px] z-10"
      >
        <div className="flex items-center gap-3">
          <div className="text-xl font-semibold">📌</div>
          <div className="text-stone-800 text-base">Marpha, Mustang</div>
        </div>
        <div className="text-slate-300 text-xs">Creds: Aakash Gautam on Flickr</div>
      </div>
    </div>
  </div>
</div>


     

      <div className="max-w-7xl mx-auto px-6">
     <InfoHeader text={"TESTIMONAL"} />
        <TextHeader text={"What people say about us."} size="small" align="left" className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3" specialWordsIndices="4" />
      </div>

      <Testimonial />
       <div className="relative w-full">
              <div className="relative w-full">
                <Image
                  src="/images/pashupati.svg"
                  width={671}
                  height={471}
                  
                  className="w-full object-cover !border-none !rounded-none" // Explicitly no border and no rounding
                  alt="Big Showcase of Nepal"
                />
              </div>
      
              {/* Centering the content */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Is this Heaven? <br />
                    <span className="italic">No, it’s <em>Nepal</em>.</span>
                  </h1>
                  
                 
                  <button className="mt-4 px-8 py-3 bg-orange-light text-white font-semibold hover:bg-orange-light transition duration-300 !rounded-none">
                  <a href="https://www.instagram.com/thehindutourism/">                    Learn more about #Experience on Instagram
                  </a>
                  </button>
                </div>
              </div>
            </div>
      <BigShowcase />

   
      
      
    </section>
  );
};

export default Home;