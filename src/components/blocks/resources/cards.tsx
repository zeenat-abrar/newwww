"use client";

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";

const supportcards = [
  {
    id: 1,
    title: "Getting started",
    description: "Take the first step towards unlocking the full potential of your data with Infoveave®.",
    imageUrl: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/icons8-rocket-50.png?ssl=1",
    linkText: "Learn More",
  },
  {
    id: 2,
    title: "Knowledge Base",
    description: "Get help on Infoveave® modules with examples and video tutorials.",
    imageUrl: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/icons8-knowledge-sharing-50-2.png?ssl=1",
    linkText: "Solutions",
  },
  {
    id: 3,
    title: "Release Notes",
    description: "Get updated on what is happening new with Infoveave® everyday.",
    imageUrl: "https://i0.wp.com/infoveave.com/wp-content/uploads/2023/01/icons8-magazine-50.png?ssl=1",
    linkText: "Learn More",
  },
];

export default function SupportCard() {
  return (
    <div className="flex flex-col md:flex-row gap-8 px-28">
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {supportcards.map((card) => (
            <CardContainer key={card.id} className={`shrink-0 w-full sm:w-[300px] md:w-full`}>
              <CardBody
                className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] size-auto sm:w-[30rem] rounded-xl p-6 border`}
              >
                <div className="flex justify-center items-center">
                  <CardItem className="flex justify-center items-center mb-4">
                    <Image src={card.imageUrl} alt={card.title} width={48} height={48} className="size-12" />
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
