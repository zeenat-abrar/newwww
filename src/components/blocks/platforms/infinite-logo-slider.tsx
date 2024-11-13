import { StaticImageData } from "next/image";
import React from "react";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import MainHeading from "@/components/ui/headings/main-heading";
import { InfiniteMovingLogos } from "@/components/ui/logos/infinite-moving-logos";
import { cn } from "@/lib/utils";

interface InfiniteLogoSliderProps {
  heading: string;
  description: string;
  firstButtonText: string;
  secondButtonText?: string;
  logos1: StaticImageData[];
  logos2: StaticImageData[];
  logos3: StaticImageData[];
}

const InfiniteLogoSlider: React.FC<InfiniteLogoSliderProps> = ({ heading, description, logos1, logos2, logos3 }) => {
  return (
    <section
      className={cn("relative w-full bg-white py-24", "bg-ivindigo-500")}
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="w-full pb-12">
        {/* Text Section */}
        <div className="text-center mb-4">
          <MainHeading text={heading} alignText="center" colorClass="text-white" />
        </div>

        {/* Description Section */}
        {description && (
          <div className="container text-white text-center mt-2">
            <p>{description}</p>
          </div>
        )}
      </section>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos1} direction="left" speed="slow" />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos2} direction="right" speed="slow" />
      </div>
      <div className="h-full rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingLogos items={logos3} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default InfiniteLogoSlider;
