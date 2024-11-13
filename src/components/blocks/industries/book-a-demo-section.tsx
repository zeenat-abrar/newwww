"use client";
import React from "react";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { MiniBeamsWithCollision } from "@/components/ui/mini-beam-section";

export interface BookADemoSectionProps {
  heading: string;
  buttonText: string;
  href: string;
}

export function BookADemoSection({ heading, buttonText, href }: BookADemoSectionProps) {
  return (
    <MiniBeamsWithCollision
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-ivindigo-500 h-64 md:h-40"
    >
      <div className="px-[3%] xl:px-[104px] 3xl:max-w-[100rem] flex flex-col lg:flex-row items-center justify-between w-full gap-6 lg:gap-0">
        {/* First Paragraph - Taking 75% of the space */}
        <p className="text-base w-full xl:w-3/4 text-center lg:text-left md:text-base font-semibold text-white">{heading}</p>

        {/* Button - Taking 25% of the space, aligned at the center */}
        <div className="flex justify-end items-center">
          <PrimaryWhiteButton text={buttonText} href={href} />
        </div>
      </div>
    </MiniBeamsWithCollision>
  );
}

export default BookADemoSection;
