import { StaticImageData } from "next/image";
import { TeamsHoverEffect } from "./team-hover-cards";
import NareshJois from "@/assets/about-us/team/nareshjois.webp";
import SanjayRaja from "@/assets/about-us/team/Sanjay-Raja.webp";
import SmithaBopanna from "@/assets/about-us/team/Smitha-Bopanna.webp";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import { cn } from "@/lib/utils";

export interface FoundingTeamSectionProps {
  heading: string;
  gradientBackground?: boolean;
}

type ourTeamMember = {
  name: string;
  designation: string;
  image: StaticImageData;
  about: string;
};

const ourTeamMembers: ourTeamMember[] = [
  {
    name: "Sanjay Raja",
    designation: "Director",
    image: SanjayRaja,
    about:
      "Sanjay has more than 25 years of experience and expertise in envisioning, strategizing and delivering innovative products and solutions. He has a successful track record of managing end-to-end IT Service Delivery for leading Blue chip companies. Sanjay is a Mechanical Engineer from the University of Mysore.",
  },
  {
    name: "Smitha Bopanna",
    designation: "Director",
    image: SmithaBopanna,
    about:
      "Smitha has over 20 years of experience in IT strategy consulting, full lifecycle solutions and product development. She has extensively worked on domains like Healthcare, Insurance and Financial Services. Smitha is an Engineer from NIE, Mysore and MBA from SDM-IMD, Mysore.",
  },
  {
    name: "Naresh Jois",
    designation: "Director",
    image: NareshJois,
    about:
      "Naresh has more than 15 years of experience in software architecting, design, application development for mid & large products on .NET and NodeJS technologies. As a hands on developer has in-depth knowledge of building products ground up. Naresh has a Masters’ in Applied Physics.",
  },
];

export function FoundingTeamSection({ heading, gradientBackground }: FoundingTeamSectionProps) {
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

  return (
    <section className={cn("bg-none", sectionBackground)} style={backgroundGradientSectionStyle}>
      <div className={`w-full 3xl:max-w-[100rem] px-[3%] xl:px-[106px] mx-auto py-20`}>
        {/* Text Section */}
        <div className="text-center">
          <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
        </div>
        <TeamsHoverEffect items={ourTeamMembers} gradientBackground={gradientBackground} />
      </div>
    </section>
  );
}
