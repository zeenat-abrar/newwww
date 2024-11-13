"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeading from "@/components/ui/headings/main-heading";
import { cn } from "@/lib/utils";

// Define the types for the card data
export interface CardProps {
  id: number;
  icon?: string;
  title: string;
  description: string;
  linkText?: string;
  href?: string;
}

interface NonGradientImageTextCardSectionProps {
  numberOfCardsInARow?: 3 | 4;
  cards: CardProps[];
  heading: string;
  description?: string;
  nonGradientCardClassName?: string;
  CardDescriptionClassName?: string;
}

export function NonGradientImageTextCardSection({
  cards,
  numberOfCardsInARow = 3,
  heading,
  description,
  nonGradientCardClassName,
  CardDescriptionClassName,
}: NonGradientImageTextCardSectionProps) {
  return (
    <section
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className="relative w-full bg-white px-[3%] xl:px-[104px] pb-10 pt-5"
      style={{ background: "none" }}
    >
      {/* Text Section */}
      <div className="text-center mt-20 relative z-10">
        <MainHeading text={heading} alignText="center" />
      </div>

      {/* Description Section */}
      {description && (
        <div className="text-center mt-2 px-10">
          <p>{description}</p>
        </div>
      )}

      <div
        style={{ marginTop: "-35px" }}
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 justify-center relative z-10 py-20",
          numberOfCardsInARow === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4"
        )}
      >
        {cards.map((card) => (
          <CardContainer key={card.id} className="shrink-0 w-full">
            <CardBody
              className={cn(
                "bg-white bg-opacity-30 relative group/card border-black/[0.1] size-auto sm:w-[30rem] rounded-xl p-11 border flex flex-col justify-between ",
                nonGradientCardClassName
              )}
            >
              <CardItem translateZ="100" className="w-full">
                {card.icon && (
                  <CardItem translateZ="50" className="w-full text-center text-xl font-bold text-ivindigo-800">
                    <Image src={card.icon} width={70} height={70} alt="icon" />
                  </CardItem>
                )}
                <CardItem translateZ="50" className="w-full text-center text-xl font-bold text-black">
                  {card.title}
                </CardItem>
                <CardItem translateZ="50" className={cn("w-full text-center text-base text-black pt-8 pb-2", CardDescriptionClassName)}>
                  {card.description}
                </CardItem>
                {card.linkText && (
                  <CardItem translateZ="50" className="w-full text-center text-base text-ivindigo-500 py-2">
                    <Link href={card.href ?? ""}>{card.linkText}</Link>
                  </CardItem>
                )}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
