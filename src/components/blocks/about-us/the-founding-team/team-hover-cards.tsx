"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const TeamsHoverEffect = ({
  items,
  className,
  gradientBackground,
}: {
  items: {
    name: string;
    about: string;
    designation?: string;
    image: StaticImageData;
  }[];
  className?: string;
  gradientBackground?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardColor = gradientBackground ? "bg-white bg-opacity-100" : "bg-opacity-60";

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10", className)}>
      {items.map((item, idx) => (
        <section
          key={item?.name}
          className="relative group block py-2 w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 size-full block rounded-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <TeamsCard className={cardColor}>
            <TeamsCardIcon>{item.image}</TeamsCardIcon>
            <TeamsCardTitle>{item.name}</TeamsCardTitle>
            <TeamsCardDesignation>{item.designation}</TeamsCardDesignation>
            <TeamsCardAbout>{item.about}</TeamsCardAbout>
            <div className="flex mt-4 justify-center">
              <Link href="#" className="w-6">
                <Image
                  className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                  src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG27.png"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </TeamsCard>
        </section>
      ))}
    </div>
  );
};

export const TeamsCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      className={cn(
        "rounded-xl z-10 bg-opacity-60 h-full w-full p-6 overflow-hidden bg-white backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 duration-350 relative",
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

export const TeamsCardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-black font-semibold text-base text-center", className)}>{children}</h4>;
};

export const TeamsCardDesignation = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h5 className={cn("text-gray-500 text-sm text-center", className)}>{children}</h5>;
};

export const TeamsCardAbout = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-black mt-4 text-sm text-center min-h-[150px]", className)}>{children}</p>;
};

export const TeamsCardIcon = ({ children }: { className?: string; children: StaticImageData }) => {
  return (
    <div className="flex justify-center mb-4">
      <Image
        className="size-32 rounded-full border border-gray-100 mx-auto"
        src={children}
        alt="Infoveave - Team Image"
        width={64}
        height={64}
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      />
    </div>
  );
};
