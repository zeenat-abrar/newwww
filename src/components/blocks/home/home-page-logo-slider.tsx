import Image from "next/image";
import React from "react";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface LogoSliderProps {
  heading: string;
  description?: string;
  firstButtonText?: string;
  secondButtonText?: string;
  logos: string[];
}

const HomePageLogoSlider: React.FC<LogoSliderProps> = ({ heading, logos }) => {
  const dynamicHeading = heading.split("|");

  return (
    <>
      <section className="w-full pt-20 pb-16">
        {/* Description Section */}
        {/* {description && (
          <div className="container text-center mb-6">
            <p>{description}</p>
          </div>
        )} */}
        {/* Text Section */}
        <div className="text-center">
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
        </div>
      </section>
      <div className={cn("slider pb-24 overflow-hidden", "slider")} style={{ mixBlendMode: "multiply" }}>
        <div className={cn("slide-track flex gap-20 w-[200%] animate-scroll", "slider")}>
          {logos.concat(logos).map((logo, index) => (
            <div className={cn("slide flex-none", "slider")} key={index}>
              <Image src={logo} alt="logos" width={250} height={100} className="w-full h-24" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageLogoSlider;
