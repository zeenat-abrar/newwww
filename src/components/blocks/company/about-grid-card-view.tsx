import { HoverEffect } from "@/components/ui/card-hover-effect";

interface project {
  title: string;
  description: string;
  link: string;
}

interface GridCardsSectionProps {
  heading?: string;
  projects: project[];
}

export function AboutGridCardsSection({ projects }: GridCardsSectionProps) {
  return (
    <div className="container w-full mx-auto py-20">
      <HoverEffect items={projects} />
    </div>
  );
}
