"use client";
import Image from "next/image";
import Link from "next/link";
import Automation from "@/assets/homepage/circular-slider-icons/automation.svg";
import AddOperationalEfficiency from "@/assets/homepage/circular-slider-icons/carousel/add-operational-efficiency.svg";
import AvoidRepetitiveErrors from "@/assets/homepage/circular-slider-icons/carousel/avoid-repetitive-errors.svg";
import BetterFinanceControl from "@/assets/homepage/circular-slider-icons/carousel/better-finance-control.svg";
import BoostCustomerRetention from "@/assets/homepage/circular-slider-icons/carousel/boost-customer-retention.svg";
import EnhanceRevenueGains from "@/assets/homepage/circular-slider-icons/carousel/enhance-revenue-gains.svg";
import MaximizeBillingEfficiency from "@/assets/homepage/circular-slider-icons/carousel/maximize-billing-efficiency.svg";
import ReduceLabourCost from "@/assets/homepage/circular-slider-icons/carousel/reduce-labour-cost.svg";
import RegulateServiceQuality from "@/assets/homepage/circular-slider-icons/carousel/regulate-service-quality.svg";
import DataApp from "@/assets/homepage/circular-slider-icons/data-app.svg";
import MagnifyingGlass from "@/assets/homepage/circular-slider-icons/magnifying-glass.svg";
import Stairs from "@/assets/homepage/circular-slider-icons/stairs.svg";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import CircularCarousel from "@/components/ui/CircularCarousel";

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
    description: "Create interactive visualizations to provide actionable insights. Weave engaging narratives, tailored for impact",
    icon: Automation,
  },
  {
    heading: "Data apps",
    description: "Build data driven apps that enable last mile data collection. Link to automations and trigger actions",
    icon: DataApp,
  },
];

//Circular Carousal

const carouselItems = [
  { label: "Maximize Billing Efficiency", icon: MaximizeBillingEfficiency },
  { label: "Regulate Service Quality", icon: RegulateServiceQuality },
  { label: "Avoid Repetitive Errors", icon: AvoidRepetitiveErrors },
  { label: "Add Operational Efficiency", icon: AddOperationalEfficiency },
  { label: "Boost Customer Retention", icon: BoostCustomerRetention },
  { label: "Better Financial Control", icon: BetterFinanceControl },
  { label: "Enhance Revenue Gains", icon: EnhanceRevenueGains },
  { label: "Reduce Labour Cost", icon: ReduceLabourCost },
];

const labels = carouselItems.map((e) => e.label);
const icons = carouselItems.map((e) => e.icon);

export function CarouselSection() {
  return (
    <div
      className="bg-ivindigo-500 pt-20 pb-28"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container flex flex-col md:flex-row justify-between w-full">
        {/* Content Section */}
        <div className="flex flex-col items-start w-full md:w-1/2 gap-8">
          {bulletPoints.map((ele) => (
            <div key={ele.heading} className="flex justify-center items-center">
              <div className="flex justify-center gap-5">
                <Image src={ele.icon} alt="stairs" width={60} height={60} className="text-white" />

                <div className="flex flex-col items-center md:items-start">
                  <h1 className="text-white text-xl font-bold">{ele.heading}</h1>
                  <p className="text-gray-50 text-base">{ele.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="ml-[13px]">
            <Link href="/unified-data-platform">
              <PrimaryWhiteButton text="Know More" href="" />
            </Link>
          </div>
        </div>

        {/* Circular Component */}
        <div className="w-full md:w-1/2">
          <CircularCarousel radius={120} duration={15000} itemRadius={10} icons={icons} labels={labels} />
        </div>
      </div>
    </div>
  );
}
