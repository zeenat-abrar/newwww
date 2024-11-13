import React from "react";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";

interface BackgroundBeamsWithCollisionSectionProps {
  knowMoreButtonHref?: string;
  heading: string;
  title?: string;
  description?: string;
}

export function BackgroundBeamsWithCollisionSection({ knowMoreButtonHref, heading, description, title }: BackgroundBeamsWithCollisionSectionProps) {
  return (
    <BackgroundBeamsWithCollision
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-ivindigo-500"
    >
      <div className="xl:max-w-[100rem] xl:mx-auto flex flex-col items-center text-center px-[3%] xl:px-[105px] space-y-4">
        {/* Heading */}
        <h1 className="text-mobileHeading xl:text-2xl font-bold text-white tracking-tight">{heading}</h1>

        {/* First Paragraph */}
        <p className="text-mobileSubHeading xl:text-xl font-bold text-white">{title}</p>

        {/* Second Paragraph */}
        <p className="text-mobileParagraph xl:text-base text-white">{description}</p>

        <div className="py-2 xl:p-5">{knowMoreButtonHref != undefined && <PrimaryWhiteButton text={"Know more"} href={knowMoreButtonHref} />}</div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
