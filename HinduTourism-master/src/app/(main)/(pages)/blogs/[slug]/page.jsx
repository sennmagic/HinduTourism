import React from "react";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import Image from "next/image";
import Button from "@/components/atoms/Button";

import BlogCardContainer from "@/components/cards/BlogCard";
import Sidenavbar from "@/components/NavBar/side-navbar";
import { fetchAPI } from "@/utils/apiService";

const Blogpage = async ({ params }) => {
 
  const data = await fetchAPI("blogs", "GET", null, null , params.slug) || {};
  const blogdata = data.data;

  const cards = [
    {
      category: "Travel tips",
      title: "Sacred Journeys: Exploring Nepal’s Most Revered Hindu Temples",
      description:
        "Nepal, the land of mysticism and spirituality, is home to some of the most sacred Hindu temples in the world. Devotees from...",
    },
    {
      category: "Adventure",
      title: "The Ultimate Guide to Trekking in the Himalayas",
      description:
        "Discover the breathtaking trails and challenges of trekking in the Himalayas. From Everest Base Camp to Annapurna Circuit...",
    },
    {
      category: "Adventure",
      title: "The Ultimate Guide to Trekking in the Himalayas",
      description:
        "Discover the breathtaking trails and challenges of trekking in the Himalayas. From Everest Base Camp to Annapurna Circuit...",
    },
  ];

  const temples = [
    {
      title: "A Divine Journey to Pashupatinath: Nepal’s Holiest Temple",
      description: `
  Nepal, the land of temples, is home to one of the most revered Hindu temples in the world—Pashupatinath Temple. Dedicated to Lord Shiva, this sacred site holds a deep spiritual significance and is a must-visit destination for every Hindu traveler.
  
  In this blog, we dive into the historical and spiritual importance of Pashupatinath, explore its stunning architecture, and offer insights on how to make your visit memorable. Whether you are seeking blessings, solace, or spiritual awakening, Pashupatinath offers an unparalleled experience.
  
  We also discuss the various pilgrimage services available, such as VIP Darshan, guided tours, and luxury travel packages. With thehindutourism.com, your journey to Pashupatinath can be tailored to your preferences, ensuring comfort, convenience, and divine blessings along the way.
      `,
      image: "/images/pashupati.svg",
      tip: "Due to its high altitude, it’s advisable to acclimate properly before visiting. The best time to travel is between March and June or September and November.",
    },
    {
      title: "Why Muktinath Should Be Your Next Pilgrimage Destination",
      description: `
  Muktinath Temple stands at an altitude of 3,710 meters in the Himalayas, offering both a spiritual and physical elevation. Known as the 'Temple of Liberation,' Muktinath holds immense significance in Hinduism and Buddhism alike.
  
  In this blog, we highlight the spiritual benefits of visiting Muktinath, including the belief that a pilgrimage here grants salvation (Mukti) and cleanses sins. We also guide visitors through the experience of bathing in the 108 sacred water spouts and immersing themselves in the peaceful atmosphere of the temple.
  
  We also offer details on how you can reach Muktinath, including helicopter tours and luxury vehicle options with thehindutourism.com, ensuring a smooth and safe journey. Whether you’re looking for a quick spiritual retreat or an adventurous journey, Muktinath is the perfect destination.
      `,
      image: "/images/manakamana.svg",
      tip: "Due to its high altitude, it’s advisable to acclimate properly before visiting. The best time to travel is between March and June or September and November.",
    },
    {
      title: "Manakamana: A Sacred Temple of Wishes and Blessings",
      description: `
  Manakamana Temple, located in the picturesque hills of Gorkha, is known as the temple of wishes. Devotees believe that the goddess Bhagwati fulfills all wishes made with devotion, making this temple a popular pilgrimage site for people seeking divine intervention.
  
  In this blog, we explore the legend of Manakamana and its importance in Hindu faith. We also provide insights into how visitors can reach the temple via a scenic cable car ride, offering panoramic views of the surrounding mountains and lush landscapes.
  
  We further discuss the spiritual significance of the temple and why it’s an essential stop for anyone undertaking a pilgrimage in Nepal. With thehindutourism.com, visitors can enjoy comfortable travel options and personalized services, ensuring a seamless experience as they seek blessings from Goddess Bhagwati.
      `,
      image: "/images/muktinath.svg",
      tip: "Weekends and festival days can be crowded, so visit on a weekday for a peaceful darshan.",
    },
  ];
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="w-full flex flex-col gap-3 items-center text-center">
        <div className="inline-flex px-3 py-1 bg-white rounded-2xl">
          <span className="text-[#8b91a2] text-sm font-normal"><span className="text-[#8b91a2] text-sm font-normal">
  {blogdata.category?.name ?? "Untitled"}
</span>
</span>
        </div>
        <TextHeader text={blogdata?.title || "Untitled Blog Post"} size="small" />
        <div className="flex items-center gap-2 text-[#5e6282] text-sm font-normal">
          <span>January, 2025</span>
          <span className="border-l border-[#c1c4d6] h-5"></span>
          <span>3 mins read</span>
        </div>
      </div>

      <div className="relative w-full mt-6 mb-24">
        <Image
          className="w-full h-auto object-cover"
          src="/images/pashupati.svg"
          alt="Sacred Hindu Temple"
          layout="responsive"
          width={800}
          height={400}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div id="overview" className="flex-1 space-y-12">
          <p className="text-gray-900 text-base leading-normal">
{blogdata.content}
          </p>
          {temples.map((temple, index) => (
            <div key={index} id={temple.title} className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">{temple.title}</h2>
              <p className="text-base text-gray-900">{temple.description}</p>
              <p className="text-base font-bold text-orange-600">
                Tip: <span className="font-normal text-gray-900">{temple.tip}</span>
              </p>
              <Image src={temple.image} alt={temple.title} width={1000} height={300} layout="responsive" />
              <Button text="Know more" variant="default" size="medium" />
            </div>
          ))}
        </div>
        <Sidenavbar />
      </div>
{/* 
      <div className="my-spacer">
        <TextHeader text="You may also like:" align="start" size="small" specialWordsIndices="3" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-6">
          {cards.map((card, index) => (
            <BlogCardContainer key={index} {...card} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Blogpage;