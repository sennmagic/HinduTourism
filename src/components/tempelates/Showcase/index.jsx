import React from "react";
import ImageShowcase from "./ImageShowcase";
import ContentShowcase from "./ContentShowcasse";
import TextHeader from "@/components/atoms/TextHeadings/Header";

import InfoHeader from "@/components/atoms/TextHeadings/InfoHeader";

const Showcase = ({ layout = "right", data }) => {
  
  const templeList = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 sm:px-6 lg:px-8 py-8 overflow-hidden">
      <div>
        <InfoHeader text="EXPLORE" />
        <TextHeader text=" Hindu tourism in Nepal:" size="small" align="start" specialWordsIndices="2 , 3" />
      </div>

      {data.map(({ _id, name, subtitle, description, ctaText = "Know More", images , slug }, index) => {
        // Limit description to 20 words
        const shortDescription = description
          ? description.split(" ").slice(0, 20).join(" ") + (description.split(" ").length > 30 ? "..." : "")
          : "";

        return (
          <section
            key={_id}
            className={`flex flex-col md:flex-row ${index % 2 === 0 ? "" : "md:flex-row-reverse"} items-center justify-center gap-[80px] py-10 overflow-hidden`}
          >
            {/* Image Showcase with fallback image */}
            <ImageShowcase title={name} />

            {/* Content Showcase */}
            <ContentShowcase
              title={name}
              subtitle={subtitle || "Explore the spiritual journey"}  
              description={description}  // Display the limited description
              ctaText={ctaText}
              index={index}
              slug={slug}
            />
          </section>
        );
      })}
    </div>
  );
};

export default Showcase;
