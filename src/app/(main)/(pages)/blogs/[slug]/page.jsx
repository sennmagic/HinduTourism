import React from "react";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import BlogCardContainer from "@/components/cards/BlogCard";
import Sidenavbar from "@/components/NavBar/side-navbar";
import { fetchAPI } from "@/utils/apiService";

const Blogpage = async ({ params }) => {
  const data = await fetchAPI("blogs", "GET", null, null, params.slug) || {};
  const blogdata = data.data;

  const temples = [
    {
      id: "pashupatinath",
      title: "A Divine Journey to Pashupatinath: Nepal’s Holiest Temple",
      description: `
Nepal, the land of temples, is home to one of the most revered Hindu temples in the world—Pashupatinath Temple...`,
      image: "/images/pashupati.svg",
      tip: "Due to its high altitude, it’s advisable to acclimate properly before visiting. The best time to travel is between March and June or September and November.",
    },
    {
      id: "muktinath",
      title: "Why Muktinath Should Be Your Next Pilgrimage Destination",
      description: `
Muktinath Temple stands at an altitude of 3,710 meters in the Himalayas...`,
      image: "/images/manakamana.svg",
      tip: "Due to its high altitude, it’s advisable to acclimate properly before visiting. The best time to travel is between March and June or September and November.",
    },
    {
      id: "manakamana",
      title: "Manakamana: A Sacred Temple of Wishes and Blessings",
      description: `
Manakamana Temple, located in the picturesque hills of Gorkha...`,
      image: "/images/muktinath.svg",
      tip: "Weekends and festival days can be crowded, so visit on a weekday for a peaceful darshan.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {/* Blog Header */}
      <div className="w-full flex flex-col gap-3 items-center text-center">
        <div className="inline-flex px-3 py-1 bg-white rounded-2xl">
          <span className="text-[#8b91a2] text-sm font-normal">
            {blogdata.category?.name ?? " Travel Tips"}
          </span>
        </div>
        <TextHeader text={blogdata?.title || "Hindu Tourism Blog Post"} size="small" />
        <div className="flex items-center gap-2 text-[#5e6282] text-sm font-normal">
          <span>January, 2025</span>
          <span className="border-l border-[#c1c4d6] h-5"></span>
          <span>3 mins read</span>
        </div>
      </div>

      {/* Blog Banner */}
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

      {/* Main Blog Content */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-12">
          <div id="overview">
            <p className="text-gray-900 text-base leading-normal">
              {blogdata.content}
            </p>
          </div>

          {temples.map((temple) => (
            <div key={temple.id} id={temple.id} className="space-y-4 scroll-mt-24">
              <h2 className="text-xl font-semibold text-gray-900">{temple.title}</h2>
              <p className="text-base text-gray-900 whitespace-pre-line">
                {temple.description}
              </p>
              <p className="text-base font-bold text-orange-600">
                Tip: <span className="font-normal text-gray-900">{temple.tip}</span>
              </p>
              <Image
                src={temple.image}
                alt={temple.title}
                width={1000}
                height={300}
                layout="responsive"
              />
              <Button text="Know more" variant="default" size="medium" />
            </div>
          ))}

          <div id="final-thoughts" className="space-y-4 scroll-mt-24">
            <h2 className="text-xl font-semibold text-gray-900">Final Thoughts</h2>
            <p className="text-base text-gray-900">
              Embark on your journey with devotion, and let Nepal’s sacred temples guide you toward peace and blessings.
            </p>
          </div>
        </div>

        <Sidenavbar />
      </div>
    </div>
  );
};

export default Blogpage;
