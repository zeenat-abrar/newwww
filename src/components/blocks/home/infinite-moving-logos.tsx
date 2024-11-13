"use client";
import { StaticImageData } from "next/image";
import React from "react";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import TopSubHeading from "@/components/ui/headings/top-sub-heading";
import { InfiniteMovingLogos } from "@/components/ui/logos/infinite-moving-logos";

interface ClientsMovingLogos {
  heading: string;
  logos1: StaticImageData[];
  logos2: StaticImageData[];
  logos3: StaticImageData[];
}

export function ClientsMovingLogos({ heading, logos1, logos2, logos3 }: ClientsMovingLogos) {
  const dynamicHeading = heading.split("|");
  return (
    <div className="py-10 md:py-20">
      <div className="mb-[-10px] sm:mb-0">
        <TopSubHeading text="OUR CLIENTS" />
      </div>
      <div className="flex justify-center items-center mb-1 md:mb-8">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos1} direction="left" speed="slow" />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos2} direction="right" speed="slow" />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos3} direction="left" speed="slow" />
      </div>
    </div>
  );
}
