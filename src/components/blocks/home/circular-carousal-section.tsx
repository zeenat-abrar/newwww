"use client";
import Image from "next/image";
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

interface CarouselSectionProps {
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

export function CircularCarouselSection({ knowMoreButtonHref }: CarouselSectionProps) {
  return (
    <section
      className="bg-ivindigo-500 py-10 lg:py-20 2xl:py-40"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="2xl:max-w-[100rem] 2xl:mx-auto px-[3%] xl:pl-[104px] xl:pr-[125px] flex flex-col xl:flex-row justify-between items-center">
        {/* Content Section */}
        <div className="flex flex-col items-start justify-end w-full xl:w-1/2 gap-8">
          {bulletPoints.map((ele) => (
            <div key={ele.heading} className="flex justify-start items-center">
              <div className="flex justify-center gap-5">
                <Image src={ele.icon} alt={ele.alt} width={50} height={50} />

                <div className="flex flex-col items-start">
                  <h1 className="text-white text-base md:text-xl  font-bold">{ele.heading}</h1>
                  <p className="text-gray-50 md:text-base">{ele.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="mx-auto lg:mx-0">
            <PrimaryWhiteButton text="Know more" href={knowMoreButtonHref} />
          </div>
        </div>

        {/* Circular Component */}
        <div className="hidden xl:flex 2xl:hidden justify-center xl:justify-end xl:mr-[14px] w-full xl:w-1/2 xl:mt-[-80px]">
          <CircularCarousel radius={100} duration={15000} itemRadius={10} icons={icons} labels={labels} />
        </div>

        {/* Circular Component - For Bigger Screen*/}
        <div className="hidden 2xl:flex justify-center 2xl:justify-end 2xl:mr-[14px] w-full 2xl:w-1/2 2xl:mt-[-80px]">
          <CircularCarousel radius={120} duration={15000} itemRadius={10} icons={icons} labels={labels} />
        </div>
      </div>
    </section>
  );
}
