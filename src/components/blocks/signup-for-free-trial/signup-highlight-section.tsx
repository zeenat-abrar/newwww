"use client";
import Image from "next/image";
import React from "react";
import PrimaryButton from "@/components/ui/buttons/primary-button";

interface BookADemoSectionProps {
  heading: string;
  buttonText: string;
}

export function SignupHighlight({ heading, buttonText }: BookADemoSectionProps) {
  return (
    <section className="xl:max-w-[100rem] xl:mx-auto py-20 px-4 md:px-[105px] flex flex-col md:flex-row items-center justify-between w-full md:gap-12">
      <div>
        <h1 className="text-base text-center lg:text-left lg:text-2xl font-bold text-black dark:text-white mb-3">{heading}</h1>
        <p className="text-base text-center md:text-left md:text-base text-black dark:text-white mb-8 md:mb-4 px-6 md:px-0">
          Get a personalized demo for your unique business use case
        </p>
        <div className="flex justify-center md:justify-start">
          <PrimaryButton text={buttonText} href="" />
        </div>
      </div>
      <div className="flex justify-end items-center pt-8 pb-16 md:pb-0">
        <Image src="https://infoveave.com/wp-content/uploads/2023/08/image-from-rawpixel-id-456067-deriv-1.png" alt="img" width={600} height={600} />
      </div>
    </section>
  );
}

export default SignupHighlight;
