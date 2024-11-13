"use client";
import { IconName } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { unifySimplifyAmplify } from "../grid-card-view";
import servicesShape1 from "@/assets/unify-simplify-amplify/services-shape-1.svg";
import servicesShape2 from "@/assets/unify-simplify-amplify/services-shape-2.svg";
import servicesShape3 from "@/assets/unify-simplify-amplify/services-shape-3.svg";
import servicesShape from "@/assets/unify-simplify-amplify/services-shape.svg";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

type dataType = {
  heading1: string;
  heading2: string;
  image: StaticImageData;
  icon: IconName;
};

const data: dataType[] = [
  { heading1: "Unify", heading2: "Your Data", image: servicesShape1, icon: "arrow-progress" },
  { heading1: "Simplify", heading2: "Processes", image: servicesShape2, icon: "gear" },
  { heading1: "Amplify", heading2: "Your Insights", image: servicesShape3, icon: "bolt" },
];

export const UnifySimplifyAmplifyHoverEffect = ({
  unifySimplifyAmplify,
  className,
  gradientBackground,
}: {
  unifySimplifyAmplify: unifySimplifyAmplify[];
  className?: string;
  gradientBackground?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardColor = gradientBackground ? "bg-white bg-opacity-100" : "bg-opacity-60";

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white rounded-2xl md:gap-4 md:m-2", className)}>
      {unifySimplifyAmplify.map((item, idx) => (
        <section key={item?.title} className="relative group block w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
          <Card className={cn("", cardColor)}>
            <div className={cn("bg-white rounded-lg px-6 md:p-3 wow fadeIn", idx == 2 ? "pb-3" : "")} data-wow-duration="1s" data-wow-delay="0.2s">
              <div className="md:mt-2">
                <div className={cn("flex justify-center mb-4", idx == 0 ? "mt-4 md:mt-0" : "mt-[-20px] md:mt-0")}>
                  <CardIcon primaryShape={servicesShape} secondaryShape={data[idx].image} icon={data[idx].icon} />
                </div>
                <div className="mt-2">
                  <div className="border-b border-indigo-500 w-12 mx-auto mb-4"></div>
                  <CardTitle heading1={data[idx].heading1} heading2={data[idx].heading2} />
                  <p className="text-center text-sm mt-4">{item.description}</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-xl z-10 bg-opacity-60 h-full w-full py-6 px-2 overflow-hidden bg-white backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 duration-350 relative",
        "transition-colors duration-350",
        className
      )}
    >
      <div className="relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, heading1, heading2 }: { className?: string; heading1: string; heading2: string }) => {
  return (
    <h3 className="text-xl font-semibold text-center">
      {heading1} <span className="text-indigo-500">{heading2}</span>
    </h3>
  );
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-black mt-4 text-sm text-center", className)}>{children}</p>;
};

export const CardIcon = ({
  primaryShape,
  secondaryShape,
  icon,
}: {
  className?: string;
  primaryShape: StaticImageData;
  secondaryShape: StaticImageData;
  icon: IconName;
}) => {
  return (
    <div className="relative mb-6 inline-block size-20">
      {" "}
      {/* Set desired width and height here */}
      <Image src={primaryShape} alt="shape" className="absolute inset-0 size-full z-0 object-cover" style={{ transform: "rotate(45deg)" }} />
      <Image src={secondaryShape} alt="shape" className="absolute inset-0 size-full z-10 object-cover" />
      <Icon icon={["fal", icon]} size="2x" className="relative z-20 text-white mt-6 ml-5" />
    </div>
  );
};

export const CardLink = ({ children, href }: { className?: string; children: React.ReactNode; href: string }) => {
  return (
    <a href={href} className="text-ivindigo-500 mt-3 hover:underline text-center flex justify-center">
      {children}
    </a>
  );
};
