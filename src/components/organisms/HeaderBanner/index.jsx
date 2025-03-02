import React from 'react';
import TextHeader from '@/components/atoms/TextHeadings/Header';
import Image from 'next/image';

const HeaderBanner = ({
  title,
  subtitle,
  backgroundImage,
  titleColor = "white",
  subtitleColor = "", // Set default color to white
  photoCredit,
}) => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="w-full">
        <Image
          className="w-full h-full object-cover"
          src={backgroundImage}
          alt="Background"
          width={200}
          height={200}
          fetchPriority="high"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <TextHeader 
  text={title} 
  size="medium" 
  color={titleColor} 
  align="center" 
  className="hidden md:block"  // This hides on mobile, shows from md breakpoint up
/>
        {subtitle && (
          <p
            className={`mt-4 text-${subtitleColor} text-2xl font-light font-['Inter'] leading-normal`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Photo Credit (Optional) */}
      {photoCredit && (
        <div className="absolute bottom-2 right-4 text-[#efeee8] text-xs font-light font-['Inter']">
          Photo credit: {photoCredit}
        </div>
      )}
    </div>
  );
};

export default HeaderBanner;
