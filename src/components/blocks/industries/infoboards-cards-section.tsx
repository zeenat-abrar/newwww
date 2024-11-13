"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import PrimaryButton from "@/components/ui/buttons/primary-button";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeading from "@/components/ui/headings/main-heading";
import { cn } from "@/lib/utils";

// Define the types for the card data
interface CardProps {
  id: number;
  imageSrc: StaticImageData;
  title: string;
}

export type infobard3dCardsButtonType = {
  text: string;
  href: string;
};

export interface Infoboard3DCardsProps {
  numberOfCardsInARow?: 3 | 4;
  gradientBackground?: boolean;
  cards: CardProps[];
  heading: string;
  description?: string;
  button?: infobard3dCardsButtonType;
  mainSectionClassName?: string;
}

export function Infoboard3DCards({
  cards,
  numberOfCardsInARow = 3,
  gradientBackground,
  heading,
  description,
  button,
  mainSectionClassName,
}: Infoboard3DCardsProps) {
  const sectionBackground = gradientBackground ? "bg-ivindigo-500" : "bg-white";

  const backgroundGradientSectionStyle = gradientBackground
    ? {
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }
    : { background: "none" };

  const cardBackgroundColor = gradientBackground ? "bg-ivindigo-500" : "bg-white";
  const textColor = gradientBackground ? "text-white" : "text-black";

  return (
    <section
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={cn("relative w-full bg-white py-20 px-[3%] xl:px-[104px]", sectionBackground, mainSectionClassName)}
      style={backgroundGradientSectionStyle}
    >
      {/* Text Section */}
      <div className="text-center relative z-10">
        <MainHeading text={heading} alignText="center" colorClass={gradientBackground ? "text-white" : "text-black"} />
      </div>

      {/* Description Section */}
      {description && (
        <div className="container text-center mt-2">
          <p>{description}</p>
        </div>
      )}

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-5 2xl:gap-8 justify-center relative z-10 py-10",
          numberOfCardsInARow === 3 ? "xl:grid-cols-3" : "xl:grid-cols-4"
        )}
      >
        {cards.map((card) => (
          <CardContainer key={card.id} className="shrink-0 w-full">
            <CardBody
              className={cn(
                "relative group/card dark:border-white/[0.2] border-black/[0.1] size-auto sm:w-[30rem] rounded-xl px-2 py-6 border",
                cardBackgroundColor,
                "bg-opacity-30"
              )}
            >
              <CardItem translateZ="100" className="w-full">
                <Image
                  src={card.imageSrc}
                  height={600}
                  width={900}
                  className="w-full object-cover group-hover/card:shadow-xl border border-gray-300"
                  alt={card.title}
                />
              </CardItem>
              <CardItem translateZ="50" className={cn("w-full text-center text-lg font-semibold text-black pt-8", textColor)}>
                {card.title}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {button != undefined && (
        <div className="flex justify-center py-4">
          {gradientBackground ? <PrimaryWhiteButton text={button.text} href={button.href} /> : <PrimaryButton text={button.text} href={button.href} />}
        </div>
      )}
    </section>
  );
}
