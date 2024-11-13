"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Growth from "@/assets/homepage-highlight-section-svgs/growth.svg";
import Man from "@/assets/homepage-highlight-section-svgs/man.svg";
import Money from "@/assets/homepage-highlight-section-svgs/money.svg";
import Revenue from "@/assets/homepage-highlight-section-svgs/revenue.svg";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";

function useCounter(target: number, duration: number, isActive: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return; // Only start the counter when the section is visible

    let start = 0;
    const end = target;
    const increment = target / duration;
    const timer = setInterval(() => {
      if (start < end) {
        setCount(Math.ceil(start));
        start += increment;
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, isActive]);

  return count;
}

export function RevenueGrowthCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const data = [
    {
      id: 1,
      imgSrc: Revenue,
      count: useCounter(40, 300, isVisible),
      label: "Reduced labour in the manufacturing industry",
      prefix: "",
      suffix: "%",
    },
    {
      id: 2,
      imgSrc: Money,
      count: useCounter(7, 300, isVisible),
      label: "Revenue growth in the energy & utilities industry",
      prefix: "$",
      suffix: "M+",
    },
    {
      id: 3,
      imgSrc: Man,
      count: useCounter(85, 300, isVisible),
      label: "Productivity gains in the automobile industry",
      prefix: "",
      suffix: "%",
    },
    {
      id: 4,
      imgSrc: Growth,
      count: useCounter(175, 300, isVisible),
      label: "Initial profitability in the retail industry",
      prefix: "$",
      suffix: "K+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-ivindigo-500"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="3xl:max-w-[100rem] 3xl:mx-auto px-[3%] xl:px-[104px] py-8 md:pt-12 md:pb-16 grid grid-cols-2 lg:grid-cols-4 justify-center items-center gap-8 sm:gap-14">
        {data.map(({ id, imgSrc, count, prefix, label, suffix }) => (
          <div key={id} className="px-0 xl:px-10">
            <div className="flex justify-center items-center mb-2">
              <Image src={imgSrc} alt="img" width={70} height={70} />
            </div>
            <h1 className="text-xl md:text-2xl text-white text-center font-bold">
              {prefix}
              {count}
              {suffix}
            </h1>
            <p className="md:text-base text-gray-50 text-center lg:h-[60px]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
