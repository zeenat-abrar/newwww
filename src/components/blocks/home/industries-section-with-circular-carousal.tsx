"use client";
import Link from "next/link";
import React from "react";
import AddOperationalEfficiency from "@/assets/homepage/circular-slider-icons/carousel/add-operational-efficiency.svg";
import AvoidRepetitiveErrors from "@/assets/homepage/circular-slider-icons/carousel/avoid-repetitive-errors.svg";
import BetterFinanceControl from "@/assets/homepage/circular-slider-icons/carousel/better-finance-control.svg";
import BoostCustomerRetention from "@/assets/homepage/circular-slider-icons/carousel/boost-customer-retention.svg";
import EnhanceRevenueGains from "@/assets/homepage/circular-slider-icons/carousel/enhance-revenue-gains.svg";
import MaximizeBillingEfficiency from "@/assets/homepage/circular-slider-icons/carousel/maximize-billing-efficiency.svg";
import ReduceLabourCost from "@/assets/homepage/circular-slider-icons/carousel/reduce-labour-cost.svg";
import RegulateServiceQuality from "@/assets/homepage/circular-slider-icons/carousel/regulate-service-quality.svg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryButtonSmall from "@/components/ui/buttons/primary-button-small";
import CircularCarousel from "@/components/ui/CircularCarousel";

interface IndustriesSectionWithCircularCarousalProps {
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

export default function IndustriesSectionWithCircularCarousal({ heading, description, industryButtonHref }: IndustriesSectionWithCircularCarousalProps) {
  return (
    <div className="xl:max-w-[100rem] xl:mx-auto flex flex-col lg:flex-row gap-8 py-10 md:pb-20 md:pt-14 sm:pt-28 px-[3%] xl:px-[104px]">
      {/* Left Section */}
      <div className="w-full xl:w-1/2">
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

      {/* Circular Component */}
      <div className="hidden xl:flex 2xl:hidden justify-center items-center xl:justify-end xl:mr-[35px] w-full xl:w-1/2">
        <CircularCarousel radius={100} duration={15000} itemRadius={10} icons={icons} labels={labels} />
      </div>

      {/* Circular Component - For Bigger Screen*/}
      <div className="hidden 2xl:flex justify-center items-center 2xl:justify-end 2xl:mr-[35px] 2xl:mt-[-45px] w-full 2xl:w-1/2">
        <CircularCarousel radius={120} duration={15000} itemRadius={10} icons={icons} labels={labels} />
      </div>
    </div>
  );
}
