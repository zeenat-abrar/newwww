"use client";
import InfoveaveShapeGradient from "@/assets/infoveave-shape-gradient.png";
import PrimaryWhiteButton from "@/components/ui/buttons/primary-white-button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

interface Word {
  text: string;
  className?: string;
}

interface DownloadNowMiniFormProps {
  words: Word[];
  heading: string;
}

export function DownloadNowMiniForm({ words, heading }: DownloadNowMiniFormProps) {
  return (
    <div
      className="flex flex-col items-center justify-center h-80 bg-ivindigo-500 p-6 shadow-lg"
      style={{
        backgroundImage: `url(${InfoveaveShapeGradient.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <p className="text-xl text-white">{heading}</p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-[250px] rounded-md border border-gray-600 dark:border-white px-3 text-sm outline-none"
        />
        <PrimaryWhiteButton text="Download now" href="" />
      </div>
    </div>
  );
}
