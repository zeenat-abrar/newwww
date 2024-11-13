"use client";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface BeTheFutureProps {
  heading: string;
}

export function BeTheFuture({ heading }: BeTheFutureProps) {
  const dynamicHeading = heading.split("|");
  return (
    <div
      className="bg-ivindigo-500 dark:bg-ivindigo-500 px-28 rounded-lg shadow-lg flex justify-center items-center py-20"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center text-center">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
        <p className="text-base mt-2 text-white">
          Join us. We are rewriting the conventional ways of data analysis and visualization. Be an active participant in delivering insights to business and
          grow yourself with great experience and knowledge.
        </p>
        <div className="mt-4">
          <PrimaryWhiteButton text="Browse Roles" href="" />
        </div>
      </div>
    </div>
  );
}
