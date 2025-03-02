import React from 'react';

const DescriptionText = ({ 
  text, 
  size = "medium", 
  className = "", 
  width = "auto", 
  height = "auto" 
}) => {
  let sizeClasses;

  // Adjust font size based on text length
  if (text.length > 200) {
    sizeClasses = "font-inter font-normal text-[10px] leading-4";
  } else if (text.length > 100) {
    sizeClasses = "font-inter font-normal text-[12px] leading-5";
  } else {
    // Default styling based on size prop
    sizeClasses = size === "small"
      ? "font-inter font-normal text-[14px] leading-5 text-left underline-position-from-font decoration-skip-ink-none"
      : "font-inter font-normal text-[14px] leading-6";
  }

  return (
    <p 
      className={`${sizeClasses} ${className} sm:text-[16px] md:text-[18px] lg:text-[20px]`}
      style={{ width, height }}
    >
      {text}
    </p>
  );
};

export default DescriptionText;
