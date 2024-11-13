"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Client from "@/assets/contact-us-highlight-svgs/client.svg";
import Live from "@/assets/contact-us-highlight-svgs/live.svg";
import Project from "@/assets/contact-us-highlight-svgs/project.svg";
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

export function HappyClient() {
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
      imgSrc: Client,
      alt: "Happy Clients",
      count: useCounter(22, 200, isVisible),
      label: "Happy Clients",
    },
    {
      id: 2,
      imgSrc: Project,
      alt: "Completed Projects",
      count: useCounter(109, 200, isVisible),
      label: "Completed Projects",
    },
    {
      id: 3,
      imgSrc: Live,
      alt: "Live Projects",
      count: useCounter(62, 200, isVisible),
      label: "Live Projects",
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
      <div className="xl:max-w-[100rem] xl:mx-auto px-6 lg:px-20 py-8 md:pt-12 md:pb-16 grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 sm:gap-14">
        {data.map(({ id, imgSrc, count, label }) => (
          <div key={id} className="px-0 lg:px-10">
            <div className="flex justify-center items-center mb-2">
              <Image src={imgSrc} alt="img" width={70} height={70} />
            </div>
            <h1 className="text-xl md:text-2xl text-white text-center font-bold">{count}+</h1>
            <p className="md:text-base text-gray-50 text-center">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
