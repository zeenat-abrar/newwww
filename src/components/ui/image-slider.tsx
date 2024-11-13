/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Transition } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Item {
  img: StaticImageData;
  desc: string;
  buttonIcon: StaticImageData;
}

const ImageSlider = React.memo(({ items }: { items: Item[] }) => {
  const duration = 5000; // Duration for slider to auto-change
  const [active, setActive] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Start interval to update active image
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, duration);
  }, [items.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [resetTimer]);

  const handleButtonClick = useCallback(
    (index: number) => {
      setActive(index);
      resetTimer();
    },
    [resetTimer]
  );

  return (
    <div className="w-full max-w-[960px] mx-auto text-center">
      {/* Buttons */}
      <ButtonList items={items} active={active} onButtonClick={handleButtonClick} />
      {/* Slider Wrapper */}
      <div className="relative w-full h-[250px] md:h-[440px] lg:h-[540px] mb-[-25px] md:mb-0 overflow-hidden">
        {/* Image Transition Container */}
        {items.map((item, index) => (
          <Transition
            key={index}
            show={active === index}
            enter="transition-opacity duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-500 ${active === index ? "opacity-100" : "opacity-0"}`}
            >
              <Image loading="lazy" src={item.img} width={1024} height={576} alt={item.desc} className="object-cover" />
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
});

// Setting display name for ImageSlider
ImageSlider.displayName = "ImageSlider";

// Memoized ButtonList component with CSS-based progress animation
const ButtonList = React.memo(({ items, active, onButtonClick }: any) => (
  <div className="md:max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-0 lg:gap-4 mb-4">
    {items.map((item: any, index: number) => (
      <button
        key={index}
        className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
        onClick={() => onButtonClick(index)}
      >
        <span
          className={`text-center flex flex-col items-center ${
            active === index ? "" : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
          }`}
        >
          <span className="flex items-center justify-center relative size-8 rounded-full bg-ivindigo-100 mb-2">
            <Image src={item.buttonIcon} alt={item.desc} />
          </span>
          <span className="block text-[12px] font-medium text-slate-900 mb-2">{item.desc}</span>
          <span className="block relative w-full bg-slate-200 h-1 rounded-full overflow-hidden" role="progressbar" aria-valuenow={active === index ? 100 : 0}>
            <span
              className={`absolute inset-0 bg-ivindigo-500 rounded-[inherit] transition-all duration-[5000ms] ease-linear`}
              style={{ width: active === index ? "100%" : "0%" }}
            ></span>
          </span>
        </span>
      </button>
    ))}
  </div>
));

// Setting display name for ButtonList
ButtonList.displayName = "ButtonList";

export default ImageSlider;
