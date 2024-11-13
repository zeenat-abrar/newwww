import { AwardsHoverEffect } from "./awards-card-hover-effect";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

interface project {
  title: string;
  description: string[] | string;
  linkText?: string;
  imageUrl?: string;
  linkUrl?: string;
  formula?: string;
}

export type gridButtonType = {
  text: string;
  href: string;
};

export interface AwardsGridCardsSectionProps {
  heading: string;
  description?: string;
  projects: project[];
  gradientBackground?: boolean;
  gridHeadingClassName?: string;
}

export function AwardsGridCardsSection({ projects, heading, description, gradientBackground, gridHeadingClassName }: AwardsGridCardsSectionProps) {
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
      <div className={`w-full 3xl:max-w-[100rem] px-[3%] xl:px-[104px] mx-auto py-20`}>
        {/* Text Section */}
        <div className={cn("text-center", gridHeadingClassName)}>
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
        <AwardsHoverEffect items={projects} gradientBackground={gradientBackground} />
      </div>
    </section>
  );
}
