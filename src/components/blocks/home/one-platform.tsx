"use client";

import Image, { StaticImageData } from "next/image";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";
import TopSubHeading from "@/components/ui/headings/top-sub-heading";

interface OnePlatformProps {
  heading: string;
  description: string;
  image?: StaticImageData;
  videoSrc?: string;
}

export default function OnePlatform({ heading, description, image, videoSrc }: OnePlatformProps) {
  const dynamicHeading = heading.split("|");
  return (
    <div className="px-[3%] xl:px-[104px] py-12 md:py-20 3xl:max-w-[100rem] 3xl:mx-auto">
      <TopSubHeading text="INFOVEAVE® DATA AUTOMATION & DECISION INTELLIGENCE" />
      <MainHeadingWithSpan firstText={dynamicHeading[0]} specialText={dynamicHeading[1]} lastText={dynamicHeading[2]} alignText="center" />
      <p className="lg:px-4 text-center pb-4 lg:text-base">{description}</p>
      {image && (
        <div className="container flex justify-center items-center mt-4">
          <Image src={image} width={1000} height={1000} alt="Infoveave-one platform image" style={{ mixBlendMode: "multiply" }} />
        </div>
      )}
      {image && (
        <div className="container flex justify-center items-center mt-4">
          <Image src={image} width={1000} height={1000} alt="Infoveave-one platform image" style={{ mixBlendMode: "multiply" }} />
        </div>
      )}

      {videoSrc != undefined && (
        <div className="w-full lg:w-[70%] flex items-center justify-center mx-auto mt-24 pt-5 pb-2 ">
          <video
            src={videoSrc}
            autoPlay // Autoplays the video
            loop // Loops the video
            muted // Mutes the video
            playsInline
            className="rounded-t-lg md:rounded-l-lg md:rounded-t-none border border-gray-100"
            style={{ marginTop: "-100px", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }} // Apply inline style for negative margin
            preload="none" // Lazy load the video by not preloading it
          />
        </div>
      )}
    </div>
  );
}
