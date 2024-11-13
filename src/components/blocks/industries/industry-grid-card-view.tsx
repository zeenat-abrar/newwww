import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface project {
  title: string;
  description: string[] | string;
  linkText?: string;
  imageUrl?: string;
  linkUrl?: string;
}

export type gridButtonType = {
  text: string;
  href: string;
};

export type cardContent = {
  summary?: string;
  projects: project[];
};

export interface IndustryGridCardsSectionProps {
  heading: string;
  description?: string;
  cards: cardContent[];
  gradientBackground?: boolean;
  buttonPrimaryWhite?: gridButtonType;
}

export function IndustryGridCardsSection({ cards, heading, description, gradientBackground, buttonPrimaryWhite }: IndustryGridCardsSectionProps) {
  const sectionBackground = gradientBackground ? "bg-ivindigo-500" : "bg-none";

  const dynamicHeading = heading.split("|");

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
    <section className={cn("bg-none", sectionBackground)} style={backgroundGradientSectionStyle}>
      <div className={`container w-full mx-auto py-20`}>
        {/* Text Section */}
        <div className="text-center">
          <MainHeadingWithSpan
            firstText={dynamicHeading[0]}
            specialText={dynamicHeading[1]}
            lastText={dynamicHeading[2]}
            alignText="center"
            textColorClassName={textColor}
          />
        </div>
        {/* Description Section */}
        {description != undefined && (
          <div className="text-center px-10">
            <p className={cn("text-base text-center", textColor)}>{description}</p>
          </div>
        )}

        {cards.map((card, index) => (
          <div key={index}>
            {card.summary != undefined && <h3 className={cn("text-base text-center mt-10", textColor)}>{card.summary}</h3>}
            <HoverEffect items={card.projects} gradientBackground={gradientBackground} />
          </div>
        ))}
        {buttonPrimaryWhite && (
          <div className="w-full flex justify-center">
            <PrimaryWhiteButton text={buttonPrimaryWhite.text} href={buttonPrimaryWhite.href} />
          </div>
        )}
      </div>
    </section>
  );
}
