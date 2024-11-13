"use client";
import React from "react";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-cards";
import MainHeading from "@/components/ui/headings/main-heading";
import { cn } from "@/lib/utils";

interface CardProps {
  id: number;
  title: string;
  description: string;
}

interface GradientTextCardSectionProps {
  numberOfCardsInARow?: 3 | 4;
  gradientBackground?: boolean;
  cards: CardProps[];
  heading: string;
  description?: string;
  cardBackgroundClassName?: string;
}

export function GradientTextCardSection({
  cards,
  numberOfCardsInARow = 3,
  gradientBackground = true,
  heading,
  description,
  cardBackgroundClassName,
}: GradientTextCardSectionProps) {
  const sectionBackground = gradientBackground ? "bg-ivindigo-500" : "bg-white";

  const backgroundGradientSectionStyle = gradientBackground
    ? {
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }
    : { background: "none" };

  const textColor = gradientBackground ? "text-white" : "text-black";

  return (
    <section className={cn("relative w-full bg-white py-10 px-[3%] xl:px-[104px]", sectionBackground)} style={backgroundGradientSectionStyle}>
      {/* Text Section */}
      <div className="text-center mt-10 relative z-10">
        <MainHeading text={heading} alignText="center" colorClass="text-white" />
      </div>

      {/* Description Section */}
      {description && (
        <div className="container text-center mt-2 text-white">
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
                "bg-ivindigo-500 bg-opacity-30 relative group/card dark:hover:shadow-5xl border-black/[0.1] size-auto sm:w-[30rem] rounded-xl p-11 border",
                cardBackgroundClassName
              )}
            >
              <CardItem translateZ="100" className="size-full">
                <CardItem translateZ="50" className="w-full text-center text-xl font-bold text-white">
                  {card.title}
                </CardItem>
                <CardItem translateZ="50" className={cn("w-full text-center text-md text-black pt-8 pb-2", textColor)}>
                  {card.description}
                </CardItem>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
}
