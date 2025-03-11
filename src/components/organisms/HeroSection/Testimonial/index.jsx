import TextHeader from "@/components/atoms/TextHeadings/Header";
import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    quote:
     "My journey to Pashupatinath and Muktinath with theHinduTourism was truly divine. The VIP darshan arrangements and luxury travel made the entire experience seamless. The team ensured every detail was taken care of, allowing me to focus purely on my spiritual journey. Highly recommended!"
,
    name: "Rahul tripathi",
    designation: "Devotee from Delhi, India",
    image: "/images/rahul.jpg",
  },
  {
    quote:
      "As a senior citizen, I was worried about the long travel, but the HinduTourism provided a well-planned, comfortable trip. The personalized assistance and medical support made my pilgrimage to Muktinath hassle-free. The helicopter ride was an unforgettable experience!"
,
    name: "Murari Das",
    designation: "Traveler from  Chennai, India",
    image: "/images/murari.jpg",
  },
  {
    quote:
      "I wanted a spiritual retreat with my family, and theHinduTourism made it happen flawlessly. From Manakamana to Pashupatinath, everything was meticulously arranged. The attention to detail, from cultural insights to temple rituals, made this a truly divine journey.",
    name: "Gyatri Modi",
    designation: "Pilgrim from Punjab , India",
    image: "/images/gyatri.jpg",
  },
  {
    quote:
    "We booked a customized pilgrimage package, and it exceeded our expectations. The five-star accommodations, private chauffeur, and exclusive darshan arrangements were outstanding. The team’s dedication to ensuring a luxurious and spiritually fulfilling trip was commendable.",
   
    name: "Harpreet Singh",
    designation: "Devotee from Punjab, India",
    image: "/images/Harpreet.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className=" overflow-hidden mb-24">
      {/* Header Section */}
      <div className=" flex flex-col items-start gap-4">
        <div className="self-stretch flex flex-col items-start gap-2">
     
        </div>

        {/* Marquee Section */}
        <Marquee speed={30} gradient={false}>
          <div className="flex gap-9">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center h-[356px] p-6 overflow-hidden"
              >
                <div className="relative w-[503px] h-[302px] overflow-hidden">
                  <div className="absolute left-9 top-8 bg-white p-8 rounded-lg shadow-lg flex flex-col gap-4">
                    <p className="text-gray-500 text-base font-normal">
                      {testimonial.quote}
                    </p>
                    <div>
                      <h4 className="text-gray-500 text-lg font-semibold">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm font-medium">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute left-0 top-0 w-[68px] h-[68px] rounded-full"
                    src={testimonial.image}
                    alt={`${testimonial.name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
