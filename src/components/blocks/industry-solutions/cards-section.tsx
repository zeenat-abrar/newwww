"use client";

import Image from "next/image";
import Building from "@/assets/industry-solutions-page/building.svg";
import Car from "@/assets/industry-solutions-page/car.svg";
import Cart from "@/assets/industry-solutions-page/cart.svg";
import Energy from "@/assets/industry-solutions-page/energy.svg";
import Healthcare from "@/assets/industry-solutions-page/healthcare.svg";
import Telecom from "@/assets/industry-solutions-page/telecom.svg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

const supportcards = [
  {
    id: 1,

    title: "Retail",
    description: "Optimize, streamline, track, and get updates on purchase orders, to drive the business forward.",
    imageUrl: Cart,
    linkText: "Read More",
  },
  {
    id: 2,
    title: "Energy",
    description: "Improve product quality with OEE, APQ, supply chain management and manpower analysis.",
    imageUrl: Energy,
    linkText: "Read More",
  },
  {
    id: 3,
    title: "Healthcare",
    description: "Optimize, streamline, track, and get updates on purchase orders, to drive the business forward.",
    imageUrl: Healthcare,
    linkText: "Read More",
  },
  {
    id: 4,
    title: "Automotive",
    description: "Track and monitor dealer, sales and service performance & optimize inventory and supply chain.",
    imageUrl: Car,
    linkText: "Read More",
  },
  {
    id: 5,
    title: "Manufacturing",
    description: "Improve product quality with OEE, APQ, supply chain management and manpower analysis.",
    imageUrl: Building,
    linkText: "Read More",
  },
  {
    id: 6,
    title: "Telecom",
    description: "Analyze network usage, billing, and customer satisfaction data to ensure streamlined processing.",
    imageUrl: Telecom,
    linkText: "Read More",
  },
];
interface cardsprops {
  heading: string;
}
export default function IndustryCard({ heading }: cardsprops) {
  const dynamicHeading = heading.split("|");

  return (
    <div className="flex flex-col md:flex-row gap-8 px-28 py-20">
      <div className="w-full">
        <div className="flex justify-center">
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-5">
          {supportcards.map((card) => (
            <CardContainer key={card.id} className={`shrink-0 w-full sm:w-[300px] md:w-full`}>
              <CardBody
                className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] size-auto sm:w-[30rem] rounded-xl p-6 border`}
              >
                <div className="flex justify-center items-center">
                  <CardItem className="flex justify-center items-center mb-4">
                    {/* <img src={card.imageUrl} alt={card.title} className="size-12" /> */}
                    <Image src={card.imageUrl} alt="img" width={40} height={40} />
                  </CardItem>
                </div>
                <div className="flex justify-center items-center">
                  <CardItem className="text-xl font-semibold mb-2 text-center">{card.title}</CardItem>
                </div>
                <CardItem className="text-black py-3 text-center">{card.description}</CardItem>
                <div className="flex justify-center items-center">
                  <CardItem className="text-indigo-500 cursor-pointer">
                    <a href="#">{card.linkText}</a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
}
