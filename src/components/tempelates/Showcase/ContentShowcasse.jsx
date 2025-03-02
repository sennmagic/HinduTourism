import React from "react";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import DescriptionText from "@/components/atoms/TextDescription/TextDescription";
import Button from "@/components/atoms/Button";
import Link from "next/link";

const ContentShowcase = ({
  title = "Pashupatinath Temple",
  subtitle = "The abode of Lord Shiva Mahadev",
  description = `One of the most sacred Hindu temples in the world, 
  Pashupatinath Temple stands as a symbol of faith and devotion. 
  Located on the banks of the Bagmati River, this UNESCO World Heritage Site 
  is renowned for its intricate architecture and spiritual aura.`,
  ctaText = "Know More",
  index = 0,
  slug=""
}) => {
  // Check for missing data and set default values
  const safeTitle = title || "Default Title";
  const safeSubtitle = subtitle || "Default Subtitle";
  const safeDescription = description || "Default description text.";
  const safeCtaText = ctaText || "Learn More";

  return (
    <div className="max-w-7xl mx-auto w-[500px]  flex flex-col justify-start items-start gap-8 overflow-hidden">
      <div className="flex flex-col gap-3">
        <div className="text-[#efede7] text-9xl font-semibold leading-none">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="flex items-center gap-4">
          <div className="w-[54px] h-[1.5px] bg-[#1eaa6e]" />
          <div className="text-[#1eaa6e] text-xs font-bold tracking-tight">
            {safeSubtitle}
          </div>
        </div>

        <TextHeader
          text={safeTitle} // Use the safeTitle if title is missing
          className="w-1/2 flex-none " // 'flex-none' prevents it from growing or shrinking
          size="medium"
          align="left"
        />
        <DescriptionText
          text={safeDescription} // Use the safeDescription if description is missing
          width=""
          className="w-[300px] sm:w-[200px] md:w-[468px] lg:w-[468px] text-sm leading-[21px] md:text-base md:leading-7 lg:text-lg lg:leading-8"
          size="medium"
        />
      </div>
   <Link href={`/temple/${slug}`}>
   <Button
        text={safeCtaText} // Use the safeCtaText if ctaText is missing
        color="orange-light"
        variant="default"
        size="medium"
      />
   
   </Link>
    </div>
  );
};

export default ContentShowcase;
