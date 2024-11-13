"use client";
import { cn } from "@/lib/utils";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PrimaryButtonSmallProps {
  text: string;
  className?: string;
}

const PrimaryButtonSmall = ({ text, className }: PrimaryButtonSmallProps) => {
  return (
    <button
      className={cn(
        "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] group relative inline-flex items-center overflow-hidden rounded-md bg-ivviolet-600 hover:bg-ivviolet-800 border border-ivviolet-600 hover:border-ivviolet-800 px-6 py-1 text-sm font-medium text-white uppercase",
        className
      )}
    >
      <span className="absolute left-0 top-1/2 block h-0 w-full bg-ivindigo-200"></span>
      <span className="ease absolute right-0 flex size-6 translate-x-full items-center justify-start duration-500 group-hover:-translate-x-1">
        <FontAwesomeIcon icon={faAngleRight} className="ml-1 text-white text-sm" />
      </span>
      <span className="relative duration-700 group-hover:-translate-x-2">{text}</span>
    </button>
  );
};

export default PrimaryButtonSmall;
