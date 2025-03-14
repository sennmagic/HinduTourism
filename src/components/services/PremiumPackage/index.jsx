"use client";
import { useEffect, useRef } from "react";
import Button from "@/components/atoms/Button";
import TextHeader from "@/components/atoms/TextHeadings/Header";
import InfoHeader from "@/components/atoms/TextHeadings/InfoHeader";
import Link from "next/link";

const Premiumpackage = ({ data=[] }) => {
  const packagedata= data.data
  const sectionRefs = useRef({});

  return (
    <div className="w-full max-w-7xl px-6 md:wmy-spacer mx-auto flex flex-col h-full md:gap-12  ">
      {packagedata?.map((pkg, idx) => (
        <div
          key={pkg._id}
          ref={(el) => (sectionRefs.current[pkg.name] = el)}
          id={pkg.name.toLowerCase().replace(/\s+/g, "-")}
          className="w-full flex flex-col md:flex-row gap-8 pb-6 md:pb-20 lg:pb-20 scroll-mt-24"
        >
          {/* Left Section */}
          <div className="w-full md:w-1/3 px-6 flex flex-col gap-6">
            <div className="sticky top-40 pt-10 z-10 pb-6">
              <TextHeader
                text={pkg.name}
                size="small"
                color="red"
                className="w-1/2 "
                align="start"
              />
<p className=" py-4">

{pkg.description}

</p>
              <Link href={"/contact"}>
                <Button
                  text="SEND ENQUIRY"
                  variant="wholyrounded"
                  size="small"
                  textcolor="white"
                  color="red"
                  bordercolor="white"
                  className="mt-4"
                />
              </Link>
            </div>
          </div>

          
          <div className="flex-1 flex flex-col gap-2 px-6">
            <div className="space-y-6">
          
              <div className="flex flex-col gap-8">
                {pkg.itinerary.length > 0 ? (
                  pkg.itinerary.map((item, index) => (
                   <></>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* Cost Details Section */}
            <div className="space-y-6 ">
              <InfoHeader text="Cost details" />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 p-6 bg-[#edffe9] rounded-lg shadow-lg space-y-4">
                  <h4 className="text-[#00825d] font-bold text-lg">INCLUDED:</h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <img src="/images/correcticon.png" alt="" width={20}  height={20}/>
                        <span className="text-[#2b2727] leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 p-6 bg-[#fdf0ed] rounded-lg shadow-lg space-y-4">
                  <h4 className="text-[#d14343] font-bold text-lg">NOT INCLUDED:</h4>
                  <ul className="space-y-3">
                    {pkg.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
 <img src="/images/wrongico.svg" alt="" width={20}  height={20}/>                        <span className="text-[#2b2727] leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Premiumpackage;