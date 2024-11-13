"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
export interface InfiniteMovingCardItemType {
  icon: string;
  quote: string;
  name: string;
  title: string;
}
export interface InfiniteMovingCardProps {
  items: InfiniteMovingCardItemType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}
export const InfiniteMovingCards = ({ items, direction = "left", speed = "slow", pauseOnHover = true, className }: InfiniteMovingCardProps) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
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
        containerRef.current.style.setProperty("--animation-duration", "200s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-[95%] lg:max-w-4xl xl:max-w-[1080px] 2xl:max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll-card",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li className="w-[350px] max-w-full relative flex flex-col rounded-2xl border shrink-0 px-8 py-6 md:w-[450px] bg-white" key={idx}>
            <blockquote className="flex-1">
              <div
                aria-hidden="true"
                className={cn("user-select-none pointer-events-none absolute -left-0.5 -top-0.5 size-[calc(100%_+_4px)]", "user-select-none")}
              ></div>

              <span className="relative z-20 text-sm font-normal">{item.quote}</span>
            </blockquote>

            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className="text-base font-bold">{item.name}</span>
                <span className="text-sm font-semibold">{item.title}</span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
