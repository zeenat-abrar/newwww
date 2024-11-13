"use client";
import Link from "next/link";
import React from "react";
import SmartIndustryRobot from "@/assets/homepage/industries-section-image/smart-industry-robot.avif";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryButtonSmall from "@/components/ui/buttons/primary-button-small";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";

interface IndustriesProps {
  heading: string;
  description: string;
  rightheading: string;
  rightdescription: string;
  customerStoryButtonHref: string;
  industryButtonHref: string;
}

// Card data
const cards = [
  { id: 1, title: "Retail", description: "Increase overall operational efficiency.", href: "/retail-analytics-solutions" },
  { id: 2, title: "Energy & Utilities", description: "Improve customer segmentation.", href: "/energy-analytics-solutions" },
  { id: 3, title: "Healthcare", description: "Gain insights into patient acquisition.", href: "/healthcare-analytics-solutions" },
  { id: 4, title: "Automotive", description: "Optimize sales & streamline distribution.", href: "/automotive-analytics-solutions" },
];
export default function IndustriesSection({
  heading,
  description,
  rightheading,
  rightdescription,
  customerStoryButtonHref,
  industryButtonHref,
}: IndustriesProps) {
  return (
    <div className="xl:max-w-[100rem] xl:mx-auto flex flex-col lg:flex-row gap-8 py-10 md:pb-20 md:pt-14 sm:pt-28 px-[3%] lg:px-[104px]">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-ivviolet-500">{heading}</h1>
        <p className="md:text-base text-center py-5">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card) => (
            <CardContainer key={card.id} className="w-full sm:w-[300px] md:w-full lg:px-0">
              <CardBody className={`relative group/card border-black/[0.1] size-full sm:w-[30rem] rounded-xl p-6 border`}>
                <CardItem className="md:text-xl font-semibold mb-1">{card.title}</CardItem>
                <CardItem className="md:text-base text-black py-3">{card.description}</CardItem>
                <div className="flex items-center">
                  <CardItem className="text-indigo-500 cursor-pointer">
                    <Link href={card.href}>
                      <PrimaryButtonSmall text="Read more" />
                    </Link>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <div className="mt-8 lg:mt-6 flex justify-center lg:justify-start">
          <PrimaryButton text="All industries" href={industryButtonHref} />
        </div>
      </div>

      {/* Right Section */}

      <div className="relative w-full lg:w-1/2 flex justify-center items-center rounded-xl overflow-hidden">
        {/* Pseudo-element for the background image with filter */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-50"
          style={{
            backgroundImage: `url(${SmartIndustryRobot.src})`,
          }}
        />
        {/* Content container */}
        <div className="relative text-center py-10 px-5 md:p-20 z-10">
          <h1 className="text-xl md:text-2xl font-bold mb-7 md:mb-20 text-white">{rightheading}</h1>
          <p className="text-xl mb-7 md:mb-24 text-white md:font-semibold leading-8">{rightdescription}</p>
          <div className="flex justify-center">
            <PrimaryWhiteButton text="Customer Story" href={customerStoryButtonHref} />
          </div>
        </div>
      </div>
    </div>
  );
}
