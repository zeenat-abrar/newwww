"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Charts from "@/assets/actionable-insights/charts.svg";
import Infoboard from "@/assets/actionable-insights/infoboard.svg";
import Computer from "@/assets/actionable-insights/report.svg";
import Target from "@/assets/actionable-insights/target.svg";
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

export function ActionableInsightsCounter() {
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
      imgSrc: Charts,
      count: useCounter(51, 300, isVisible),
      label: "Inbuilt Charts & Graphs",
      suffix: "+",
    },
    {
      id: 2,
      imgSrc: Infoboard,
      count: useCounter(2500, 300, isVisible),
      label: "Custom Infoboards",
      suffix: "+",
    },
    {
      id: 3,
      imgSrc: Computer,
      count: useCounter(5600, 300, isVisible),
      label: "Custom Tailored Reports",
      suffix: "+",
    },
    {
      id: 4,
      imgSrc: Target,
      count: useCounter(10, 300, isVisible),
      label: "Targets & Thresholds",
      suffix: "+",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-ivindigo-500 px-20 pt-12 pb-16 shadow-lg flex flex-col md:flex-row justify-center items-center gap-14 md:gap-0"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {data.map(({ id, imgSrc, count, label, suffix }) => (
        <div key={id} className="w-full md:w-1/4 px-0 md:px-10">
          <div className="flex justify-center items-center mb-2">
            <Image src={imgSrc} alt="img" width={40} height={40} />
          </div>
          <h1 className="text-4xl text-black text-center font-bold mb-2">
            {count}
            {suffix}
          </h1>
          <p className="text-base text-white text-center">{label}</p>
        </div>
      ))}
    </div>
  );
}
