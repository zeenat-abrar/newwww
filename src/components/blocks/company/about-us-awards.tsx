import { HoverEffect } from "@/components/ui/card-hover-effect";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface project {
  title: string;
  description: string;
  link: string;
}

interface GridCardsSectionProps {
  heading: string;
  projects: project[];
}

export function AboutUsAward({ projects, heading }: GridCardsSectionProps) {
  const dynamicHeading = heading.split("|");
  return (
    <div className="container w-full mx-auto pt-20 pb-0">
      {/* Text Section */}
      <div className="flex justify-center items-center">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
