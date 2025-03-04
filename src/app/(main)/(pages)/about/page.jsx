import React from "react";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import Showcase from "@/components/tempelates/Fullshowcase";
import Breadcrumb from "@/components/atoms/BreadCrumb";
import HeaderBanner from "@/components/organisms/HeaderBanner";
import DescriptionText from "@/components/atoms/TextDescription/TextDescription";
const AboutUs = () => {
  return (
    <>
  <Breadcrumb currentnavlink={'About'}/>
  <HeaderBanner 
  title="About Us"
  subtitle=""
  backgroundImage="/images/abouthero.svg"
  photoCredit="AP Photo/Niranjan Shrestha"
/>

      <div className="max-w-7xl mx-auto my-spacer px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-16">
        <div className="flex-1">
          <TextHeader text="“We believe spiritual journeys are for all”" size="small" align="start" />
          <div className="flex items-center gap-3 mt-[28px]">
            <img
              className="w-[54px] h-[54px] rounded-full"
              src="/images/adiraj.jpg"
              alt="founder image"
            />
            <div>
              <div className="text-[#f05a28] text-xl font-semibold font-['Inter'] leading-relaxed">
              Adhiraj Regmi
              </div>
              <div className="text-[#3e3f41] text-sm font-normal font-['Inter'] leading-[21px]">
              Co Founder & MD              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {testimonialData.map((text, index) => (
            <p key={index} className="text-[#2b2727] text-base font-normal font-['Inter'] leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-spacer flex flex-col gap-12 px-10  md:px-6 lg:px-8">
  {/* Header Section */}
  <div className="w-full flex flex-col justify-start items-start gap-2">
    <div className="w-full md:w-[336px] text-[#ac3c16] text-xs font-normal uppercase leading-[18px] tracking-tight">
      Our core
    </div>
    <TextHeader
      text="What we value:"
      size="small"
      specialWordsIndices="2"
      align="start"
    />
  </div>

  {/* Core Values Section */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
    {coreValues.map((value) => (
      <div
        key={value.id}
        className="relative w-full max-w-[336px] px-6 md:px-8 pt-12 md:pt-16 pb-16 md:pb-[132px] bg-white rounded-[10px] shadow-md flex flex-col justify-start items-start gap-5"
      >
        <div
          className="flex justify-center items-center rounded-[13px] mb-4"
          style={{
            backgroundColor: value.bgColor,
            width: "64px",
            height: "50px",
            padding: "13px 16px",
          }}
        >
          <img
            src={value.image}
            alt={value.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-[#5e6282] text-sm md:text-base leading-normal">
          <span className="font-bold">{value.title}</span> <br />
          <span className="font-normal text-left">{value.description}</span>
        </div>
      
      </div>
    
    ))}
  </div>


</div>



      {/* Team Members Section */}
      {/* <div className="max-w-7xl mx-auto my-spacer flex flex-col px-6 gap-12">
        <div className="text-left">
          <div className="text-[#ac3c16] text-xs font-normal font-['Inter'] leading-[18px] tracking-tight mb-2">
            Meet the team
          </div>
          <TextHeader
            text="Team behind the scene:"
            size="small"
            align="start"
            specialWordsIndices="0"
          />
        </div> */}
{/* 
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 md:gap-32 lg:gap-32 gap-10">
          {teamMembers.map((member, index) => (
          <></>
          ))}
        </div>
      </div> */}

      {/* Showcase Section */}
   
      <Showcase textheader={"Footprint of devotees:"} infoheader={"Tracing journeys online"}/>
    </>
  );
};

// // Team Member Card Component
// const TeamMemberCard = ({ member }) => {
//   return (
//     <div className="flex flex-col items-center gap-2 sm:gap-0 md:gap-5">
//       <img
//         className="w-[140px] h-[180px] sm:w-[160px] sm:h-[220px] md:w-[200px] md:h-[260px] rounded object-cover"
//         src={member.image}
//         alt={member.name}
//       />
//       <div className="text-center">
//         <div className="text-[#2b2727] text-sm sm:text-base md:text-lg font-semibold font-['Inter'] leading-[1.5]">
//           {member.name}
//         </div>
//         <div className="text-[#5e6282] text-xs sm:text-sm md:text-base font-normal font-['Inter'] leading-[1.5]">
//           {member.role}
//         </div>
//       </div>
//     </div>
//   );
// };


// Data arrays for content sections
const testimonialData = [
  `Welcome to our platform, where we blend spirituality with luxury and convenience to bring you the finest pilgrimage experiences in Nepal. As the founder, I believe in offering not just a trip, but a transformative journey to the sacred temples of Pashupatinath, Muktinath, and Manakamana — along with other destinations that hold deep spiritual significance.

  Our mission is to create customized experiences that cater to your needs, whether you seek the ultimate luxury or a peaceful, meaningful pilgrimage. With a focus on comfort, safety, and devotion, we ensure that your journey is as enriching and memorable as possible.

  I invite you to explore our packages and connect with us. Let us be a part of your spiritual journey, and we'll take care of the rest.`,
];


const teamMembers = [
  { name: "Sasha K.C.", role: "Operations", image: "/images/people.svg" },
  { name: "Aarav Sharma", role: "Designer", image: "/images/people.svg" },
  { name: "Isha Thapa", role: "Developer", image: "/images/people.svg" },
  { name: "Liam Adhikari", role: "Marketing", image: "/images/people.svg" },
  { name: "Aarav Sharma", role: "Designer", image: "/images/people.svg" },
  { name: "Aarav Sharma", role: "Designer", image: "/images/people.svg" },
  { name: "Aarav Sharma", role: "Designer", image: "/images/people.svg" },
  { name: "Aarav Sharma", role: "Designer", image: "/images/people.svg" },
];

const coreValues = [
  {
    id: 1,
    title: "Cultural Preservation",
    description:
      "We celebrate and protect the rich heritage of Hindu temples, rituals, and stories for generations to come.",
    bgColor: "#f0bb1f",
    image: "/images/namaskaricon.svg", // Path to the image
  },
  {
    id: 2,
    title: "Devotion and Reverence",
    description:
      "We honour the sacred traditions and ensure every journey fosters a deeper connection with the divine and sacred.",
    bgColor: "#f05a28",
    image: "/images/streak.svg", // Path to the image
  },
  {
    id: 3,
    title: "Inclusive Spirituality",
    description:
      "We believe everyone deserves access to the transformative power of sacred travel, regardless of background or beliefs.",
    bgColor: "#006380",
    image: "/images/om.svg", // Path to the image
  },
];

export default AboutUs;
