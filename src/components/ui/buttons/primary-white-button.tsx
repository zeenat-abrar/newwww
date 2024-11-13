"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryWhiteButtonProps {
  text: string;
  className?: string;
  paddingSide?: number;
  href?: string;
}

const PrimaryWhiteButton = ({ text, href, className }: PrimaryWhiteButtonProps) => {
  return (
    <Link href={href ?? ""}>
      <button
        className={cn(
          "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] group relative inline-flex items-center overflow-hidden rounded-md bg-white hover:bg-ivindigo-100 border border-white hover:border-ivindigo-200 px-4 xl:px-10 py-3 text-sm font-medium text-gray-600 hover:text-stone-900 uppercase",
          className
        )}
      >
        <span className="absolute left-0 top-1/2 block h-0 w-full bg-ivindigo-200"></span>
        <span className="ease absolute right-0 hidden xl:flex size-10 translate-x-full items-center justify-start duration-500 group-hover:-translate-x-2">
          <FontAwesomeIcon icon={faAngleRight} className="ml-1 text-stone-900 text-sm" />
        </span>
        <span className="relative duration-700 xl:group-hover:-translate-x-3">{text}</span>
      </button>
    </Link>
  );
};

export default PrimaryWhiteButton;
