"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import TopSubHeading from "@/components/ui/headings/top-sub-heading";
import { cn } from "@/lib/utils";

interface BlackAndWhiteClientLogosProps {
  heading: string;
  logos: { image: StaticImageData; className: string }[];
}

export function BlackAndWhiteClientLogos({ heading, logos }: BlackAndWhiteClientLogosProps) {
  const dynamicHeading = heading.split("|");
  return (
    <div className="py-10 md:py-20 px-[3%] 2xl:px-[104px] 3xl:max-w-[100rem] mx-auto">
      <div className="mb-[-10px] sm:mb-0">
        <TopSubHeading text="OUR CLIENTS" />
      </div>
      <div className="flex justify-center items-center mb-1 xl:mb-8">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-8 my-10 items-center">
        {logos.map((logo, index) => (
          <div key={index}>
            <Image
              src={logo.image}
              alt="client logo"
              width={100}
              height={40}
              className={cn("w-full mx-auto h-8 xl:h-12 hover:scale-105", logo.className)} // Tailwind hover effect
              style={{
                filter: "grayscale(1)",
                WebkitFilter: "grayscale(1)",
                transition: "all .1s ease-in-out",
                WebkitTransition: "all .1s ease-in-out",
                opacity: "0.8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.webkitFilter = "grayscale(0)";
                e.currentTarget.style.transform = "scale(1.01)";
                e.currentTarget.style.webkitTransform = "scale(1.01)";
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "grayscale(5)";
                e.currentTarget.style.webkitFilter = "grayscale(5)";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.webkitTransform = "scale(1)";
                e.currentTarget.style.opacity = "0.8";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
