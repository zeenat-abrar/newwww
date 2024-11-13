"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
  gradientBackground,
}: {
  items: {
    title: string;
    description: string[] | string;
    linkText?: string;
    linkUrl?: string;
    imageUrl?: string | StaticImageData;
    formula?: string;
  }[];
  className?: string;
  gradientBackground?: boolean;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const cardColor = gradientBackground ? "bg-white bg-opacity-100" : "bg-opacity-60";

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <section
          key={item?.title}
          className="relative group block py-2 md:p-2 w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 size-full bg-gradient-to-br group-hover:bg-gradient-to-b group-hover:from-ivindigo-100 group-hover:to-ivindigo-300 block rounded-2xl"
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
          <Card className={cardColor}>
            {item.imageUrl && <CardIcon>{item.imageUrl}</CardIcon>}
            <CardTitle>{item.title}</CardTitle>
            {Array.isArray(item.description) ? (
              item.description.map((desc, index) => <CardDescription key={index}>{desc}</CardDescription>)
            ) : (
              <CardDescription>{item.description}</CardDescription>
            )}
            {item.formula != undefined && (
              <CardFormula className={`${hoveredIndex === idx ? "bg-ivindigo-200 border-ivindigo-900" : ""}`}>{item.formula}</CardFormula>
            )}
            {item.linkText && <CardLink href={item.linkUrl ?? "#"}>{item.linkText}</CardLink>}
          </Card>
        </section>
      ))}
    </div>
  );
};

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      className={cn(
        "rounded-xl z-10 bg-opacity-60 h-full w-full p-6 overflow-hidden bg-white backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 duration-350 relative",
        "group-hover:bg-gradient-to-br group-hover:from-ivindigo-100 group-hover:to-ivindigo-300 group-hover:border group-hover:border-ivindigo-300",
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

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-black font-semibold text-base text-center", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-black mt-4 text-sm text-center", className)}>{children}</p>;
};

export const CardFormula = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("text-black border-l-4 border-ivviolet-900 p-2 bg-ivviolet-200 mt-4 text-sm text-center", className)}>{children}</p>;
};

export const CardIcon = ({ children }: { className?: string; children?: string | StaticImageData }) => {
  const defaultImageUrl = "/";
  const imageUrl = typeof children === "string" || typeof children === "object" ? children : defaultImageUrl;

  return (
    <div className="flex justify-center mb-4">
      <Image src={imageUrl} alt="Card icon" width={40} height={40} />
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
