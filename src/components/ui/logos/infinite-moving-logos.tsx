/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface InfiniteMovingLogosProps {
  items: StaticImageData[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingLogos = ({ items, direction = "left", speed = "slow", className }: InfiniteMovingLogosProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    // addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set the direction and speed
      getDirection();
      getSpeed();
      setStart(true); // Trigger the animation by updating state
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "normal");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "300s");
      }
    }
  };

  return (
    <div ref={containerRef} className={cn("scroller relative z-20 w-[95%] lg:max-w-4xl xl:max-w-[1080px] 2xl:max-w-[1320px] overflow-hidden", className)}>
      <ul ref={scrollerRef} className={cn("flex min-w-full shrink-0 gap-4 py-2 w-max flex-nowrap", start && "animate-scroll-card")}>
        {items.map((item, idx) => (
          <li className="w-[250px] max-w-full relative flex flex-col rounded-2xl border shrink-0 p-4 bg-white" key={idx}>
            <blockquote className="flex-1">
              <div aria-hidden="true" className="pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]"></div>
              <Image src={item} alt="logos" width={250} height={100} className="w-full h-20" />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
