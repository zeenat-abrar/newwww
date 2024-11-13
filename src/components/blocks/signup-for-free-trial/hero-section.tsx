"use client";
import Image from "next/image";
import Automation from "@/assets/homepage/circular-slider-icons/automation.svg";
import DataApp from "@/assets/homepage/circular-slider-icons/data-app.svg";
import MagnifyingGlass from "@/assets/homepage/circular-slider-icons/magnifying-glass.svg";
import Stairs from "@/assets/homepage/circular-slider-icons/stairs.svg";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { SignUpForFreeTrial } from "@/components/blocks/signup-for-free-trial/signup-form";

const bulletPoints = [
  {
    heading: "Insights",
    description: "Create interactive visualizations to provide actionable insights. Weave engaging narratives, tailored for impact",
    icon: Stairs,
  },
  {
    heading: "Analysis",
    description: "Explore patterns to predict outcomes. Perform impactful analyses using What-If, AutoML & Python",
    icon: MagnifyingGlass,
  },
  {
    heading: "Automation",
    description: "Setup intelligent data pipes to stream line processes, reduce manual tasks and enhance data flows",
    icon: Automation,
  },
  {
    heading: "Data apps",
    description: "Build data driven apps that enable last mile data collection. Link to automations and trigger actions",
    icon: DataApp,
  },
];
export default function HeroSectionSignUp() {
  return (
    <div
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      className="bg-ivindigo-500 py-10 pb-20"
    >
      <div className="xl:max-w-[100rem] xl:mx-auto px-[3%] xl:px-[104px] flex flex-col lg:flex-row items-center justify-between w-full md:gap-12">
        {/* Content Section */}
        <div className="flex flex-col items-start w-full lg:w-1/2 gap-8 mb-24 lg:mb-0">
          <h1 className="text-xl font-semibold md:text-2xl text-white">Unified Data Platform</h1>
          {bulletPoints.map((ele) => (
            <div key={ele.heading} className="flex justify-start items-center">
              <div className="flex justify-center gap-5">
                <Image src={ele.icon} alt="stairs" width={50} height={50} />
                <div className="flex flex-col items-start">
                  <h1 className="text-white text-base md:text-xl font-bold">{ele.heading}</h1>
                  <p className="text-gray-50 md:text-base">{ele.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center xl:justify-end w-full lg:w-1/2">
          <SignUpForFreeTrial />
        </div>
      </div>
    </div>
  );
}
