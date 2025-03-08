import React from 'react';
import HeaderBanner from '@/components/organisms/HeaderBanner';
import Midnavbar from '@/components/NavBar/mid-navbar';
import TextHeader from '@/components/atoms/TextHeadings/Header';
import InfoHeader from '@/components/atoms/TextHeadings/InfoHeader';
import Breadcrumb from '@/components/atoms/BreadCrumb';
import PremiumPackage from '@/components/services/PremiumPackage';
import { fetchAPI } from '@/utils/apiService';
import Showcase from '@/components/tempelates/Fullshowcase';
import Link from 'next/link';
const page = async ({ params }) => {
    const navItems = [
        { label: "Overview", id: "overview" },
        { label: "Premium Package", id: "premium-package" },
        { label: "Deluxe Package", id: "deluxe-package" },
        { label: "Exclusive Package", id: "exclusive-package" },
        { label: "Gallery ", id: "gallery" },
    ];

    // Fetch temple data
    const data = await fetchAPI("temples", "GET", null, null, params.slug);
    const templeData = data?.data?.[0] || {};

    // Fetch travel packages
    const packageData = await fetchAPI("travelPackages", "GET", null, null, null);

    // Set background image based on temple name
    const backgroundImages = {
        "Pashupatinath Temple": "/images/pashupati.svg",
        "Muktinath Temple": "/images/muktinath.svg",
        "Manakamana Temple": "/images/manakamana.svg"
    };
    const backgroundImage = backgroundImages[templeData?.name] || "";

    const trips = [
        {
            title: "Muktinath",
            slug: "muktinath-temple",
            description: "The gateway to salvation",
            image: "/images/tripmuktinath.svg",
        },
        {
            title: "Manakamana",
            slug: "manakamana-temple",
            description: "The temple of wishes",
            image: "/images/manakamana.svg",
        },
        {
            title: "Pashupatinath",
            slug: "pashupatinath-temple",
            description: "The holiest Hindu temple in Nepal",
            image: "/images/pashupati.svg",
        },
        {
            title: "Customize Your Trip",
            slug: "/customise-my-trip",
            description: "You can add other temples to your trip.",
            image: "/images/customizetrip.svg",
        },
    ];

    // Filter out the current temple from the "Other Trips" section
    const filteredTrips = trips.filter(trip => trip.slug !== templeData.slug);

    // Define dynamic reasons for each temple
    const reasonsMap = {
        "Pashupatinath Temple": [
            "Walk along the holy Bagmati River, believed to purify and connect devotees with the divine.",
            "Watch the beautiful evening aarti ceremony, filled with lamps, chants, and devotion.",
            "Explore the temple’s ancient architecture, with intricate carvings showing Nepal’s cultural heritage.",
            "Recognized as a UNESCO World Heritage Site."
        ],
        "Muktinath Temple": [
            "A sacred pilgrimage site for Hindus and Buddhists alike.",
            "Take a holy bath in the 108 sacred water spouts.",
            "Surrounded by breathtaking views of the Himalayas.",
            "Believed to be the gateway to salvation (Moksha)."
        ],
        "Manakamana Temple": [
            "Dedicated to Goddess Bhagwati, believed to grant wishes to devotees.",
            "Accessible via a scenic cable car ride, offering stunning views of the Himalayas.",
            "A perfect blend of spirituality and adventure.",
            "Seek divine blessings while enjoying a thrilling cable car ride over Nepal’s lush hills."
        ]
    };

    const reasons = reasonsMap[templeData?.name] || ["No specific reasons available for this temple."];

    return (
        <>
            <Breadcrumb currentnavlink={templeData.slug} />
            <HeaderBanner  backgroundImage={backgroundImage} />
            <Midnavbar navItems={navItems} />
            <div id="overview" className="py-16 mx-auto max-w-7xl px-6 flex flex-col gap-12">
                <TextHeader text={templeData?.name} color="orange.light" align="start" />
                <p className="w-full sm:w-[824px] text-[#2b2727] text-base sm:text-lg font-normal leading-normal">
                    {templeData?.description || "No description available."}
                </p>
                <div className=" flex-col gap-10 inline-flex rounded-xl">
                    <div className="w-full h-px border-2 border-[#efeee8] rounded-full mb-4"></div>
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <InfoHeader text="Why You Should Visit?" />
                        <div className="flex-col justify-start items-start gap-4 flex">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex justify-start items-center gap-3">
                                    <img src="/images/reasonarrow.svg" alt="arrow-icon" className="w-5 h-5 object-contain" />
                                    <p className="text-[#2b2727] text-lg font-normal leading-relaxed">{reason}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <PremiumPackage data={packageData} />

            {/* Other Trips Section */}
      
        {/* Other Trips Section
      {filteredTrips.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 my-spacer">
          <div className="mb-10">
            <TextHeader text="Other Trips :" specialWordsIndices="1" align="start" size="small" />
          </div>
          <div id="gallery" className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredTrips.map((trip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                     <Link href={trip.slug === "/customise-my-trip" ? "/customise-my-trip" : `/temple/${trip.slug}`}>


                  <>
                    <img 
                      src={trip.image} 
                      alt={trip.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold">{trip.title}</h3>
                      <p className="text-gray-600">{trip.description}</p>
                    </div>
                  </>
                </Link>
              </div>
            ))}
          </div>
        </section> */}
      {/* )} */}
<div id='gallery' className="">

<Showcase  />
</div>
        </>
    );
};

export default page;
