"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const PrimaryButton = ({ text, href, className, onClick, disabled }: PrimaryButtonProps) => {
  return (
    <Link href={href ?? ""}>
      <button
        className={cn(
          "shadow-[0_4px_14px_0_rgb(0,0,0,20%)] hover:shadow-[0_6px_20px_rgba(93,93,93,30%)] group relative inline-flex items-center overflow-hidden rounded-md bg-ivviolet-600 hover:bg-ivviolet-800 border border-ivviolet-600 hover:border-ivviolet-800 px-10 py-3 text-sm font-medium text-white",
          className
        )}
        onClick={onClick}
        type="button"
        disabled={disabled}
      >
        <span className="absolute left-0 top-1/2 block h-0 w-full bg-ivindigo-200"></span>
        <span className="ease absolute right-0 flex size-10 translate-x-full items-center justify-start duration-500 group-hover:-translate-x-2">
          <FontAwesomeIcon icon={faAngleRight} className="ml-1 text-white text-sm" />
        </span>

        <span className="relative duration-700 group-hover:-translate-x-3">{text}</span>
      </button>
    </Link>
  );
};

export default PrimaryButton;
