import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import { UnifySimplifyAmplifyHoverEffect } from "@/components/blocks/industries/unify-simplify-amplify/unify-simplify-amplify-section";
import PrimaryButton from "@/components/ui/buttons/primary-button";
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
  formula?: string;
}

export interface unifySimplifyAmplify {
  title: string;
  description: string;
}

export type gridButtonType = {
  text: string;
  href: string;
};

export interface GridCardsSectionProps {
  heading: string;
  description?: string;
  unifySimplifyAmplify?: unifySimplifyAmplify[];
  projects: project[];
  gradientBackground?: boolean;
  buttonPrimaryWhite?: gridButtonType;
  gridHeadingClassName?: string;
}

export function GridCardsSection({
  projects,
  heading,
  description,
  gradientBackground,
  buttonPrimaryWhite,
  unifySimplifyAmplify = [],
  gridHeadingClassName,
}: GridCardsSectionProps) {
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

        {unifySimplifyAmplify.length > 0 && (
          <div className="mt-12 mb-[-20px]">
            <UnifySimplifyAmplifyHoverEffect unifySimplifyAmplify={unifySimplifyAmplify} gradientBackground={gradientBackground} />
          </div>
        )}
        <HoverEffect items={projects} gradientBackground={gradientBackground} />
        {buttonPrimaryWhite != undefined && (
          <div className="w-full flex justify-center">
            {gradientBackground ? (
              <PrimaryWhiteButton text={buttonPrimaryWhite.text} href={buttonPrimaryWhite.href} />
            ) : (
              <PrimaryButton text={buttonPrimaryWhite.text} href={buttonPrimaryWhite.href} />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
