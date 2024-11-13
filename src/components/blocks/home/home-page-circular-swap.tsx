"use client";
import Image from "next/image";
import React from "react";

import Automation from "@/assets/homepage/circular-slider-icons/automation.svg";
import DataApp from "@/assets/homepage/circular-slider-icons/data-app.svg";
import MagnifyingGlass from "@/assets/homepage/circular-slider-icons/magnifying-glass.svg";
import Stairs from "@/assets/homepage/circular-slider-icons/stairs.svg";
import SmartIndustryRobot from "@/assets/homepage/industries-section-image/smart-industry-robot.avif";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";

interface IndustriesProps {
  rightheading: string;
  rightdescription: string;
  customerStoryButtonHref: string;
  knowMoreButtonHref: string;
}

const bulletPoints = [
  {
    heading: "Insights",
    description: "Create interactive visualizations to provide actionable insights. Weave engaging narratives, tailored for impact",
    icon: Stairs,
    alt: "Infoveave-insights logo",
  },
  {
    heading: "Analysis",
    description: "Explore patterns to predict outcomes. Perform impactful analyses using What-If, AutoML & Python",
    icon: MagnifyingGlass,
    alt: "Infoveave-analysis logo",
  },
  {
    heading: "Automation",
    description: "Setup intelligent data pipes to stream line processes, reduce manual tasks and enhance data flows",
    icon: Automation,
    alt: "Infoveave-automation logo",
  },
  {
    heading: "Data apps",
    description: "Build data driven apps that enable last mile data collection. Link to automations and trigger actions",
    icon: DataApp,
    alt: "Infoveave-data apps logo",
  },
];

export default function InsightsAndAutomationSection({ rightheading, rightdescription, knowMoreButtonHref, customerStoryButtonHref }: IndustriesProps) {
  return (
    <section
      className="bg-ivindigo-500 py-10"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="xl:max-w-[100rem] xl:mx-auto flex flex-col lg:flex-row gap-8 py-4 md:py-14 sm:pt-28 px-[3%] xl:px-[104px]">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex items-center">
          <div className="flex flex-col items-start justify-end w-full gap-8">
            {bulletPoints.map((ele) => (
              <div key={ele.heading} className="flex justify-start items-center">
                <div className="flex justify-center gap-5">
                  <Image src={ele.icon} alt={ele.alt} width={50} height={50} />

                  <div className="flex flex-col items-start">
                    <h1 className="text-white text-mobileSubHeading md:text-xl  font-bold">{ele.heading}</h1>
                    <p className="text-gray-50 text-mobileParagraph xl::text-base">{ele.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="mx-auto lg:mx-0">
              <PrimaryWhiteButton text="Know more" href={knowMoreButtonHref} />
            </div>
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
          <div className="relative text-center py-10 px-5 md:p-20 xl:px-10 z-10">
            <h1 className="text-mobileHeading xl:text-2xl md:text-2xl font-bold mb-7 md:mb-20 text-white">{rightheading}</h1>
            <p className="text-mobileParagraph xl:text-xl mb-7 md:mb-24 text-white md:font-semibold xl:leading-8">{rightdescription}</p>
            <div className="flex justify-center">
              <PrimaryWhiteButton text="Customer Story" href={customerStoryButtonHref} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
