"use client";

import Image from "next/image";
import Hand from "@/assets/industry-solutions-page/hand.svg";
import Headphones from "@/assets/industry-solutions-page/headphone.svg";
import Finance from "@/assets/industry-solutions-page/money.svg";
import Suppply from "@/assets/industry-solutions-page/productivity.svg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
const supportcards = [
  {
    id: 1,

    title: "Customer Service",
    description: "Maximize the Return on Investment & Customer Lifetime Value with targeted campaigns.",
    imageUrl: Headphones,
    linkText: "Read More",
    linkUrl: "/about-us#contactus",
  },
  {
    id: 2,
    title: "Finance",
    description: "Optimize cash reserves, identify potential shortfalls, and make informed decisions about borrowing or investing.",
    imageUrl: Finance,
    linkText: "Read More",
    linkUrl: "#",
  },
  {
    id: 3,
    title: "Supply Chain",
    description: "Improve productivity, demand forecasting, supply chain management, and inventory controls.",
    imageUrl: Suppply,
    linkText: "Read More",
    linkUrl: "#",
  },
  {
    id: 4,
    title: "HR",
    description: "Boost employee acquisition with automated ATS & performance evaluation.",
    imageUrl: Hand,
    linkText: "Read More",
    linkUrl: "/about-us#contactus",
  },
];
interface cardsprops {
  heading: string;
}
export default function ServiceCard({ heading }: cardsprops) {
  const dynamicHeading = heading.split("|");

  return (
    <div className="flex flex-col md:flex-row gap-8 px-28 py-20">
      <div className="w-full">
        <div className="flex justify-center">
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 pt-5">
          {supportcards.map((card) => (
            <CardContainer key={card.id} className={`shrink-0 w-full sm:w-[300px] md:w-full`}>
              <CardBody
                className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] size-auto sm:w-[30rem] rounded-xl p-6 border`}
              >
                <div className="flex justify-center items-center">
                  <CardItem className="flex justify-center items-center mb-4">
                    {/* <img src={card.imageUrl} alt={card.title} className="size-12" /> */}
                    <Image src={card.imageUrl} alt="card" width={40} height={40} />
                  </CardItem>
                </div>
                <div className="flex justify-center items-center">
                  <CardItem className="text-xl font-semibold mb-2 text-center">{card.title}</CardItem>
                </div>
                <CardItem className="text-black py-3 text-center">{card.description}</CardItem>
                <div className="flex justify-center items-center">
                  <CardItem className="text-ivindigo-500 cursor-pointer">
                    <a href={card.linkUrl}>{card.linkText}</a>
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
