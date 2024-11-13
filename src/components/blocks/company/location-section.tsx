"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

interface LocationProps {
  heading: string;
}
export function LocationSection({ heading }: LocationProps) {
  const dynamicHeading = heading.split("|");
  return (
    <div className="py-10">
      <div className="flex justify-center items-center mb-10">
        <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} />
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center flex-1">
        <div className="h-80 w-full xl:w-2/6 flex items-center justify-center ">
          <PinContainer title="Bangalore, India" href="#">
            <div className="flex basis-full flex-col p-10 tracking-tight text-slate-100/50 sm:basis-1/2 w-96 h-52 ">
              <h3 className="!pb-2 font-bold text-base text-black text-center">India</h3>
              <div className="text-base text-center">
                <span className="text-slate-500">
                  Noesys Software Private Limited. #564, 1st Floor, “Srigandha Arcade”, 9th Cross, J.P. Nagar 3rd Phase, Bengaluru, Karnataka, 560078.
                </span>
              </div>
            </div>
          </PinContainer>
        </div>
        <div className="h-80 w-full xl:w-2/6 flex items-center justify-center ">
          <PinContainer title="Melbourne, Australia" href="#">
            <div className="flex basis-full flex-col p-10 tracking-tight text-slate-100/50 sm:basis-1/2 w-96 h-52">
              <h3 className="!pb-2 font-bold text-base text-black text-center">Australia</h3>
              <div className="text-base text-center">
                <span className="text-slate-500">Infoveave Pty Ltd,</span>
                <br />
                <span className="text-slate-500">Church St, Richmond, VIC 3121,</span>
                <br />
                <span className="text-slate-500">Australia</span>
                <br />
                <span className="text-slate-500">ACN 666 469 941 418</span>
              </div>
            </div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
